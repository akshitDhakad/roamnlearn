import { useState, useRef, useEffect } from "react";
import {
  Box,
  Button,
  Typography,
  Stack,
  Alert,
  CircularProgress,
  alpha,
  useTheme,
  Paper,
} from "@mui/material";
import { IconShieldCheck, IconArrowLeft } from "@tabler/icons-react";
import { verifyOtp } from "../../../../services/auth";
import type { SignUpData } from "../SignUp";

interface OtpVerificationStepProps {
  data: SignUpData;
  onUpdate: (data: Partial<SignUpData>) => void;
  onNext: () => void;
  onBack: () => void;
}

/**
 * Step 1: OTP Verification
 * Modern OTP input with individual boxes for each digit
 */
const OtpVerificationStep = ({
  data,
  onUpdate,
  onNext,
  onBack,
}: OtpVerificationStepProps) => {
  const theme = useTheme();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [otpDigits, setOtpDigits] = useState(["", "", "", "", "", ""]);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    // Focus first input on mount
    inputRefs.current[0]?.focus();
  }, []);

  const handleDigitChange = (index: number, value: string) => {
    // Only allow single digit
    if (value.length > 1) return;
    if (value && !/^\d$/.test(value)) return;

    const newDigits = [...otpDigits];
    newDigits[index] = value;
    setOtpDigits(newDigits);

    // Auto-focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }

    // Update parent component
    onUpdate({ otp: newDigits.join("") });
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !otpDigits[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
    if (e.key === "ArrowLeft" && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
    if (e.key === "ArrowRight" && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").replace(/\D/g, "");
    const digits = pastedData.slice(0, 6).split("");

    const newDigits = [...otpDigits];
    digits.forEach((digit, i) => {
      if (i < 6) newDigits[i] = digit;
    });
    setOtpDigits(newDigits);
    onUpdate({ otp: newDigits.join("") });

    // Focus last filled input or first empty
    const focusIndex = Math.min(digits.length, 5);
    inputRefs.current[focusIndex]?.focus();
  };

  const handleVerify = async () => {
    setError(null);

    const otpValue = otpDigits.join("");
    if (otpValue.length !== 6) {
      setError("Please enter all 6 digits");
      return;
    }

    setLoading(true);
    try {
      await verifyOtp(otpValue);
      onNext();
    } catch (err: any) {
      setError(err.message || "Invalid OTP. Please try again.");
      // Clear OTP on error
      setOtpDigits(["", "", "", "", "", ""]);
      inputRefs.current[0]?.focus();
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box>
      {/* Header */}
      <Box sx={{ mb: 4, textAlign: "center" }}>
        <Box
          sx={{
            width: 60,
            height: 60,
            borderRadius: "50%",
            background: `linear-gradient(135deg, ${theme.palette.success.main}, ${theme.palette.primary.main})`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mx: "auto",
            mb: 2,
            boxShadow: `0 4px 14px ${alpha(theme.palette.success.main, 0.4)}`,
          }}
        >
          <IconShieldCheck size={30} color="white" />
        </Box>
        <Typography variant="h5" fontWeight={800} color="primary" gutterBottom>
          Verify Your Identity
        </Typography>
        <Typography variant="body2" color="text.secondary">
          We've sent a 6-digit code to
        </Typography>
        <Typography
          variant="body2"
          fontWeight={700}
          color="text.primary"
          sx={{ mt: 1 }}
        >
          {data.sessionInfo?.maskedEmail}
        </Typography>
        <Typography variant="body2" fontWeight={700} color="text.primary">
          {data.sessionInfo?.maskedPhone}
        </Typography>
      </Box>

      {/* Error Alert */}
      {error && (
        <Alert
          severity="error"
          sx={{ mb: 3, borderRadius: 2 }}
          onClose={() => setError(null)}
        >
          {error}
        </Alert>
      )}

      {/* OTP Input Boxes */}
      <Stack spacing={4}>
        <Box
          sx={{
            display: "flex",
            gap: 2,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {otpDigits.map((digit, index) => (
            <Paper
              key={index}
              elevation={0}
              sx={{
                width: { xs: 45, sm: 55 },
                height: { xs: 55, sm: 65 },
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: `2px solid ${
                  digit
                    ? theme.palette.primary.main
                    : alpha(theme.palette.divider, 0.5)
                }`,
                borderRadius: 2,
                background: digit
                  ? alpha(theme.palette.primary.main, 0.05)
                  : "transparent",
                transition: "all 0.3s",
                "&:hover": {
                  borderColor: theme.palette.primary.main,
                },
              }}
            >
              <input
                ref={(el) => {
                  inputRefs.current[index] = el;
                }}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(e) => handleDigitChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                onPaste={handlePaste}
                disabled={loading}
                style={{
                  width: "100%",
                  height: "100%",
                  border: "none",
                  outline: "none",
                  background: "transparent",
                  textAlign: "center",
                  fontSize: "1.5rem",
                  fontWeight: 700,
                  color: theme.palette.text.primary,
                }}
              />
            </Paper>
          ))}
        </Box>

        {/* Action Buttons */}
        <Stack direction="row" spacing={2}>
          <Button
            variant="outlined"
            startIcon={<IconArrowLeft size={18} />}
            onClick={onBack}
            disabled={loading}
            sx={{
              borderRadius: 2,
              py: 1.5,
              fontWeight: 600,
              textTransform: "none",
            }}
          >
            Back
          </Button>
          <Button
            variant="contained"
            fullWidth
            onClick={handleVerify}
            disabled={loading || otpDigits.join("").length !== 6}
            sx={{
              py: 1.8,
              borderRadius: 2,
              fontWeight: 700,
              fontSize: "1.05rem",
              textTransform: "none",
              boxShadow: `0 4px 14px ${alpha(theme.palette.primary.main, 0.4)}`,
              transition: "all 0.3s",
              "&:hover": {
                transform: "translateY(-2px)",
                boxShadow: `0 6px 20px ${alpha(
                  theme.palette.primary.main,
                  0.5
                )}`,
              },
              "&:active": {
                transform: "translateY(0)",
              },
            }}
          >
            {loading ? (
              <CircularProgress size={24} color="inherit" />
            ) : (
              "Verify OTP"
            )}
          </Button>
        </Stack>

        {/* Resend Code */}
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="body2" color="text.secondary">
            Didn't receive the code?{" "}
            <Typography
              component="span"
              color="primary"
              fontWeight={700}
              sx={{
                cursor: "pointer",
                "&:hover": { textDecoration: "underline" },
              }}
            >
              Resend Code
            </Typography>
          </Typography>
        </Box>

        {/* Info Box */}
        <Box
          sx={{
            p: 2.5,
            borderRadius: 2,
            background: alpha(theme.palette.warning.main, 0.05),
            border: `1px solid ${alpha(theme.palette.warning.main, 0.2)}`,
          }}
        >
          <Typography variant="caption" color="text.secondary">
            For development: Check the browser console to see the OTP code
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
};

export default OtpVerificationStep;
