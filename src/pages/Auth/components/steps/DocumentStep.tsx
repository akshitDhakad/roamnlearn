import { useState } from "react";
import {
  Box,
  Button,
  Typography,
  Stack,
  Alert,
  CircularProgress,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  alpha,
  useTheme,
  Paper,
} from "@mui/material";
import { Grid } from "@mui/material";
import { IconArrowLeft, IconId, IconCamera, IconVideo, IconCheck } from "@tabler/icons-react";
import { submitDocuments } from "../../../../services/auth";
import type { SignUpData } from "../SignUp";

interface DocumentStepProps {
  data: SignUpData;
  onUpdate: (data: Partial<SignUpData>) => void;
  onNext: () => void;
  onBack: () => void;
}

/**
 * Step 3: Document Verification
 * Upload ID documents and verification photos/video
 */
const DocumentStep = ({ data, onUpdate, onBack, onNext }: DocumentStepProps) => {
  const theme = useTheme();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (
    file: File | null,
    field: keyof Pick<
      SignUpData,
      "frontPhoto" | "backPhoto" | "profilePhoto" | "videoFile"
    >
  ) => {
    onUpdate({ [field]: file });
  };

  const handleSubmit = async () => {
    setError(null);

    if (!data.documentNumber.trim()) {
      setError("Please enter your document number");
      return;
    }

    setLoading(true);
    try {
      await submitDocuments({
        documentType: data.documentType,
        documentNumber: data.documentNumber.trim(),
        frontPhotoName: data.frontPhoto?.name,
        backPhotoName: data.backPhoto?.name,
        profilePhotoName: data.profilePhoto?.name,
        videoName: data.videoFile?.name,
      });
      onNext();
    } catch (err: any) {
      setError(err.message || "Failed to submit documents. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleSkip = async () => {
    setError(null);
    setLoading(true);
    try {
      await submitDocuments({
        documentType: data.documentType,
        documentNumber: "",
        skipped: true,
      });
      onNext();
    } catch (err: any) {
      setError(err.message || "Failed to skip documents. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box>
      {/* Header */}
      <Box sx={{ mb: 4 }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          mb={2}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Box
              sx={{
                width: 50,
                height: 50,
                borderRadius: "50%",
                background: `linear-gradient(135deg, ${theme.palette.info.main}, ${theme.palette.primary.main})`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: `0 4px 14px ${alpha(theme.palette.info.main, 0.4)}`,
              }}
            >
              <IconId size={24} color="white" />
            </Box>
            <Box>
              <Typography variant="h5" fontWeight={800} color="primary">
                Verify Your Identity
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Upload your ID and verification materials
              </Typography>
            </Box>
          </Box>
          <Button
            variant="text"
            onClick={handleSkip}
            disabled={loading}
            sx={{
              fontWeight: 700,
              textTransform: "none",
              color: theme.palette.text.secondary,
              "&:hover": {
                color: theme.palette.primary.main,
              },
            }}
          >
            Skip for Now
          </Button>
        </Stack>
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

      {/* Info Alert */}
      <Alert severity="info" sx={{ mb: 3, borderRadius: 2 }}>
        Upload your identification documents for verification. This helps us ensure
        a safe learning environment for all students.
      </Alert>

      {/* Form */}
      <Stack spacing={3}>
        {/* Document Type Selection */}
        <FormControl fullWidth>
          <InputLabel>Document Type</InputLabel>
          <Select
            label="Document Type"
            value={data.documentType}
            onChange={(e) => onUpdate({ documentType: e.target.value })}
            disabled={loading}
            sx={{ borderRadius: 2 }}
          >
            <MenuItem value="Aadhaar Card">Aadhaar Card</MenuItem>
            <MenuItem value="Passport">Passport</MenuItem>
            <MenuItem value="Driver License">Driver License</MenuItem>
            <MenuItem value="Student ID">Student ID</MenuItem>
          </Select>
        </FormControl>

        {/* Document Number */}
        <TextField
          label={`${data.documentType} Number`}
          value={data.documentNumber}
          onChange={(e) => onUpdate({ documentNumber: e.target.value })}
          disabled={loading}
          fullWidth
          placeholder="Enter document number"
          sx={{ "& .MuiOutlinedInput-root": { borderRadius: 2 } }}
        />

        {/* ID Document Upload */}
        <Paper
          elevation={0}
          sx={{
            p: 3,
            borderRadius: 2,
            background: alpha(theme.palette.primary.main, 0.02),
            border: `1px solid ${alpha(theme.palette.divider, 0.5)}`,
          }}
        >
          <Typography variant="subtitle1" fontWeight={700} mb={2}>
            {data.documentType} Photos
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <FileUploadBox
                label="Front Photo"
                file={data.frontPhoto}
                onChange={(f) => handleFileChange(f, "frontPhoto")}
                icon={<IconCamera size={24} />}
                accept="image/*"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FileUploadBox
                label="Back Photo"
                file={data.backPhoto}
                onChange={(f) => handleFileChange(f, "backPhoto")}
                icon={<IconCamera size={24} />}
                accept="image/*"
              />
            </Grid>
          </Grid>
        </Paper>

        {/* Profile and Video Upload */}
        <Paper
          elevation={0}
          sx={{
            p: 3,
            borderRadius: 2,
            background: alpha(theme.palette.secondary.main, 0.02),
            border: `1px solid ${alpha(theme.palette.divider, 0.5)}`,
          }}
        >
          <Typography variant="subtitle1" fontWeight={700} mb={2}>
            Verification Materials
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <FileUploadBox
                label="Profile Photo"
                file={data.profilePhoto}
                onChange={(f) => handleFileChange(f, "profilePhoto")}
                icon={<IconCamera size={24} />}
                accept="image/*"
                helperText="Clear photo of your face"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FileUploadBox
                label="Verification Video"
                file={data.videoFile}
                onChange={(f) => handleFileChange(f, "videoFile")}
                icon={<IconVideo size={24} />}
                accept="video/*"
                helperText="Short video holding your ID (optional)"
              />
            </Grid>
          </Grid>
        </Paper>

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
              "Submit Documents"
            )}
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};

// File Upload Box Component
interface FileUploadBoxProps {
  label: string;
  file: File | null;
  onChange: (file: File | null) => void;
  icon: React.ReactNode;
  accept?: string;
  helperText?: string;
}

const FileUploadBox = ({
  label,
  file,
  onChange,
  icon,
  accept = "image/*",
  helperText,
}: FileUploadBoxProps) => {
  const theme = useTheme();
  const inputId = `upload-${label.toLowerCase().replace(/\s+/g, "-")}`;

  return (
    <Box>
      <Typography variant="subtitle2" fontWeight={600} mb={1}>
        {label}
      </Typography>
      <Paper
        elevation={0}
        sx={{
          p: 3,
          borderRadius: 2,
          border: `2px dashed ${
            file ? theme.palette.success.main : alpha(theme.palette.divider, 0.8)
          }`,
          background: file
            ? alpha(theme.palette.success.main, 0.05)
            : "transparent",
          textAlign: "center",
          transition: "all 0.3s",
          "&:hover": {
            borderColor: theme.palette.primary.main,
            background: alpha(theme.palette.primary.main, 0.02),
          },
        }}
      >
        <input
          type="file"
          id={inputId}
          accept={accept}
          style={{ display: "none" }}
          onChange={(e) => onChange(e.target.files?.[0] || null)}
        />
        <label htmlFor={inputId} style={{ cursor: "pointer" }}>
          <Stack alignItems="center" spacing={1}>
            {file ? (
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  background: theme.palette.success.main,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                }}
              >
                <IconCheck size={20} />
              </Box>
            ) : (
              <Box sx={{ color: theme.palette.text.secondary }}>{icon}</Box>
            )}
            <Typography variant="body2" fontWeight={600} color="primary">
              {file ? "Change File" : "Upload File"}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              {file ? file.name : "Click to select"}
            </Typography>
          </Stack>
        </label>
      </Paper>
      {helperText && (
        <Typography variant="caption" color="text.secondary" sx={{ mt: 0.5 }}>
          {helperText}
        </Typography>
      )}
    </Box>
  );
};

export default DocumentStep;
