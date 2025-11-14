import { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Stack,
  Alert,
  CircularProgress,
  InputAdornment,
  alpha,
  useTheme,
  Collapse,
  Chip,
} from "@mui/material";
import {
  IconUser,
  IconMail,
  IconPhone,
  IconGift,
  IconSparkles,
} from "@tabler/icons-react";
import { requestOtp } from "../../../../services/auth";
import type { SignUpData } from "../SignUp";

interface BasicInfoStepProps {
  data: SignUpData;
  onUpdate: (data: Partial<SignUpData>) => void;
  onNext: () => void;
}

/**
 * Step 0: Basic Information + Referral Code
 * Students enter their name, email, phone, and optional referral code
 */
const BasicInfoStep = ({ data, onUpdate, onNext }: BasicInfoStepProps) => {
  const theme = useTheme();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showReferral, setShowReferral] = useState(!!data.referralCode);

  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePhone = (phone: string) =>
    phone.replace(/\D/g, "").length >= 10;

  const handleSubmit = async () => {
    setError(null);

    // Validation
    if (!data.name.trim()) {
      setError("Please enter your full name");
      return;
    }

    if (!validateEmail(data.email)) {
      setError("Please enter a valid email address");
      return;
    }

    if (!validatePhone(data.phone)) {
      setError("Please enter a valid phone number (at least 10 digits)");
      return;
    }

    setLoading(true);
    try {
      const sessionInfo = await requestOtp({
        name: data.name,
        email: data.email,
        phone: data.phone,
      });

      onUpdate({ sessionInfo });
      onNext();
    } catch (err: any) {
      setError(err.message || "Failed to send OTP. Please try again.");
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
            background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mx: "auto",
            mb: 2,
            boxShadow: `0 4px 14px ${alpha(theme.palette.primary.main, 0.4)}`,
          }}
        >
          <IconSparkles size={30} color="white" />
        </Box>
        <Typography variant="h5" fontWeight={800} color="primary" gutterBottom>
          Let's Get Started!
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Enter your basic information to create your student account
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

      {/* Form */}
      <Stack spacing={3}>
        {/* Full Name */}
        <TextField
          label="Full Name"
          value={data.name}
          onChange={(e) => onUpdate({ name: e.target.value })}
          disabled={loading}
          fullWidth
          required
          autoComplete="name"
          placeholder="Enter your full name"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <IconUser size={20} color={theme.palette.text.secondary} />
              </InputAdornment>
            ),
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: 2,
              transition: "all 0.3s",
              "&:hover": {
                boxShadow: `0 0 0 2px ${alpha(theme.palette.primary.main, 0.1)}`,
              },
              "&.Mui-focused": {
                boxShadow: `0 0 0 2px ${alpha(theme.palette.primary.main, 0.2)}`,
              },
            },
          }}
        />

        {/* Email */}
        <TextField
          label="Email Address"
          type="email"
          value={data.email}
          onChange={(e) => onUpdate({ email: e.target.value })}
          disabled={loading}
          fullWidth
          required
          autoComplete="email"
          placeholder="your.email@example.com"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <IconMail size={20} color={theme.palette.text.secondary} />
              </InputAdornment>
            ),
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: 2,
              transition: "all 0.3s",
              "&:hover": {
                boxShadow: `0 0 0 2px ${alpha(theme.palette.primary.main, 0.1)}`,
              },
              "&.Mui-focused": {
                boxShadow: `0 0 0 2px ${alpha(theme.palette.primary.main, 0.2)}`,
              },
            },
          }}
        />

        {/* Phone */}
        <TextField
          label="Phone Number"
          type="tel"
          value={data.phone}
          onChange={(e) => onUpdate({ phone: e.target.value })}
          disabled={loading}
          fullWidth
          required
          autoComplete="tel"
          placeholder="+1 234 567 8900"
          helperText="Include country code (e.g., +1 for US, +91 for India)"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <IconPhone size={20} color={theme.palette.text.secondary} />
              </InputAdornment>
            ),
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: 2,
              transition: "all 0.3s",
              "&:hover": {
                boxShadow: `0 0 0 2px ${alpha(theme.palette.primary.main, 0.1)}`,
              },
              "&.Mui-focused": {
                boxShadow: `0 0 0 2px ${alpha(theme.palette.primary.main, 0.2)}`,
              },
            },
          }}
        />

        {/* Referral Code Section */}
        <Box>
          {!showReferral ? (
            <Button
              variant="outlined"
              startIcon={<IconGift size={18} />}
              onClick={() => setShowReferral(true)}
              sx={{
                borderRadius: 2,
                textTransform: "none",
                fontWeight: 600,
                borderColor: alpha(theme.palette.secondary.main, 0.5),
                color: theme.palette.secondary.main,
                "&:hover": {
                  borderColor: theme.palette.secondary.main,
                  background: alpha(theme.palette.secondary.main, 0.05),
                },
              }}
            >
              I have a referral code
            </Button>
          ) : (
            <Collapse in={showReferral}>
              <Box
                sx={{
                  p: 3,
                  borderRadius: 2,
                  background: `linear-gradient(135deg, ${alpha(
                    theme.palette.secondary.light,
                    0.1
                  )}, ${alpha(theme.palette.primary.light, 0.05)})`,
                  border: `1px solid ${alpha(theme.palette.secondary.main, 0.2)}`,
                }}
              >
                <Stack direction="row" alignItems="center" spacing={1} mb={2}>
                  <IconGift size={20} color={theme.palette.secondary.main} />
                  <Typography
                    variant="subtitle2"
                    fontWeight={700}
                    color="secondary"
                  >
                    Referral Code (Optional)
                  </Typography>
                  <Chip
                    label="Get Benefits"
                    size="small"
                    color="secondary"
                    sx={{ ml: 1, fontWeight: 600, fontSize: "0.7rem" }}
                  />
                </Stack>
                <TextField
                  placeholder="Enter referral code"
                  value={data.referralCode}
                  onChange={(e) =>
                    onUpdate({ referralCode: e.target.value.toUpperCase() })
                  }
                  disabled={loading}
                  fullWidth
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      background: "white",
                      borderRadius: 2,
                    },
                  }}
                />
                <Typography
                  variant="caption"
                  color="text.secondary"
                  sx={{ mt: 1, display: "block" }}
                >
                  Got a referral code from a friend? Enter it here to get special
                  benefits!
                </Typography>
              </Box>
            </Collapse>
          )}
        </Box>

        {/* Submit Button */}
        <Button
          variant="contained"
          size="large"
          onClick={handleSubmit}
          disabled={loading}
          sx={{
            py: 1.8,
            borderRadius: 2,
            fontWeight: 700,
            fontSize: "1.05rem",
            textTransform: "none",
            mt: 2,
            boxShadow: `0 4px 14px ${alpha(theme.palette.primary.main, 0.4)}`,
            transition: "all 0.3s",
            "&:hover": {
              transform: "translateY(-2px)",
              boxShadow: `0 6px 20px ${alpha(theme.palette.primary.main, 0.5)}`,
            },
            "&:active": {
              transform: "translateY(0)",
            },
          }}
        >
          {loading ? (
            <CircularProgress size={24} color="inherit" />
          ) : (
            "Continue"
          )}
        </Button>

        {/* Info Box */}
        <Box
          sx={{
            p: 2.5,
            borderRadius: 2,
            background: alpha(theme.palette.info.main, 0.05),
            border: `1px solid ${alpha(theme.palette.info.main, 0.2)}`,
          }}
        >
          <Typography variant="body2" color="text.secondary">
            We'll send a verification code to your email and phone number to
            confirm your identity.
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
};

export default BasicInfoStep;
