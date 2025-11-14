import { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Stack,
  Alert,
  CircularProgress,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  alpha,
  useTheme,
  Divider,
} from "@mui/material";
import { Grid } from "@mui/material";
import { IconArrowLeft } from "@tabler/icons-react";
import { submitProfile } from "../../../../services/auth";
import type { SignUpData } from "../SignUp";

interface ProfileStepProps {
  data: SignUpData;
  onUpdate: (data: Partial<SignUpData>) => void;
  onNext: () => void;
  onBack: () => void;
}

/**
 * Step 2: Student Profile - Simplified and Full Width
 * Clean profile form with essential information
 */
const ProfileStep = ({ data, onUpdate, onBack, onNext }: ProfileStepProps) => {
  const theme = useTheme();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async () => {
    setError(null);

    // Validation
    if (!data.grade) {
      setError("Please select your grade/education level");
      return;
    }

    if (!data.city.trim() || !data.state.trim() || !data.country.trim()) {
      setError("Please provide your complete address (city, state, country)");
      return;
    }

    setLoading(true);
    try {
      await submitProfile({
        grade: data.grade,
        dateOfBirth: data.dateOfBirth,
        gender: data.gender,
        houseNumber: data.houseNumber.trim(),
        street: data.street.trim(),
        city: data.city.trim(),
        state: data.state.trim(),
        country: data.country.trim(),
        college: data.college.trim(),
        parentName: data.parentName.trim(),
        guardianEmail: data.guardianEmail.trim(),
        guardianPhone: data.guardianPhone.trim(),
        guardianRelation: data.guardianRelation.trim(),
        invitationCode: data.referralCode?.trim() || undefined,
        interests: data.interests
          .split(",")
          .map((s) => s.trim())
          .filter(Boolean),
      });
      onNext();
    } catch (err: any) {
      setError(err.message || "Failed to save profile. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box>
      {/* Header */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" fontWeight={800} color="primary" gutterBottom>
          Complete Your Profile
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Tell us a bit more about yourself
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
      <Stack spacing={4}>
        {/* Personal Information */}
        <Box>
          <Typography
            variant="subtitle1"
            fontWeight={700}
            color="primary"
            gutterBottom
          >
            Personal Information
          </Typography>
          <Grid container spacing={2.5}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Date of Birth"
                type="date"
                value={data.dateOfBirth}
                onChange={(e) => onUpdate({ dateOfBirth: e.target.value })}
                disabled={loading}
                fullWidth
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel>Gender</InputLabel>
                <Select
                  label="Gender"
                  value={data.gender}
                  onChange={(e) => onUpdate({ gender: e.target.value })}
                  disabled={loading}
                >
                  <MenuItem value="Male">Male</MenuItem>
                  <MenuItem value="Female">Female</MenuItem>
                  <MenuItem value="Other">Other</MenuItem>
                  <MenuItem value="Prefer not to say">
                    Prefer not to say
                  </MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Box>

        <Divider />

        {/* Address */}
        <Box>
          <Typography
            variant="subtitle1"
            fontWeight={700}
            color="primary"
            gutterBottom
          >
            Address
          </Typography>
          <Grid container spacing={2.5}>
            <Grid xs={12} sm={6}>
              <TextField
                label="House Number"
                value={data.houseNumber}
                onChange={(e) => onUpdate({ houseNumber: e.target.value })}
                disabled={loading}
                fullWidth
                placeholder="Building/Apt number"
              />
            </Grid>
            <Grid xs={12} sm={6}>
              <TextField
                label="Street"
                value={data.street}
                onChange={(e) => onUpdate({ street: e.target.value })}
                disabled={loading}
                fullWidth
                placeholder="Street name"
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                label="City"
                value={data.city}
                onChange={(e) => onUpdate({ city: e.target.value })}
                disabled={loading}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                label="State"
                value={data.state}
                onChange={(e) => onUpdate({ state: e.target.value })}
                disabled={loading}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                label="Country"
                value={data.country}
                onChange={(e) => onUpdate({ country: e.target.value })}
                disabled={loading}
                fullWidth
                required
              />
            </Grid>
          </Grid>
        </Box>

        <Divider />

        {/* Education */}
        <Box>
          <Typography
            variant="subtitle1"
            fontWeight={700}
            color="primary"
            gutterBottom
          >
            Education
          </Typography>
          <Grid container spacing={2.5}>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth required>
                <InputLabel>Grade / Level</InputLabel>
                <Select
                  label="Grade / Level"
                  value={data.grade}
                  onChange={(e) => onUpdate({ grade: e.target.value })}
                  disabled={loading}
                >
                  <MenuItem value="High School">High School</MenuItem>
                  <MenuItem value="Undergraduate">Undergraduate</MenuItem>
                  <MenuItem value="Postgraduate">Postgraduate</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="School / College"
                value={data.college}
                onChange={(e) => onUpdate({ college: e.target.value })}
                disabled={loading}
                fullWidth
                placeholder="Your institution name"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Interests"
                value={data.interests}
                onChange={(e) => onUpdate({ interests: e.target.value })}
                disabled={loading}
                fullWidth
                placeholder="e.g., History, Science, Art"
                helperText="Separate multiple interests with commas"
              />
            </Grid>
          </Grid>
        </Box>

        <Divider />

        {/* Guardian Information */}
        <Box>
          <Typography
            variant="subtitle1"
            fontWeight={700}
            color="primary"
            gutterBottom
          >
            Parent / Guardian
          </Typography>
          <Grid container spacing={2.5}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Parent / Guardian Name"
                value={data.parentName}
                onChange={(e) => onUpdate({ parentName: e.target.value })}
                disabled={loading}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Relationship"
                value={data.guardianRelation}
                onChange={(e) => onUpdate({ guardianRelation: e.target.value })}
                disabled={loading}
                fullWidth
                placeholder="e.g., Father, Mother"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Guardian Email"
                type="email"
                value={data.guardianEmail}
                onChange={(e) => onUpdate({ guardianEmail: e.target.value })}
                disabled={loading}
                fullWidth
                placeholder="guardian@example.com"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Guardian Phone"
                type="tel"
                value={data.guardianPhone}
                onChange={(e) => onUpdate({ guardianPhone: e.target.value })}
                disabled={loading}
                fullWidth
                placeholder="+1 234 567 8900"
              />
            </Grid>
          </Grid>
        </Box>

        {/* Action Buttons */}
        <Stack direction="row" spacing={2} sx={{ pt: 2 }}>
          <Button
            variant="outlined"
            startIcon={<IconArrowLeft size={18} />}
            onClick={onBack}
            disabled={loading}
            sx={{
              borderRadius: 2,
              py: 1.5,
              px: 3,
              fontWeight: 600,
              textTransform: "none",
            }}
          >
            Back
          </Button>
          <Button
            variant="contained"
            fullWidth
            onClick={handleSubmit}
            disabled={loading}
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
              "Continue"
            )}
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};

export default ProfileStep;
