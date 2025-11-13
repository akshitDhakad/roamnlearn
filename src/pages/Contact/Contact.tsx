import { memo, useState, useCallback } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  TextField,
  Button,
  Stack,
  useTheme,
  alpha,
  Paper,
  Alert,
  InputAdornment,
  Link as MuiLink,
  Chip,
} from "@mui/material";
import {
  IconMail,
  IconPhone,
  IconMapPin,
  IconClock,
  IconSend,
  IconBrandFacebook,
  IconBrandTwitter,
  IconBrandLinkedin,
  IconBrandYoutube,
  IconUser,
  IconMessage,
  IconBriefcase,
} from "@tabler/icons-react";

/**
 * Contact method interface
 */
interface ContactMethod {
  icon: React.ReactNode;
  title: string;
  value: string;
  link: string;
  color: string;
  label: string;
}

/**
 * Form data interface
 */
interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

/**
 * Contact Us Page Component
 *
 * @component
 * @description Professional contact page featuring:
 * - Contact form with validation
 * - Contact information cards
 * - Office locations
 * - Social media links
 * - FAQ section
 * - Business hours
 */
const Contact = memo(() => {
  const theme = useTheme();
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<ContactFormData>>({});

  /**
   * Contact methods
   */
  const contactMethods: ContactMethod[] = [
    {
      icon: <IconMail size={28} />,
      title: "Email Us",
      value: "info@roamlearn.com",
      link: "mailto:info@roamlearn.com",
      color: "#f8bbd0",
      label: "Email Us",
    },
    {
      icon: <IconPhone size={28} />,
      title: "Call Us",
      value: "+1 (234) 567-890",
      link: "tel:+1234567890",
      color: "#f8bbd0",
      label: "Call Us",
    },
    {
      icon: <IconMapPin size={28} />,
      title: "Visit Us",
      value: "3 Education Street, New York, NY 10001",
      link: "https://maps.google.com",
      color: "#a5d6a7",
      label: "Visit Us",
    },
    {
      icon: <IconClock size={28} />,
      title: "Business Hours",
      value: "Mon-Fri: 9:00 AM - 6:00 PM EST",
      link: "#",
      color: "#81d4fa",
      label: "Business Hours",
    },
  ];

  /**
   * Handle input change
   */
  const handleChange = useCallback(
    (field: keyof ContactFormData) =>
      (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData((prev) => ({
          ...prev,
          [field]: event.target.value,
        }));
        // Clear error when user starts typing
        if (errors[field]) {
          setErrors((prev) => ({
            ...prev,
            [field]: undefined,
          }));
        }
      },
    [errors]
  );

  /**
   * Validate form
   */
  const validateForm = useCallback((): boolean => {
    const newErrors: Partial<ContactFormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData]);

  /**
   * Handle form submission
   */
  const handleSubmit = useCallback(
    (event: React.FormEvent) => {
      event.preventDefault();

      if (validateForm()) {
        // TODO: Implement actual form submission
        console.log("Form submitted:", formData);
        setSubmitted(true);

        // Reset form after 3 seconds
        setTimeout(() => {
          setFormData({
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
          });
          setSubmitted(false);
        }, 3000);
      }
    },
    [formData, validateForm]
  );

  return (
    <Box sx={{ minHeight: "100vh" }}>
      {/* Hero Section */}
      <Box
        sx={{
          background: `linear-gradient(135deg, ${alpha(
            theme.palette.primary.main,
            0.95
          )} 0%, ${alpha(theme.palette.secondary.main, 0.95)} 100%)`,
          color: "white",
          py: { xs: 8, md: 12 },
          position: "relative",
          overflow: "hidden",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
            opacity: 0.1,
          },
        }}
      >
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          <Stack spacing={3} alignItems="center" textAlign="center">
            <Chip
              label="About RoamLearn"
              sx={{
                backgroundColor: alpha("#ffffff", 0.2),
                color: "white",
                fontWeight: 600,
                backdropFilter: "blur(10px)",
              }}
            />
            <Typography
              variant="h2"
              sx={{
                fontWeight: 700,
                fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
                maxWidth: 800,
              }}
            >
              Transforming Education Through Travel
            </Typography>
            <Typography
              variant="h6"
              sx={{
                maxWidth: 700,
                opacity: 0.95,
                fontSize: { xs: "1rem", md: "1.25rem" },
                lineHeight: 1.6,
              }}
            >
              We connect curious minds with the world's most fascinating
              destinations, creating unforgettable learning experiences that
              inspire and educate.
            </Typography>
          </Stack>
        </Container>
      </Box>

      {/* Contact Methods Cards */}

      <Container
        maxWidth="lg"
        sx={{ mt: -6, mb: 8, position: "relative", zIndex: 2 }}
      >
        <Grid container spacing={3}>
          {contactMethods.map((stat, index) => (
            <Grid size={{ xs: 6, sm: 6, md: 3 }} key={index}>
              <Card
                sx={{
                  textAlign: "center",
                  py: 4,
                  height: "100%",
                  transition: theme.transitions.create(
                    ["transform", "box-shadow"],
                    {
                      duration: theme.transitions.duration.short,
                    }
                  ),
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: `0 12px 24px ${alpha(
                      theme.palette.primary.main,
                      0.15
                    )}`,
                  },
                }}
              >
                <Box
                  sx={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 56,
                    height: 56,
                    borderRadius: 2,
                    backgroundColor: alpha(theme.palette.primary.main, 0.1),
                    color: "primary.main",
                    mb: 2,
                  }}
                >
                  {stat.icon}
                </Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    color: "primary.main",
                    mb: 1,
                  }}
                >
                  {stat.value}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ fontWeight: 500 }}
                >
                  {stat.label}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Contact Form & Info Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={6}>
          {/* Contact Form */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Paper
              elevation={0}
              sx={{
                p: { xs: 3, md: 4 },
                borderRadius: 3,
                border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
                backgroundColor: "white",
              }}
            >
              <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
                Send Us a Message
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
                Fill out the form below and we'll get back to you within 24
                hours.
              </Typography>

              {submitted && (
                <Alert severity="success" sx={{ mb: 3 }}>
                  Thank you for contacting us! We'll get back to you soon.
                </Alert>
              )}

              <Box component="form" onSubmit={handleSubmit} noValidate>
                <Grid container spacing={3}>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                      fullWidth
                      label="Full Name"
                      value={formData.name}
                      onChange={handleChange("name")}
                      error={!!errors.name}
                      helperText={errors.name}
                      required
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          borderRadius: 2,
                        },
                      }}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <IconUser
                              size={20}
                              color={theme.palette.primary.main}
                            />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                      fullWidth
                      label="Email Address"
                      type="email"
                      value={formData.email}
                      onChange={handleChange("email")}
                      error={!!errors.email}
                      helperText={errors.email}
                      required
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          borderRadius: 2,
                        },
                      }}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <IconMail
                              size={20}
                              color={theme.palette.primary.main}
                            />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                      fullWidth
                      label="Phone Number (Optional)"
                      value={formData.phone}
                      onChange={handleChange("phone")}
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          borderRadius: 2,
                        },
                      }}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <IconPhone
                              size={20}
                              color={theme.palette.primary.main}
                            />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                      fullWidth
                      label="Subject"
                      value={formData.subject}
                      onChange={handleChange("subject")}
                      error={!!errors.subject}
                      helperText={errors.subject}
                      required
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          borderRadius: 2,
                        },
                      }}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <IconBriefcase
                              size={20}
                              color={theme.palette.primary.main}
                            />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                  <Grid size={12}>
                    <TextField
                      fullWidth
                      label="Message"
                      multiline
                      rows={6}
                      value={formData.message}
                      onChange={handleChange("message")}
                      error={!!errors.message}
                      helperText={
                        errors.message ||
                        `${formData.message.length} characters`
                      }
                      required
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          borderRadius: 2,
                        },
                      }}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment
                            position="start"
                            sx={{ alignSelf: "flex-start", mt: 2 }}
                          >
                            <IconMessage
                              size={20}
                              color={theme.palette.primary.main}
                            />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                  <Grid size={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      fullWidth
                      endIcon={<IconSend size={20} />}
                      sx={{
                        py: 1.5,
                        borderRadius: 2,
                        fontWeight: 600,
                        textTransform: "none",
                        boxShadow: "none",
                        "&:hover": {
                          boxShadow: `0 8px 24px ${alpha(
                            theme.palette.primary.main,
                            0.3
                          )}`,
                        },
                      }}
                    >
                      Send Message
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Paper>
          </Grid>

          {/* Additional Info */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Stack spacing={4}>
              {/* Office Locations */}
              <Paper elevation={0} sx={{ p: 3, borderRadius: 3 }}>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 3 }}>
                  Our Offices
                </Typography>
                <Stack spacing={3}>
                  <Box>
                    <Typography
                      variant="subtitle2"
                      sx={{ fontWeight: 600, mb: 0.5 }}
                    >
                      Headquarters
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      3 Education Street
                      <br />
                      New York, NY 10001
                      <br />
                      United States
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      variant="subtitle2"
                      sx={{ fontWeight: 600, mb: 0.5 }}
                    >
                      European Office
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      456 Learning Avenue
                      <br />
                      London, UK SW1A 1AA
                      <br />
                      United Kingdom
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      variant="subtitle2"
                      sx={{ fontWeight: 600, mb: 0.5 }}
                    >
                      Asia Pacific Office
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      789 Discovery Road
                      <br />
                      Singapore 018956
                      <br />
                      Singapore
                    </Typography>
                  </Box>
                </Stack>
              </Paper>

              {/* Social Media */}
              <Paper elevation={0} sx={{ p: 3, borderRadius: 3 }}>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 3 }}>
                  Follow Us
                </Typography>
                <Stack
                  direction="row"
                  spacing={1.5}
                  rowGap={1.5}
                  flexWrap="wrap"
                >
                  <Button
                    variant="outlined"
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    startIcon={<IconBrandFacebook size={20} />}
                    sx={{
                      textTransform: "none",
                      borderRadius: 2,
                      "&:hover": {
                        backgroundColor: alpha(
                          theme.palette.primary.main,
                          0.08
                        ),
                      },
                    }}
                  >
                    Facebook
                  </Button>
                  <Button
                    variant="outlined"
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    startIcon={<IconBrandTwitter size={20} />}
                    sx={{
                      textTransform: "none",
                      borderRadius: 2,
                      "&:hover": {
                        backgroundColor: alpha(
                          theme.palette.primary.main,
                          0.08
                        ),
                      },
                    }}
                  >
                    Twitter
                  </Button>
                  <Button
                    variant="outlined"
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    startIcon={<IconBrandLinkedin size={20} />}
                    sx={{
                      textTransform: "none",
                      borderRadius: 2,
                      "&:hover": {
                        backgroundColor: alpha(
                          theme.palette.primary.main,
                          0.08
                        ),
                      },
                    }}
                  >
                    LinkedIn
                  </Button>
                  <Button
                    variant="outlined"
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    startIcon={<IconBrandYoutube size={20} />}
                    sx={{
                      textTransform: "none",
                      borderRadius: 2,
                      "&:hover": {
                        backgroundColor: alpha(
                          theme.palette.primary.main,
                          0.08
                        ),
                      },
                    }}
                  >
                    YouTube
                  </Button>
                </Stack>
              </Paper>

              {/* FAQ Quick Links */}
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  borderRadius: 3,
                  background: `linear-gradient(135deg, ${alpha(
                    theme.palette.primary.main,
                    0.08
                  )} 0%, ${alpha(theme.palette.secondary.main, 0.08)} 100%)`,
                }}
              >
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                  Quick Links
                </Typography>
                <Stack spacing={1.5}>
                  <MuiLink
                    href="/faq"
                    underline="hover"
                    sx={{
                      display: "block",
                      color: "text.primary",
                      fontWeight: 500,
                      "&:hover": { color: "primary.main" },
                    }}
                  >
                    → Frequently Asked Questions
                  </MuiLink>
                  <MuiLink
                    href="/booking-process"
                    underline="hover"
                    sx={{
                      display: "block",
                      color: "text.primary",
                      fontWeight: 500,
                      "&:hover": { color: "primary.main" },
                    }}
                  >
                    → Booking Process
                  </MuiLink>
                  <MuiLink
                    href="/cancellation-policy"
                    underline="hover"
                    sx={{
                      display: "block",
                      color: "text.primary",
                      fontWeight: 500,
                      "&:hover": { color: "primary.main" },
                    }}
                  >
                    → Cancellation Policy
                  </MuiLink>
                  <MuiLink
                    href="/safety-guidelines"
                    underline="hover"
                    sx={{
                      display: "block",
                      color: "text.primary",
                      fontWeight: 500,
                      "&:hover": { color: "primary.main" },
                    }}
                  >
                    → Safety Guidelines
                  </MuiLink>
                </Stack>
              </Paper>
            </Stack>
          </Grid>
        </Grid>
      </Container>

      {/* Map Section (Optional Placeholder) */}
      <Box
        sx={{
          backgroundColor: "background.default",
          py: 0,
          height: 400,
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: `linear-gradient(135deg, ${alpha(
            theme.palette.primary.main,
            0.05
          )} 0%, ${alpha(theme.palette.secondary.main, 0.05)} 100%)`,
        }}
      >
        <Stack spacing={2} alignItems="center" textAlign="center">
          <IconMapPin size={64} color={theme.palette.primary.main} />
          <Typography variant="h5" sx={{ fontWeight: 700 }}>
            Find Us on the Map
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ maxWidth: 400 }}
          >
            Interactive map integration coming soon. Visit our offices or
            explore virtual tours of our tour destinations.
          </Typography>
          <Button
            variant="contained"
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              textTransform: "none",
              borderRadius: 2,
              px: 4,
            }}
          >
            Open in Google Maps
          </Button>
        </Stack>
      </Box>
    </Box>
  );
});

// Display name for debugging
Contact.displayName = "Contact";

export default Contact;
