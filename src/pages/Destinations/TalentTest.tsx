import { useState, useEffect, useCallback, useMemo, memo } from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  Paper,
  LinearProgress,
  Stack,
  Alert,
  Checkbox,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  alpha,
  useTheme,
} from "@mui/material";
import {
  IconAlertTriangle,
  IconClock,
  IconShieldCheck,
  IconTrophy,
} from "@tabler/icons-react";

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

interface Answer {
  questionId: number;
  selectedOption: number | null;
  timeSpent: number;
}

// Sample 50 questions (you can replace with real questions from API)
const QUESTIONS: Question[] = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  question: `Question ${
    i + 1
  }: What is the significance of Renaissance art in the context of European history and cultural development?`,
  options: [
    "It marked a return to classical Greek and Roman aesthetics",
    "It focused primarily on abstract expressionism",
    "It emphasized medieval religious iconography exclusively",
    "It rejected all forms of naturalism and realism",
  ],
  correctAnswer: 0,
}));

const QUESTION_TIME_LIMIT = 10; // seconds per question
const RULES: readonly string[] = [
  "Test will run in fullscreen mode",
  "Do not switch tabs or minimize window",
  "Do not right‑click or use keyboard shortcuts",
  "3 warnings will auto‑submit and flag your test",
  "Each question has a 10 second time limit",
  "You cannot go back to previous questions",
  "50 questions total — all must be completed",
] as const;

interface TalentTestProps {
  open: boolean;
  onClose: () => void;
  destinationTitle: string;
}

const TalentTest = memo(
  ({ open, onClose, destinationTitle }: TalentTestProps) => {
    const theme = useTheme();

    // Test state
    const [testStarted, setTestStarted] = useState(false);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState<number | null>(null);
    const [answers, setAnswers] = useState<Answer[]>([]);
    const [timeLeft, setTimeLeft] = useState(QUESTION_TIME_LIMIT);
    const [testStartTime, setTestStartTime] = useState<number>(0);
    const [questionStartTime, setQuestionStartTime] = useState<number>(0);

    // Anti-cheat state
    const [cheatingAttempts, setCheatingAttempts] = useState(0);
    const [warningOpen, setWarningOpen] = useState(false);
    const [testSubmitted, setTestSubmitted] = useState(false);
    const [submissionReason, setSubmissionReason] = useState<string>("");
    const [totalTimeTaken, setTotalTimeTaken] = useState(0);
    const [hasAcknowledgedRules, setHasAcknowledgedRules] = useState(false);

    const currentQuestion = QUESTIONS[currentQuestionIndex];
    const isLastQuestion = currentQuestionIndex === QUESTIONS.length - 1;

    const exitFullscreen = useCallback(() => {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      }
    }, []);

    // Submit test (placed before handleCheating for stable reference)
    const submitTest = useCallback(() => {
      const endTime = Date.now();
      const timeTaken = Math.floor((endTime - testStartTime) / 1000);
      setTotalTimeTaken(timeTaken);
      setTestSubmitted(true);
      exitFullscreen();

      // Calculate score (side-effect only; actual display uses memoized score)
      const correctAnswers = answers.filter(
        (answer) =>
          QUESTIONS.find((q) => q.id === answer.questionId)?.correctAnswer ===
          answer.selectedOption
      ).length;
      void correctAnswers;
    }, [testStartTime, answers, exitFullscreen]);

    // Handle cheating detection (functional update for correctness)
    const handleCheating = useCallback(
      (reason: string) => {
        setCheatingAttempts((prev) => {
          const next = prev + 1;
          if (next >= 3) {
            setSubmissionReason(
              `Test auto-submitted due to cheating: ${reason}`
            );
            submitTest();
          } else {
            setWarningOpen(true);
          }
          return next;
        });
      },
      [submitTest]
    );

    // Fullscreen management (after handleCheating to avoid TDZ)
    const enterFullscreen = useCallback(() => {
      const elem = document.documentElement;
      if (elem.requestFullscreen) {
        elem.requestFullscreen().catch(() => {
          handleCheating("Failed to enter fullscreen");
        });
      }
    }, [handleCheating]);

    // Start test
    const handleStartTest = useCallback(() => {
      if (!hasAcknowledgedRules) return;
      setTestStarted(true);
      setTestStartTime(Date.now());
      setQuestionStartTime(Date.now());
      enterFullscreen();
    }, [enterFullscreen, hasAcknowledgedRules]);

    // Handle next question
    const handleNextQuestion = useCallback(() => {
      const endTime = Date.now();
      const timeSpent = Math.floor((endTime - questionStartTime) / 1000);

      // Save answer
      const newAnswer: Answer = {
        questionId: currentQuestion.id,
        selectedOption: selectedOption,
        timeSpent,
      };
      setAnswers((prev) => [...prev, newAnswer]);

      if (isLastQuestion) {
        // Submit test
        submitTest();
      } else {
        // Move to next question
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedOption(null);
        setTimeLeft(QUESTION_TIME_LIMIT);
        setQuestionStartTime(Date.now());
      }
    }, [
      currentQuestion,
      selectedOption,
      isLastQuestion,
      currentQuestionIndex,
      questionStartTime,
      submitTest,
    ]);

    // Timer effect
    useEffect(() => {
      if (!testStarted || testSubmitted) return;

      const timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            // Time's up - auto-save and move to next
            handleNextQuestion();
            return QUESTION_TIME_LIMIT;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    }, [testStarted, testSubmitted, handleNextQuestion]);

    // Anti-cheat: Detect tab switching/window blur
    useEffect(() => {
      if (!testStarted || testSubmitted) return;

      const handleVisibilityChange = () => {
        if (document.hidden) {
          handleCheating("Tab switched or window minimized");
        }
      };

      const handleBlur = () => {
        handleCheating("Window lost focus");
      };

      document.addEventListener("visibilitychange", handleVisibilityChange);
      window.addEventListener("blur", handleBlur);

      return () => {
        document.removeEventListener(
          "visibilitychange",
          handleVisibilityChange
        );
        window.removeEventListener("blur", handleBlur);
      };
    }, [testStarted, testSubmitted, handleCheating]);

    // Anti-cheat: Detect fullscreen exit
    useEffect(() => {
      if (!testStarted || testSubmitted) return;

      const handleFullscreenChange = () => {
        const isCurrentlyFullscreen = !!document.fullscreenElement;

        if (!isCurrentlyFullscreen && testStarted) {
          handleCheating("Exited fullscreen mode");
        }
      };

      document.addEventListener("fullscreenchange", handleFullscreenChange);

      return () => {
        document.removeEventListener(
          "fullscreenchange",
          handleFullscreenChange
        );
      };
    }, [testStarted, testSubmitted, handleCheating]);

    // Anti-cheat: Detect right-click
    useEffect(() => {
      if (!testStarted || testSubmitted) return;

      const handleContextMenu = (e: MouseEvent) => {
        e.preventDefault();
        handleCheating("Right-click detected");
      };

      document.addEventListener("contextmenu", handleContextMenu);

      return () => {
        document.removeEventListener("contextmenu", handleContextMenu);
      };
    }, [testStarted, testSubmitted, handleCheating]);

    // Anti-cheat: Detect keyboard shortcuts
    useEffect(() => {
      if (!testStarted || testSubmitted) return;

      const handleKeyDown = (e: KeyboardEvent) => {
        // Strict rule: ESC instantly submits the test without warning
        if (e.key === "Escape") {
          e.preventDefault();
          setSubmissionReason("Test auto-submitted: Escape key pressed");
          submitTest();
          return;
        }

        // Prevent F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U
        if (
          e.key === "F12" ||
          (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "J")) ||
          (e.ctrlKey && e.key === "u") ||
          (e.ctrlKey && e.key === "c") || // Prevent copy
          (e.ctrlKey && e.key === "v") || // Prevent paste
          (e.ctrlKey && e.key === "x") || // Prevent cut
          (e.metaKey && e.key === "c") || // Mac copy
          (e.metaKey && e.key === "v") || // Mac paste
          (e.metaKey && e.key === "x") // Mac cut
        ) {
          e.preventDefault();
          handleCheating("Attempted to use forbidden keyboard shortcut");
        }
      };

      document.addEventListener("keydown", handleKeyDown);

      return () => {
        document.removeEventListener("keydown", handleKeyDown);
      };
    }, [testStarted, testSubmitted, handleCheating, submitTest]);

    // Anti-cheat: Detect copy/paste/cut
    useEffect(() => {
      if (!testStarted || testSubmitted) return;

      const handleCopy = (e: ClipboardEvent) => {
        e.preventDefault();
        handleCheating("Copy action detected");
      };

      const handlePaste = (e: ClipboardEvent) => {
        e.preventDefault();
        handleCheating("Paste action detected");
      };

      const handleCut = (e: ClipboardEvent) => {
        e.preventDefault();
        handleCheating("Cut action detected");
      };

      document.addEventListener("copy", handleCopy);
      document.addEventListener("paste", handlePaste);
      document.addEventListener("cut", handleCut);

      return () => {
        document.removeEventListener("copy", handleCopy);
        document.removeEventListener("paste", handlePaste);
        document.removeEventListener("cut", handleCut);
      };
    }, [testStarted, testSubmitted, handleCheating]);

    // Derived values
    const progress = useMemo(
      () => ((currentQuestionIndex + 1) / QUESTIONS.length) * 100,
      [currentQuestionIndex]
    );
    const score = useMemo(() => {
      const correctAnswers = answers.filter(
        (answer) =>
          QUESTIONS.find((q) => q.id === answer.questionId)?.correctAnswer ===
          answer.selectedOption
      ).length;
      return {
        correct: correctAnswers,
        total: QUESTIONS.length,
        percentage: Math.round((correctAnswers / QUESTIONS.length) * 100),
      };
    }, [answers]);

    const handleClose = () => {
      if (testStarted && !testSubmitted) {
        if (
          window.confirm(
            "Are you sure you want to exit? Your progress will be lost."
          )
        ) {
          exitFullscreen();
          onClose();
        }
      } else {
        exitFullscreen();
        onClose();
      }
    };

    return (
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth={false}
        fullScreen
        PaperProps={{
          sx: {
            bgcolor: "background.default",
          },
        }}
      >
        {/* Warning Dialog */}
        <Dialog open={warningOpen} onClose={() => setWarningOpen(false)}>
          <DialogTitle sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <IconAlertTriangle color={theme.palette.error.main} />
            <Typography variant="h6" fontWeight={700}>
              Cheating Detected!
            </Typography>
          </DialogTitle>
          <DialogContent>
            <Typography variant="body2" color="text.secondary">
              Warning {cheatingAttempts}/3: Suspicious activity detected. On 3
              warnings, your test will be automatically submitted and flagged.
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setWarningOpen(false)} variant="contained">
              I Understand
            </Button>
          </DialogActions>
        </Dialog>

        {/* Test Content */}
        {!testStarted && !testSubmitted && (
          <Box
            sx={{
              minHeight: "100vh",
              display: "grid",
              placeItems: "center",
              px: 2,
            }}
          >
            <Paper
              elevation={0}
              sx={{
                width: "100%",
                maxWidth: 720,
                border: `1px solid ${alpha(theme.palette.divider, 0.5)}`,
                borderRadius: 2,
                bgcolor: "background.paper",
                boxShadow: `0 8px 30px ${alpha(
                  theme.palette.common.black,
                  0.15
                )}`,
                overflow: "hidden",
              }}
            >
              {/* Header */}
              <Box
                sx={{
                  px: 4,
                  py: 3,
                  display: "flex",
                  alignItems: "center",
                  gap: 1.5,
                  borderBottom: `1px solid ${alpha(
                    theme.palette.divider,
                    0.6
                  )}`,
                  bgcolor: alpha(theme.palette.primary.main, 0.04),
                }}
              >
                <IconShieldCheck size={32} color={theme.palette.primary.main} />
                <Box sx={{ flex: 1, minWidth: 0 }}>
                  <Typography
                    variant="h6"
                    fontWeight={800}
                    sx={{
                      lineHeight: 1.2,
                      mb: 0.5,
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {destinationTitle}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    fontWeight={600}
                  >
                    Talent Test — Please review and accept the rules
                  </Typography>
                </Box>
              </Box>

              {/* Rules */}
              <Box sx={{ p: 4 }}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 3,
                    mb: 3,
                    borderRadius: 2,
                    bgcolor: alpha(theme.palette.warning.main, 0.08),
                    border: `1px solid ${alpha(
                      theme.palette.warning.main,
                      0.35
                    )}`,
                  }}
                >
                  <Stack
                    direction="row"
                    alignItems="center"
                    spacing={1}
                    sx={{ mb: 1.5 }}
                  >
                    <IconAlertTriangle color={theme.palette.warning.main} />
                    <Typography variant="subtitle2" fontWeight={800}>
                      Anti‑Cheat Rules
                    </Typography>
                  </Stack>
                  <List dense>
                    {RULES.map((rule, idx) => (
                      <ListItem key={idx} sx={{ px: 0 }}>
                        <ListItemIcon sx={{ minWidth: 24 }}>
                          <Box
                            sx={{
                              width: 6,
                              height: 6,
                              borderRadius: "50%",
                              bgcolor: theme.palette.text.secondary,
                              mt: "8px",
                            }}
                          />
                        </ListItemIcon>
                        <ListItemText
                          primaryTypographyProps={{
                            variant: "body2",
                            color: "text.secondary",
                          }}
                          primary={rule}
                        />
                      </ListItem>
                    ))}
                  </List>
                </Paper>

                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  alignItems={{ xs: "flex-start", sm: "center" }}
                  justifyContent="space-between"
                  spacing={2}
                  sx={{ mb: 2 }}
                >
                  <Box>
                    <Typography variant="h6" fontWeight={800} color="primary">
                      50 Questions
                    </Typography>
                    <Stack direction="row" alignItems="center" spacing={1}>
                      <IconClock
                        size={16}
                        color={theme.palette.text.secondary}
                      />
                      <Typography variant="body2" color="text.secondary">
                        10 seconds per question
                      </Typography>
                    </Stack>
                  </Box>

                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={hasAcknowledgedRules}
                        onChange={(e) =>
                          setHasAcknowledgedRules(e.target.checked)
                        }
                      />
                    }
                    label={
                      <Typography variant="body2">
                        I’ve read and agree to follow the test rules
                      </Typography>
                    }
                    sx={{ m: 0 }}
                  />
                </Stack>

                <Divider sx={{ my: 2 }} />

                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  spacing={1.5}
                  justifyContent="flex-end"
                >
                  <Button
                    variant="outlined"
                    onClick={handleClose}
                    sx={{ textTransform: "none", fontWeight: 700 }}
                  >
                    Cancel
                  </Button>
                  <Button
                    variant="contained"
                    size="large"
                    onClick={handleStartTest}
                    disabled={!hasAcknowledgedRules}
                    sx={{
                      textTransform: "none",
                      fontWeight: 800,
                      px: 4,
                    }}
                  >
                    Start Test
                  </Button>
                </Stack>
              </Box>
            </Paper>
          </Box>
        )}

        {testStarted && !testSubmitted && (
          <Container maxWidth="lg" sx={{ py: 4 }}>
            {/* Header */}
            <Paper
              elevation={0}
              sx={{
                p: 2,
                mb: 3,
                position: "sticky",
                top: 0,
                zIndex: 10,
                backdropFilter: "blur(8px)",
                border: `1px solid ${alpha(theme.palette.divider, 0.8)}`,
                borderRadius: 2,
                bgcolor: alpha(theme.palette.background.paper, 0.9),
                boxShadow: `0 6px 24px ${alpha(
                  theme.palette.common.black,
                  0.08
                )}`,
              }}
            >
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography variant="h6" fontWeight={700}>
                  Question {currentQuestionIndex + 1} of {QUESTIONS.length}
                </Typography>
                <Stack direction="row" spacing={3} alignItems="center">
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <IconAlertTriangle
                      size={20}
                      color={
                        cheatingAttempts > 0
                          ? theme.palette.error.main
                          : theme.palette.text.secondary
                      }
                    />
                    <Typography variant="body2" color="text.secondary">
                      Warnings: {cheatingAttempts}/3
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      px: 2,
                      py: 1,
                      bgcolor:
                        timeLeft <= 3
                          ? alpha(theme.palette.error.main, 0.1)
                          : alpha(theme.palette.primary.main, 0.1),
                      borderRadius: 1,
                      border: `1px solid ${alpha(
                        timeLeft <= 3
                          ? theme.palette.error.main
                          : theme.palette.primary.main,
                        0.4
                      )}`,
                    }}
                  >
                    <IconClock
                      size={20}
                      color={
                        timeLeft <= 3
                          ? theme.palette.error.main
                          : theme.palette.primary.main
                      }
                    />
                    <Typography
                      variant="h6"
                      fontWeight={700}
                      color={timeLeft <= 3 ? "error" : "primary"}
                      sx={{
                        letterSpacing: 0.5,
                        ...(timeLeft <= 3 && {
                          animation: "blink 1s step-end infinite",
                          "@keyframes blink": {
                            "50%": { opacity: 0.4 },
                          },
                        }),
                      }}
                    >
                      {timeLeft}s
                    </Typography>
                  </Box>
                </Stack>
              </Stack>
              <LinearProgress
                variant="determinate"
                value={progress}
                sx={{
                  mt: 2,
                  height: 10,
                  borderRadius: 6,
                  bgcolor: alpha(theme.palette.primary.main, 0.08),
                  "& .MuiLinearProgress-bar": {
                    borderRadius: 6,
                    background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
                  },
                }}
              />
            </Paper>

            {/* Question */}
            <Paper
              elevation={0}
              sx={{
                p: 4,
                border: `1px solid ${alpha(theme.palette.divider, 0.9)}`,
                borderRadius: 2,
                boxShadow: `0 8px 30px ${alpha(
                  theme.palette.common.black,
                  0.06
                )}`,
                bgcolor: "background.paper",
              }}
            >
              <Typography variant="h5" fontWeight={700} sx={{ mb: 4 }}>
                {currentQuestion.question}
              </Typography>

              <FormControl component="fieldset" fullWidth>
                <RadioGroup
                  value={selectedOption}
                  onChange={(e) => setSelectedOption(Number(e.target.value))}
                >
                  <Stack spacing={2}>
                    {currentQuestion.options.map((option, index) => (
                      <Paper
                        key={index}
                        elevation={0}
                        sx={{
                          border: `2px solid ${
                            selectedOption === index
                              ? theme.palette.primary.main
                              : theme.palette.divider
                          }`,
                          borderRadius: 2,
                          bgcolor:
                            selectedOption === index
                              ? alpha(theme.palette.primary.main, 0.05)
                              : "transparent",
                          transition: "all 0.2s",
                          "&:hover": {
                            borderColor: theme.palette.primary.main,
                            bgcolor: alpha(theme.palette.primary.main, 0.03),
                          },
                          boxShadow:
                            selectedOption === index
                              ? `0 6px 20px ${alpha(
                                  theme.palette.primary.main,
                                  0.12
                                )}`
                              : "none",
                        }}
                      >
                        <FormControlLabel
                          value={index}
                          control={<Radio />}
                          label={
                            <Box
                              sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: 1.25,
                                py: 1,
                              }}
                            >
                              <Box
                                sx={{
                                  width: 28,
                                  height: 28,
                                  borderRadius: "50%",
                                  bgcolor: alpha(
                                    theme.palette.primary.main,
                                    0.1
                                  ),
                                  color: "primary.main",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  fontWeight: 700,
                                  fontSize: "0.85rem",
                                  flexShrink: 0,
                                }}
                              >
                                {String.fromCharCode(65 + index)}
                              </Box>
                              <Typography variant="body1">{option}</Typography>
                            </Box>
                          }
                          sx={{
                            m: 0,
                            p: 2,
                            width: "100%",
                          }}
                        />
                      </Paper>
                    ))}
                  </Stack>
                </RadioGroup>
              </FormControl>

              <Button
                variant="contained"
                size="large"
                fullWidth
                onClick={handleNextQuestion}
                sx={{
                  mt: 4,
                  py: 1.5,
                  fontWeight: 800,
                  borderRadius: 2,
                  background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
                  boxShadow: "none",
                  "&:hover": {
                    background: `linear-gradient(90deg, ${theme.palette.primary.dark}, ${theme.palette.primary.main})`,
                    boxShadow: `0 8px 22px ${alpha(
                      theme.palette.primary.main,
                      0.25
                    )}`,
                  },
                }}
              >
                {isLastQuestion ? "Submit Test" : "Next Question"}
              </Button>
            </Paper>
          </Container>
        )}

        {testSubmitted && (
          <Container maxWidth="md" sx={{ py: 8 }}>
            <Paper
              elevation={0}
              sx={{
                p: 4,
                border: `1px solid ${theme.palette.divider}`,
                borderRadius: 2,
              }}
            >
              <Stack spacing={3} alignItems="center">
                <IconTrophy size={64} color={theme.palette.primary.main} />
                <Typography variant="h4" fontWeight={700} textAlign="center">
                  Test Completed!
                </Typography>

                {submissionReason && (
                  <Alert severity="error" sx={{ width: "100%" }}>
                    {submissionReason}
                  </Alert>
                )}

                <Box
                  sx={{
                    width: "100%",
                    p: 3,
                    bgcolor: alpha(theme.palette.primary.main, 0.05),
                    borderRadius: 2,
                  }}
                >
                  <Typography
                    variant="h6"
                    fontWeight={700}
                    textAlign="center"
                    sx={{ mb: 2 }}
                  >
                    Your Results
                  </Typography>
                  <Stack spacing={2}>
                    <Box
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <Typography variant="body1">Correct Answers:</Typography>
                      <Typography variant="body1" fontWeight={700}>
                        {score.correct} / {score.total}
                      </Typography>
                    </Box>
                    <Box
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <Typography variant="body1">Score:</Typography>
                      <Typography
                        variant="body1"
                        fontWeight={700}
                        color="primary"
                      >
                        {score.percentage}%
                      </Typography>
                    </Box>
                    <Box
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <Typography variant="body1">Time Taken:</Typography>
                      <Typography variant="body1" fontWeight={700}>
                        {Math.floor(totalTimeTaken / 60)}m {totalTimeTaken % 60}
                        s
                      </Typography>
                    </Box>
                    <Box
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <Typography variant="body1">
                        Cheating Attempts:
                      </Typography>
                      <Typography
                        variant="body1"
                        fontWeight={700}
                        color={cheatingAttempts > 0 ? "error" : "success"}
                      >
                        {cheatingAttempts}
                      </Typography>
                    </Box>
                  </Stack>
                </Box>

                <Button
                  variant="contained"
                  size="large"
                  onClick={handleClose}
                  sx={{ px: 6 }}
                >
                  Close
                </Button>
              </Stack>
            </Paper>
          </Container>
        )}
      </Dialog>
    );
  }
);

TalentTest.displayName = "TalentTest";

export default TalentTest;
