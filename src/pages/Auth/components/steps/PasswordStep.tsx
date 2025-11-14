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
  IconButton,
  alpha,
  useTheme,
  LinearProgress,
  Chip,
} from "@mui/material";
import {
  IconLock,
  IconEye,
  IconEyeOff,
  IconArrowLeft,
  IconCheck,
  IconX,
  IconRocket,
} from "@tabler/icons-react";
import { finalizeRegistration } from "../../../../services/auth";
import type { SignUpData } from "../SignUp";

interface PasswordStepProps {
  data: SignUpData;
  onUpdate: (data: Partial<SignUpData>) => void;
  onBack: () => void;
}

/**
 * Step 4: Password Creation
 * Final step with password strength validation
 */
const PasswordStep = ({ data, onUpdate, onBack }: PasswordStepProps) => {
  const theme = useTheme();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Password strength calculation
  const calculatePasswordStrength = (password: string) => {
    let strength = 0;
    if (password.length >= 8) strength += 25;
    if (password.length >= 12) strength += 10;
    if (/[a-z]/.test(password)) strength += 15;
    if (/[A-Z]/.test(password)) strength += 20;
    if (/[0-9]/.test(password)) strength += 15;
    if (/[^a-zA-Z0-9]/.test(password)) strength += 15;
    return Math.min(strength, 100);
  };

  const strength = calculatePasswordStrength(data.password);
  const getStrengthColor = () => {
    if (strength < 40) return theme.palette.error.main;
    if (strength < 70) return theme.palette.warning.main;
    return theme.palette.success.main;
  };
  const getStrengthLabel = () => {
    if (strength < 40) return "Weak";
    if (strength < 70) return "Medium";
    return "Strong";
  };

  // Password requirements
  const requirements = [
    {
      label: "At least 8 characters",
      met: data.password.length >= 8,
    },
    {
      label: "Contains a letter",
      met: /[a-zA-Z]/.test(data.password),
    },
    {
      label: "Contains a number",
      met: /[0-9]/.test(data.password),
    },
    {
      label: "Passwords match",
      met: data.password === data.confirmPassword && data.password.length > 0,
    },
  ];

  const handleSubmit = async () => {
    setError(null);

    // Validation
    if (data.password.length < 8) {
      setError("Password must be at least 8 characters long");
      return;
    }

    if (!/[a-zA-Z]/.test(data.password) || !/[0-9]/.test(data.password)) {
      setError("Password must contain both letters and numbers");
      return;
    }

    if (data.password !== data.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setLoading(true);
    try {
      await finalizeRegistration(data.password);
      setSuccess(true);
      setTimeout(() => {
        window.location.hash = "#/profile";
      }, 1500);
    } catch (err: any) {
      setError(err.message || "Failed to create account. Please try again.");
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
            width: 70,
            height: 70,
            borderRadius: "50%",
            background: `linear-gradient(135deg, ${theme.palette.success.main}, ${theme.palette.primary.main})`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mx: "auto",
            mb: 2,
            boxShadow: `0 4px 20px ${alpha(theme.palette.success.main, 0.5)}`,
            animation: success ? "pulse 1s ease-in-out infinite" : "none",
            "@keyframes pulse": {
              "0%, 100%": { transform: "scale(1)" },
              "50%": { transform: "scale(1.05)" },
            },
          }}
        >
          {success ? (
            <IconRocket size={35} color="white" />
          ) : (
            <IconLock size={35} color="white" />
          )}
        </Box>
        <Typography variant="h5" fontWeight={800} color="primary" gutterBottom>
          {success ? "Account Created!" : "Almost There!"}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {success
            ? "Redirecting to your profile..."
            : "Create a strong password to secure your account"}
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

      {/* Success Alert */}
      {success && (
        <Alert severity="success" sx={{ mb: 3, borderRadius: 2 }}>
          Registration complete! Welcome to RoamLearn!
        </Alert>
      )}

      {!success && (
        <Stack spacing={3}>
          {/* Password Field */}
          <Box>
            <TextField
              label="Create Password"
              type={showPassword ? "text" : "password"}
              value={data.password}
              onChange={(e) => onUpdate({ password: e.target.value })}
              disabled={loading}
              fullWidth
              required
              autoComplete="new-password"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <IconLock size={20} color={theme.palette.text.secondary} />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword(!showPassword)}
                      edge="end"
                      size="small"
                    >
                      {showPassword ? (
                        <IconEyeOff size={20} />
                      ) : (
                        <IconEye size={20} />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: 2,
                  transition: "all 0.3s",
                  "&:hover": {
                    boxShadow: `0 0 0 2px ${alpha(
                      theme.palette.primary.main,
                      0.1
                    )}`,
                  },
                  "&.Mui-focused": {
                    boxShadow: `0 0 0 2px ${alpha(
                      theme.palette.primary.main,
                      0.2
                    )}`,
                  },
                },
              }}
            />

            {/* Password Strength Indicator */}
            {data.password && (
              <Box sx={{ mt: 2 }}>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  mb={1}
                >
                  <Typography variant="caption" color="text.secondary">
                    Password Strength
                  </Typography>
                  <Chip
                    label={getStrengthLabel()}
                    size="small"
                    sx={{
                      background: alpha(getStrengthColor(), 0.15),
                      color: getStrengthColor(),
                      fontWeight: 700,
                      fontSize: "0.7rem",
                    }}
                  />
                </Stack>
                <LinearProgress
                  variant="determinate"
                  value={strength}
                  sx={{
                    height: 6,
                    borderRadius: 3,
                    backgroundColor: alpha(theme.palette.divider, 0.3),
                    "& .MuiLinearProgress-bar": {
                      backgroundColor: getStrengthColor(),
                      borderRadius: 3,
                      transition: "all 0.3s",
                    },
                  }}
                />
              </Box>
            )}
          </Box>

          {/* Confirm Password Field */}
          <TextField
            label="Confirm Password"
            type={showConfirmPassword ? "text" : "password"}
            value={data.confirmPassword}
            onChange={(e) => onUpdate({ confirmPassword: e.target.value })}
            disabled={loading}
            fullWidth
            required
            autoComplete="new-password"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <IconLock size={20} color={theme.palette.text.secondary} />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    edge="end"
                    size="small"
                  >
                    {showConfirmPassword ? (
                      <IconEyeOff size={20} />
                    ) : (
                      <IconEye size={20} />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: 2,
                transition: "all 0.3s",
                "&:hover": {
                  boxShadow: `0 0 0 2px ${alpha(
                    theme.palette.primary.main,
                    0.1
                  )}`,
                },
                "&.Mui-focused": {
                  boxShadow: `0 0 0 2px ${alpha(
                    theme.palette.primary.main,
                    0.2
                  )}`,
                },
              },
            }}
          />

          {/* Password Requirements */}
          <Box
            sx={{
              p: 2.5,
              borderRadius: 2,
              background: alpha(theme.palette.primary.main, 0.02),
              border: `1px solid ${alpha(theme.palette.divider, 0.5)}`,
            }}
          >
            <Typography
              variant="subtitle2"
              fontWeight={700}
              mb={1.5}
              color="text.secondary"
            >
              Password Requirements
            </Typography>
            <Stack spacing={1}>
              {requirements.map((req, idx) => (
                <Stack key={idx} direction="row" alignItems="center" spacing={1}>
                  {req.met ? (
                    <IconCheck
                      size={16}
                      color={theme.palette.success.main}
                      strokeWidth={3}
                    />
                  ) : (
                    <IconX
                      size={16}
                      color={theme.palette.text.disabled}
                      strokeWidth={3}
                    />
                  )}
                  <Typography
                    variant="body2"
                    color={req.met ? "success.main" : "text.secondary"}
                    fontWeight={req.met ? 600 : 400}
                  >
                    {req.label}
                  </Typography>
                </Stack>
              ))}
            </Stack>
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
                minWidth: 120,
              }}
            >
              Back
            </Button>
            <Button
              variant="contained"
              fullWidth
              onClick={handleSubmit}
              disabled={loading || !requirements.every((r) => r.met)}
              sx={{
                py: 1.8,
                borderRadius: 2,
                fontWeight: 700,
                fontSize: "1.05rem",
                textTransform: "none",
                boxShadow: `0 4px 14px ${alpha(
                  theme.palette.primary.main,
                  0.4
                )}`,
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
                "Create Account"
              )}
            </Button>
          </Stack>
        </Stack>
      )}
    </Box>
  );
};

export default PasswordStep;
