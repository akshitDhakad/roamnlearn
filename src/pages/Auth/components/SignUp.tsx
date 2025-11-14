import { useState, useCallback } from "react";
import { Box, Stepper, Step, StepLabel, alpha, useTheme, Container } from "@mui/material";
import BasicInfoStep from "./steps/BasicInfoStep";
import OtpVerificationStep from "./steps/OtpVerificationStep";
import ProfileStep from "./steps/ProfileStep";
import DocumentStep from "./steps/DocumentStep";
import PasswordStep from "./steps/PasswordStep";

export type SignUpData = {
  // Step 0: Basic Info
  name: string;
  email: string;
  phone: string;
  referralCode?: string;

  // Step 1: OTP
  otp: string;
  sessionInfo?: {
    sessionId: string;
    maskedEmail: string;
    maskedPhone: string;
  };

  // Step 2: Profile
  dateOfBirth: string;
  gender: string;
  houseNumber: string;
  street: string;
  city: string;
  state: string;
  country: string;
  grade: string;
  college: string;
  interests: string;
  parentName: string;
  guardianEmail: string;
  guardianPhone: string;
  guardianRelation: string;

  // Step 3: Documents
  documentType: string;
  documentNumber: string;
  frontPhoto: File | null;
  backPhoto: File | null;
  profilePhoto: File | null;
  videoFile: File | null;

  // Step 4: Password
  password: string;
  confirmPassword: string;
};

const STEPS = [
  "Basic Info",
  "Verify OTP",
  "Student Profile",
  "Documents",
  "Set Password",
];

/**
 * Multi-step sign up component with modern stepper
 */
const SignUp = () => {
  const theme = useTheme();
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<SignUpData>({
    name: "",
    email: "",
    phone: "",
    referralCode: "",
    otp: "",
    dateOfBirth: "",
    gender: "",
    houseNumber: "",
    street: "",
    city: "",
    state: "",
    country: "",
    grade: "",
    college: "",
    interests: "",
    parentName: "",
    guardianEmail: "",
    guardianPhone: "",
    guardianRelation: "",
    documentType: "Aadhaar Card",
    documentNumber: "",
    frontPhoto: null,
    backPhoto: null,
    profilePhoto: null,
    videoFile: null,
    password: "",
    confirmPassword: "",
  });

  const updateFormData = useCallback((data: Partial<SignUpData>) => {
    setFormData((prev) => ({ ...prev, ...data }));
  }, []);

  const handleNext = useCallback(() => {
    setCurrentStep((prev) => Math.min(prev + 1, STEPS.length - 1));
  }, []);

  const handleBack = useCallback(() => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  }, []);

  return (
    <Box>
      {/* Modern Stepper */}
      <Stepper
        activeStep={currentStep}
        alternativeLabel
        sx={{
          mb: 5,
          "& .MuiStepLabel-root .Mui-completed": {
            color: theme.palette.success.main,
          },
          "& .MuiStepLabel-root .Mui-active": {
            color: theme.palette.primary.main,
          },
          "& .MuiStepConnector-line": {
            borderTopWidth: 2,
          },
          "& .MuiStepConnector-root.Mui-completed .MuiStepConnector-line": {
            borderColor: theme.palette.success.main,
          },
          "& .MuiStepConnector-root.Mui-active .MuiStepConnector-line": {
            borderColor: theme.palette.primary.main,
          },
          "& .MuiStepLabel-label": {
            fontSize: "0.85rem",
            fontWeight: 600,
            mt: 1,
          },
        }}
      >
        {STEPS.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      {/* Step Content with animations */}
      <Box
        sx={{
          animation: "fadeIn 0.3s ease-in",
          "@keyframes fadeIn": {
            from: { opacity: 0, transform: "translateY(10px)" },
            to: { opacity: 1, transform: "translateY(0)" },
          },
        }}
      >
        {currentStep === 0 && (
          <BasicInfoStep
            data={formData}
            onUpdate={updateFormData}
            onNext={handleNext}
          />
        )}
        {currentStep === 1 && (
          <OtpVerificationStep
            data={formData}
            onUpdate={updateFormData}
            onNext={handleNext}
            onBack={handleBack}
          />
        )}
        {currentStep === 2 && (
          <ProfileStep
            data={formData}
            onUpdate={updateFormData}
            onNext={handleNext}
            onBack={handleBack}
          />
        )}
        {currentStep === 3 && (
          <DocumentStep
            data={formData}
            onUpdate={updateFormData}
            onNext={handleNext}
            onBack={handleBack}
          />
        )}
        {currentStep === 4 && (
          <PasswordStep
            data={formData}
            onUpdate={updateFormData}
            onBack={handleBack}
          />
        )}
      </Box>
    </Box>
  );
};

export default SignUp;
