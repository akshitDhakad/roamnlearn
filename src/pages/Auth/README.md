# Authentication System Documentation

## Overview
This is a modern, student-friendly authentication system built with React, TypeScript, and Material-UI. It features a complete 4-step registration process with OTP verification, profile setup, document upload, and password creation.

## Features

### Design Features
- **Modern Split-Screen Layout**: Left side with animated student images carousel, right side with forms
- **Theme-Based Design**: Uses RoamLearn's rose red theme palette
- **Student-Friendly**: Vibrant colors, smooth animations, and intuitive UX
- **Fully Responsive**: Works seamlessly on mobile, tablet, and desktop
- **No Navbar/Footer**: Clean, focused authentication experience
- **Animated Transitions**: Smooth step transitions and micro-interactions

### Functionality Features
1. **Sign In**
   - Email/password authentication
   - Password visibility toggle
   - Form validation
   - Error handling
   - Remember me functionality

2. **4-Step Registration Process**

   **Step 1: Basic Info + Referral**
   - Full name
   - Email address
   - Phone number
   - Optional referral code with benefits indicator
   - OTP request

   **Step 2: OTP Verification**
   - 6-digit OTP input with individual boxes
   - Auto-focus and auto-advance
   - Paste support
   - Resend code option
   - Masked email/phone display

   **Step 3: Student Profile**
   - Personal information (DOB, gender, address)
   - Education details (grade, college, interests)
   - Guardian information (parent name, contact)
   - Referral code integration (carried from Step 1)

   **Step 4: Document Upload**
   - ID document type selection (Aadhaar, Passport, etc.)
   - Document number
   - Front/back photo upload
   - Profile photo upload
   - Optional verification video
   - Skip option available

   **Step 5: Password Creation**
   - Password strength indicator
   - Real-time validation
   - Requirement checklist
   - Confirm password matching

## File Structure

```
src/pages/Auth/
├── Auth.tsx                          # Main container with tab navigation
├── components/
│   ├── SignIn.tsx                    # Sign in component
│   ├── SignUp.tsx                    # Sign up stepper component
│   └── steps/
│       ├── BasicInfoStep.tsx         # Step 0: Basic info + referral
│       ├── OtpVerificationStep.tsx   # Step 1: OTP verification
│       ├── ProfileStep.tsx           # Step 2: Student profile
│       ├── DocumentStep.tsx          # Step 3: Document upload
│       └── PasswordStep.tsx          # Step 4: Password creation
└── README.md                         # This file
```

## Component Architecture

### Auth.tsx
Main container component that:
- Manages tab state (Sign In / Sign Up)
- Displays student image carousel
- Provides split-screen layout
- Handles theme-based styling

### SignIn.tsx
Sign in form with:
- Email and password fields
- Form validation
- Error/success alerts
- Loading states
- Password visibility toggle

### SignUp.tsx
Multi-step registration orchestrator:
- Manages current step state
- Maintains form data across steps
- Provides navigation between steps
- Displays progress stepper

### Step Components
Each step is a self-contained component with:
- Own validation logic
- Loading states
- Error handling
- Navigation buttons
- Theme-consistent styling

## Data Flow

```
BasicInfoStep
  ↓ (sends OTP request)
OtpVerificationStep
  ↓ (verifies OTP)
ProfileStep
  ↓ (saves profile + referral code)
DocumentStep
  ↓ (uploads documents or skips)
PasswordStep
  ↓ (finalizes registration)
Success → Redirect to Profile
```

## Referral Functionality

The referral system is integrated throughout the signup process:

1. **Step 0 (Basic Info)**: User can optionally enter a referral code
   - Collapsible section with benefit indicator
   - Code is stored in form state
   - Visual distinction with special styling

2. **Step 2 (Profile)**: Referral code is submitted with profile data
   - Code is sent to backend as `invitationCode`
   - Integrated seamlessly with other profile fields

## Theme Integration

The auth pages use the RoamLearn theme:

**Primary Colors:**
- Main: `#e63946` (Rose Red)
- Light: `#ff6b7a` (Light Rose)
- Dark: `#c62828` (Dark Red)

**Secondary Colors:**
- Main: `#d81b60` (Deep Pink)
- Light: `#ff5c8d` (Light Pink)

**Backgrounds:**
- Page: Gradient from primary to secondary (light tints)
- Paper: White with shadows

**Animations:**
- Floating gradient orbs
- Image carousel transitions
- Step fade-in animations
- Button hover effects
- Password strength animations

## Form Validation

### Basic Info Step
- Name: Required, non-empty
- Email: Valid email format
- Phone: Minimum 10 digits
- Referral: Optional

### OTP Step
- OTP: Exactly 6 digits

### Profile Step
- Grade: Required selection
- City, State, Country: Required
- Other fields: Optional

### Document Step
- Document number: Required if not skipping
- Photos: Optional but recommended

### Password Step
- Minimum 8 characters
- Must contain letters
- Must contain numbers
- Passwords must match

## Student Images

The carousel includes 4 high-quality student images:
1. Students studying together
2. Students in classroom
3. Students collaborating
4. Group learning session

Images auto-rotate every 5 seconds with smooth fade transitions.

## Accessibility

- Keyboard navigation support
- ARIA labels on all inputs
- Focus management in OTP inputs
- Color contrast WCAG AA compliant
- Screen reader friendly

## Mobile Optimization

- Responsive grid layouts
- Touch-friendly input sizes
- Optimized image loading
- Vertical stacking on small screens
- Hidden carousel on mobile (content priority)

## Usage

```tsx
import Auth from './pages/Auth/Auth';

function App() {
  return <Auth />;
}
```

## API Integration

The auth system uses these service methods from `services/auth.ts`:

- `requestOtp()` - Sends OTP to email/phone
- `verifyOtp()` - Verifies the OTP code
- `submitProfile()` - Saves student profile (includes referral code)
- `submitDocuments()` - Uploads verification documents
- `finalizeRegistration()` - Creates account with password
- `login()` - Authenticates existing users

## Best Practices

1. **Form State**: Centralized in SignUp component, passed down to steps
2. **Validation**: Per-step validation before allowing progression
3. **Error Handling**: User-friendly error messages with retry options
4. **Loading States**: Clear loading indicators during API calls
5. **Navigation**: Back buttons on all steps (except first)
6. **Skip Options**: Document upload can be skipped
7. **Auto-advance**: OTP inputs auto-focus next digit

## Future Enhancements

- [ ] Social login (Google, Facebook)
- [ ] Email verification link option
- [ ] SMS OTP support
- [ ] Document AI verification
- [ ] Profile photo cropping
- [ ] Video recording widget
- [ ] Multi-language support
- [ ] Dark mode theme
- [ ] Biometric authentication
- [ ] Two-factor authentication

## Troubleshooting

**OTP not received?**
- Check browser console (dev mode shows OTP)
- Verify email/phone entered correctly
- Use resend code option

**Images not loading?**
- Check internet connection
- Images are from Unsplash CDN
- Fallback to gradient background

**Form not submitting?**
- Check validation messages
- Ensure all required fields filled
- Check browser console for errors

## Support

For issues or questions:
1. Check this README
2. Review component code comments
3. Check browser console for errors
4. Review PROJECT_GUIDELINES.md
5. Contact development team

---

**Version**: 1.0.0
**Last Updated**: November 2025
**Author**: RoamLearn Development Team
