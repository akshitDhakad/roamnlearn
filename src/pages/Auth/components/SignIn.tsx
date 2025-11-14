import { useState, useCallback } from "react";
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
  Divider,
  Link,
  alpha,
  useTheme,
} from "@mui/material";
import { IconEye, IconEyeOff, IconMail, IconLock } from "@tabler/icons-react";
import { login } from "../../../services/auth";

/**
 * Modern Sign In component with validation and error handling
 */
const SignIn = () => {
  const theme = useTheme();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = useCallback(async () => {
    setError(null);

    // Validation
    if (!email.trim()) {
      setError("Please enter your email address");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }

    if (!password) {
      setError("Please enter your password");
      return;
    }

    setLoading(true);
    try {
      await login(email, password);
      setSuccess(true);
      setTimeout(() => {
        window.location.hash = "#/profile";
      }, 1000);
    } catch (err: any) {
      setError(err.message || "Sign in failed. Please try again.");
    } finally {
      setLoading(false);
    }
  }, [email, password]);

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !loading) {
      handleSubmit();
    }
  };

  return (
    <Box>
      {/* Header */}
      <Box sx={{ mb: 4, textAlign: "center" }}>
        <Typography
          variant="h4"
          fontWeight={800}
          color="primary"
          gutterBottom
        >
          Welcome Back!
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Sign in to continue your learning journey
        </Typography>
      </Box>

      {/* Alert Messages */}
      {error && (
        <Alert
          severity="error"
          sx={{ mb: 3, borderRadius: 2 }}
          onClose={() => setError(null)}
        >
          {error}
        </Alert>
      )}

      {success && (
        <Alert severity="success" sx={{ mb: 3, borderRadius: 2 }}>
          Sign in successful! Redirecting...
        </Alert>
      )}

      {/* Sign In Form */}
      <Stack spacing={3}>
        <TextField
          label="Email Address"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onKeyPress={handleKeyPress}
          disabled={loading || success}
          fullWidth
          autoComplete="email"
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

        <TextField
          label="Password"
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyPress={handleKeyPress}
          disabled={loading || success}
          fullWidth
          autoComplete="current-password"
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
                  {showPassword ? <IconEyeOff size={20} /> : <IconEye size={20} />}
                </IconButton>
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

        {/* Forgot Password Link */}
        <Box sx={{ textAlign: "right" }}>
          <Link
            href="#"
            underline="hover"
            sx={{
              color: theme.palette.primary.main,
              fontWeight: 600,
              fontSize: "0.9rem",
            }}
          >
            Forgot Password?
          </Link>
        </Box>

        {/* Sign In Button */}
        <Button
          variant="contained"
          size="large"
          onClick={handleSubmit}
          disabled={loading || success}
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
            "Sign In"
          )}
        </Button>

        {/* Divider */}
        <Divider sx={{ my: 2 }}>
          <Typography variant="body2" color="text.secondary">
            New to RoamLearn?
          </Typography>
        </Divider>

        {/* Additional Info */}
        <Box
          sx={{
            textAlign: "center",
            p: 3,
            borderRadius: 2,
            background: alpha(theme.palette.primary.main, 0.03),
            border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
          }}
        >
          <Typography variant="body2" color="text.secondary">
            Don't have an account?{" "}
            <Typography
              component="span"
              fontWeight={700}
              color="primary"
              sx={{ cursor: "pointer" }}
            >
              Create one using the "Create Account" tab above
            </Typography>
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
};

export default SignIn;
