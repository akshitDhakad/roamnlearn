import { useState, useEffect, useCallback, memo } from "react";
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
  question: `Question ${i + 1}: What is the significance of Renaissance art in the context of European history and cultural development?`,
  options: [
    "It marked a return to classical Greek and Roman aesthetics",
    "It focused primarily on abstract expressionism",
    "It emphasized medieval religious iconography exclusively",
    "It rejected all forms of naturalism and realism",
  ],
  correctAnswer: 0,
}));

const QUESTION_TIME_LIMIT = 10; // seconds per question

interface TalentTestProps {
  open: boolean;
  onClose: () => void;
  destinationTitle: string;
}

const TalentTest = memo(({ open, onClose, destinationTitle }: TalentTestProps) => {
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
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [warningOpen, setWarningOpen] = useState(false);
  const [testSubmitted, setTestSubmitted] = useState(false);
  const [submissionReason, setSubmissionReason] = useState<string>("");
  const [totalTimeTaken, setTotalTimeTaken] = useState(0);

  const currentQuestion = QUESTIONS[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === QUESTIONS.length - 1;

  // Handle cheating detection
  const handleCheating = useCallback((reason: string) => {
    const newAttempts = cheatingAttempts + 1;
    setCheatingAttempts(newAttempts);

    if (newAttempts >= 3) {
      // Auto-submit test on 3rd cheating attempt
      setSubmissionReason(`Test auto-submitted due to cheating: ${reason}`);
      submitTest(true);
    } else {
      setWarningOpen(true);
    }
  }, [cheatingAttempts]);

  // Fullscreen management
  const enterFullscreen = useCallback(() => {
    const elem = document.documentElement;
    if (elem.requestFullscreen) {
      elem.requestFullscreen().catch(() => {
        handleCheating("Failed to enter fullscreen");
      });
    }
  }, [handleCheating]);

  const exitFullscreen = useCallback(() => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    }
  }, []);

  // Start test
  const handleStartTest = useCallback(() => {
    setTestStarted(true);
    setTestStartTime(Date.now());
    setQuestionStartTime(Date.now());
    enterFullscreen();
  }, [enterFullscreen]);

  // Submit test
  const submitTest = useCallback((isCheating: boolean = false) => {
    const endTime = Date.now();
    const timeTaken = Math.floor((endTime - testStartTime) / 1000); // in seconds
    setTotalTimeTaken(timeTaken);
    setTestSubmitted(true);
    exitFullscreen();

    // Calculate score
    const correctAnswers = answers.filter(
      (answer) =>
        QUESTIONS.find((q) => q.id === answer.questionId)?.correctAnswer ===
        answer.selectedOption
    ).length;

    console.log("Test Submitted:", {
      totalQuestions: QUESTIONS.length,
      answeredQuestions: answers.length,
      correctAnswers,
      timeTaken,
      cheatingAttempts,
      isCheating,
      reason: submissionReason,
    });

    // Here you would send the results to your backend
  }, [testStartTime, answers, cheatingAttempts, submissionReason, exitFullscreen]);

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
    setAnswers([...answers, newAnswer]);

    if (isLastQuestion) {
      // Submit test
      submitTest(false);
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
    answers,
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
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("blur", handleBlur);
    };
  }, [testStarted, testSubmitted, handleCheating]);

  // Anti-cheat: Detect fullscreen exit
  useEffect(() => {
    if (!testStarted || testSubmitted) return;

    const handleFullscreenChange = () => {
      const isCurrentlyFullscreen = !!document.fullscreenElement;
      setIsFullscreen(isCurrentlyFullscreen);

      if (!isCurrentlyFullscreen && testStarted) {
        handleCheating("Exited fullscreen mode");
      }
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
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

      // Prevent Escape key (to prevent fullscreen exit)
      if (e.key === "Escape") {
        e.preventDefault();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [testStarted, testSubmitted, handleCheating]);

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

  // Calculate progress
  const progress = ((currentQuestionIndex + 1) / QUESTIONS.length) * 100;

  // Calculate score
  const calculateScore = () => {
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
  };

  const handleClose = () => {
    if (testStarted && !testSubmitted) {
      if (window.confirm("Are you sure you want to exit? Your progress will be lost.")) {
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
            Warning {cheatingAttempts}/3: Suspicious activity detected. On 3 warnings, your test
            will be automatically submitted and flagged.
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
        <Container maxWidth="md" sx={{ py: 8 }}>
          <Paper elevation={0} sx={{ p: 4, border: `1px solid ${theme.palette.divider}`, borderRadius: 2 }}>
            <Stack spacing={3} alignItems="center">
              <IconShieldCheck size={64} color={theme.palette.primary.main} />
              <Typography variant="h4" fontWeight={700} textAlign="center">
                {destinationTitle}
              </Typography>
              <Typography variant="h5" fontWeight={600} textAlign="center">
                Talent Test
              </Typography>

              <Alert severity="warning" sx={{ width: "100%" }}>
                <Typography variant="body2" fontWeight={600} sx={{ mb: 1 }}>
                  Anti-Cheat Rules:
                </Typography>
                <Typography variant="body2" component="div">
                  • Test will run in fullscreen mode
                  <br />
                  • Do not switch tabs or minimize window
                  <br />
                  • Do not right-click or use keyboard shortcuts
                  <br />
                  • 3 cheating attempts will auto-submit your test
                  <br />
                  • Each question has 10 seconds time limit
                  <br />
                  • You cannot go back to previous questions
                  <br />• 50 questions total - all must be completed
                </Typography>
              </Alert>

              <Box sx={{ textAlign: "center", my: 2 }}>
                <Typography variant="h6" fontWeight={700} color="primary">
                  50 Questions
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  10 seconds per question
                </Typography>
              </Box>

              <Button
                variant="contained"
                size="large"
                onClick={handleStartTest}
                sx={{
                  px: 6,
                  py: 1.5,
                  fontWeight: 700,
                  fontSize: "1.1rem",
                }}
              >
                Start Test
              </Button>
            </Stack>
          </Paper>
        </Container>
      )}

      {testStarted && !testSubmitted && (
        <Container maxWidth="lg" sx={{ py: 4 }}>
          {/* Header */}
          <Paper
            elevation={0}
            sx={{
              p: 2,
              mb: 3,
              border: `1px solid ${theme.palette.divider}`,
              borderRadius: 2,
            }}
          >
            <Stack direction="row" justifyContent="space-between" alignItems="center">
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
                  >
                    {timeLeft}s
                  </Typography>
                </Box>
              </Stack>
            </Stack>
            <LinearProgress
              variant="determinate"
              value={progress}
              sx={{ mt: 2, height: 8, borderRadius: 4 }}
            />
          </Paper>

          {/* Question */}
          <Paper
            elevation={0}
            sx={{
              p: 4,
              border: `1px solid ${theme.palette.divider}`,
              borderRadius: 2,
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
                      }}
                    >
                      <FormControlLabel
                        value={index}
                        control={<Radio />}
                        label={
                          <Typography variant="body1" sx={{ py: 1 }}>
                            {option}
                          </Typography>
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
                fontWeight: 700,
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
                <Typography variant="h6" fontWeight={700} textAlign="center" sx={{ mb: 2 }}>
                  Your Results
                </Typography>
                <Stack spacing={2}>
                  <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Typography variant="body1">Correct Answers:</Typography>
                    <Typography variant="body1" fontWeight={700}>
                      {calculateScore().correct} / {calculateScore().total}
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Typography variant="body1">Score:</Typography>
                    <Typography variant="body1" fontWeight={700} color="primary">
                      {calculateScore().percentage}%
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Typography variant="body1">Time Taken:</Typography>
                    <Typography variant="body1" fontWeight={700}>
                      {Math.floor(totalTimeTaken / 60)}m {totalTimeTaken % 60}s
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Typography variant="body1">Cheating Attempts:</Typography>
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

              <Button variant="contained" size="large" onClick={handleClose} sx={{ px: 6 }}>
                Close
              </Button>
            </Stack>
          </Paper>
        </Container>
      )}
    </Dialog>
  );
});

TalentTest.displayName = "TalentTest";

export default TalentTest;
