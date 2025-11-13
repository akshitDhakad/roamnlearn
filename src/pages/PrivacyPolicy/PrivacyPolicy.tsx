import { memo } from "react";
import {
  Box,
  Container,
  Typography,
  Paper,
  Divider,
  List,
  ListItem,
  ListItemText,
  useTheme,
  alpha,
  Chip,
} from "@mui/material";
import {
  IconShield,
  IconLock,
  IconUser,
  IconMail,
  IconCookie,
  IconEye,
} from "@tabler/icons-react";

/**
 * Privacy Policy page component
 *
 * @component
 * @description Comprehensive privacy policy for RoamnLearn educational tours platform
 */
const PrivacyPolicy = memo(() => {
  const theme = useTheme();
  const lastUpdated = "January 13, 2025";

  const sections = [
    {
      icon: <IconUser size={24} />,
      title: "Information We Collect",
      content: [
        {
          subtitle: "Personal Information",
          text: "We collect personal information that you voluntarily provide to us when you register for our educational tours, express interest in our services, or otherwise contact us. This includes:",
          list: [
            "Full name, email address, and phone number",
            "Billing and shipping addresses",
            "Payment information (processed securely through third-party payment processors)",
            "Date of birth and passport information (for international tours)",
            "Emergency contact information",
            "Dietary restrictions and special accommodation needs",
            "Educational institution and academic information",
          ],
        },
        {
          subtitle: "Automatically Collected Information",
          text: "When you visit our website, we automatically collect certain information about your device, including:",
          list: [
            "Browser type and version",
            "IP address and location data",
            "Pages visited and time spent on our site",
            "Referring website addresses",
            "Device identifiers and mobile network information",
          ],
        },
      ],
    },
    {
      icon: <IconEye size={24} />,
      title: "How We Use Your Information",
      content: [
        {
          text: "We use the information we collect for various purposes, including:",
          list: [
            "Processing and fulfilling your tour bookings and reservations",
            "Communicating with you about your bookings, including confirmations, updates, and reminders",
            "Providing customer support and responding to your inquiries",
            "Sending you marketing communications about new tours, special offers, and educational content (with your consent)",
            "Improving our website, services, and customer experience",
            "Conducting analytics and research to understand user behavior and preferences",
            "Complying with legal obligations and protecting our rights",
            "Detecting and preventing fraud, security incidents, and other illegal activities",
          ],
        },
      ],
    },
    {
      icon: <IconShield size={24} />,
      title: "Information Sharing and Disclosure",
      content: [
        {
          text: "We may share your information with third parties in the following circumstances:",
          list: [
            "Service Providers: We work with third-party companies that help us operate our business, including payment processors, tour operators, hotels, transportation providers, and customer support services",
            "Educational Institutions: If you're booking through a school or educational program, we may share relevant information with your institution",
            "Legal Requirements: We may disclose your information when required by law, court order, or governmental authority",
            "Business Transfers: In the event of a merger, acquisition, or sale of assets, your information may be transferred to the new owner",
            "With Your Consent: We may share your information for any other purpose with your explicit consent",
          ],
        },
        {
          subtitle: "We Never Sell Your Personal Information",
          text: "We do not and will not sell your personal information to third parties for their marketing purposes.",
        },
      ],
    },
    {
      icon: <IconCookie size={24} />,
      title: "Cookies and Tracking Technologies",
      content: [
        {
          text: "We use cookies and similar tracking technologies to enhance your experience on our website:",
          list: [
            "Essential Cookies: Required for the website to function properly, including security and authentication",
            "Analytics Cookies: Help us understand how visitors interact with our website using services like Google Analytics",
            "Marketing Cookies: Used to deliver relevant advertisements and track campaign effectiveness",
            "Preference Cookies: Remember your settings and preferences for future visits",
          ],
        },
        {
          text: "You can control cookies through your browser settings. However, disabling certain cookies may limit your ability to use some features of our website.",
        },
      ],
    },
    {
      icon: <IconLock size={24} />,
      title: "Data Security",
      content: [
        {
          text: "We implement appropriate technical and organizational security measures to protect your personal information, including:",
          list: [
            "SSL/TLS encryption for data transmission",
            "Secure server infrastructure with regular security updates",
            "Access controls and authentication mechanisms",
            "Regular security audits and vulnerability assessments",
            "Employee training on data protection and privacy",
            "Secure backup and disaster recovery procedures",
          ],
        },
        {
          text: "While we strive to protect your information, no method of transmission over the internet or electronic storage is 100% secure. We cannot guarantee absolute security but are committed to protecting your data using industry best practices.",
        },
      ],
    },
    {
      icon: <IconUser size={24} />,
      title: "Your Privacy Rights",
      content: [
        {
          text: "Depending on your location, you may have certain rights regarding your personal information:",
          list: [
            "Access: Request a copy of the personal information we hold about you",
            "Correction: Request correction of inaccurate or incomplete information",
            "Deletion: Request deletion of your personal information (subject to legal obligations)",
            "Objection: Object to processing of your information for certain purposes",
            "Restriction: Request restriction of processing in certain circumstances",
            "Data Portability: Request transfer of your information to another service provider",
            "Withdraw Consent: Withdraw previously given consent at any time",
          ],
        },
        {
          text: "To exercise any of these rights, please contact us at privacy@roamnlearn.com. We will respond to your request within 30 days.",
        },
      ],
    },
    {
      icon: <IconMail size={24} />,
      title: "Children's Privacy",
      content: [
        {
          text: "Our educational tours are often designed for students, including minors. We take special care to protect children's privacy:",
          list: [
            "For users under 18, we require parental or guardian consent before collecting personal information",
            "We collect only the minimum necessary information for tour participation",
            "Parents/guardians have the right to review, delete, or refuse further collection of their child's information",
            "We comply with applicable children's privacy laws, including COPPA (Children's Online Privacy Protection Act)",
          ],
        },
      ],
    },
    {
      icon: <IconShield size={24} />,
      title: "International Data Transfers",
      content: [
        {
          text: "As we operate educational tours worldwide, your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place, including:",
          list: [
            "Standard contractual clauses approved by regulatory authorities",
            "Adequacy decisions where applicable",
            "Compliance with relevant international data protection frameworks",
          ],
        },
      ],
    },
  ];

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "background.default",
        pt: { xs: 12, md: 8 },
        pb: 8,
      }}
    >
      {/* Header Section */}
      <Box
        sx={{
          bgcolor: `linear-gradient(135deg, ${alpha(
            theme.palette.primary.main,
            0.05
          )} 0%, ${alpha(theme.palette.secondary.main, 0.05)} 100%)`,
          py: 8,
          mb: 6,
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", mb: 2 }}>
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: 80,
                height: 80,
                borderRadius: "50%",
                bgcolor: alpha(theme.palette.primary.main, 0.1),
                mb: 3,
              }}
            >
              <IconShield size={40} color={theme.palette.primary.main} />
            </Box>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 800,
                mb: 2,
                fontSize: { xs: "2rem", md: "3rem" },
              }}
            >
              Privacy Policy
            </Typography>
            <Typography
              variant="h6"
              color="text.secondary"
              sx={{ maxWidth: 700, mx: "auto", mb: 3 }}
            >
              Your privacy is important to us. This policy explains how we
              collect, use, and protect your personal information.
            </Typography>
            <Chip
              label={`Last Updated: ${lastUpdated}`}
              color="primary"
              variant="outlined"
              sx={{ fontWeight: 600 }}
            />
          </Box>
        </Container>
      </Box>

      {/* Main Content */}
      <Container maxWidth="lg">
        {/* Introduction */}
        <Paper
          elevation={0}
          sx={{
            p: { xs: 3, md: 5 },
            mb: 4,
            border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
            borderRadius: 3,
          }}
        >
          <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
            Welcome to RoamnLearn ("we," "our," or "us"). We are committed to
            protecting your privacy and ensuring the security of your personal
            information. This Privacy Policy describes how we collect, use,
            disclose, and safeguard information when you visit our website or
            use our educational tour services.
          </Typography>
          <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
            By using our services, you agree to the collection and use of
            information in accordance with this policy. If you do not agree with
            our policies and practices, please do not use our services.
          </Typography>
        </Paper>

        {/* Policy Sections */}
        {sections.map((section, index) => (
          <Paper
            key={index}
            elevation={0}
            sx={{
              p: { xs: 3, md: 5 },
              mb: 4,
              border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
              borderRadius: 3,
              transition: "all 0.3s ease",
              "&:hover": {
                boxShadow: `0 8px 24px ${alpha(
                  theme.palette.primary.main,
                  0.08
                )}`,
              },
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 48,
                  height: 48,
                  borderRadius: 2,
                  bgcolor: alpha(theme.palette.primary.main, 0.1),
                  color: theme.palette.primary.main,
                  mr: 2,
                }}
              >
                {section.icon}
              </Box>
              <Typography variant="h5" fontWeight={700}>
                {section.title}
              </Typography>
            </Box>

            {section.content.map((item, itemIndex) => (
              <Box key={itemIndex} sx={{ mb: itemIndex < section.content.length - 1 ? 3 : 0 }}>
                {item.subtitle && (
                  <Typography
                    variant="h6"
                    fontWeight={600}
                    sx={{ mb: 2, color: theme.palette.primary.main }}
                  >
                    {item.subtitle}
                  </Typography>
                )}
                {item.text && (
                  <Typography
                    variant="body1"
                    paragraph
                    sx={{ lineHeight: 1.8, mb: item.list ? 2 : 0 }}
                  >
                    {item.text}
                  </Typography>
                )}
                {item.list && (
                  <List sx={{ pl: 2 }}>
                    {item.list.map((listItem, listIndex) => (
                      <ListItem
                        key={listIndex}
                        sx={{
                          py: 0.5,
                          px: 0,
                          alignItems: "flex-start",
                        }}
                      >
                        <Box
                          component="span"
                          sx={{
                            width: 6,
                            height: 6,
                            borderRadius: "50%",
                            bgcolor: theme.palette.primary.main,
                            mt: 1.2,
                            mr: 2,
                            flexShrink: 0,
                          }}
                        />
                        <ListItemText
                          primary={listItem}
                          primaryTypographyProps={{
                            variant: "body2",
                            sx: { lineHeight: 1.7 },
                          }}
                        />
                      </ListItem>
                    ))}
                  </List>
                )}
              </Box>
            ))}
          </Paper>
        ))}

        {/* Data Retention */}
        <Paper
          elevation={0}
          sx={{
            p: { xs: 3, md: 5 },
            mb: 4,
            border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
            borderRadius: 3,
          }}
        >
          <Typography variant="h5" fontWeight={700} sx={{ mb: 3 }}>
            Data Retention
          </Typography>
          <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
            We retain your personal information only for as long as necessary to
            fulfill the purposes outlined in this Privacy Policy, unless a
            longer retention period is required or permitted by law. When we no
            longer need your information, we will securely delete or anonymize
            it.
          </Typography>
        </Paper>

        {/* Changes to Policy */}
        <Paper
          elevation={0}
          sx={{
            p: { xs: 3, md: 5 },
            mb: 4,
            border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
            borderRadius: 3,
          }}
        >
          <Typography variant="h5" fontWeight={700} sx={{ mb: 3 }}>
            Changes to This Privacy Policy
          </Typography>
          <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
            We may update this Privacy Policy from time to time to reflect
            changes in our practices, technology, legal requirements, or other
            factors. We will notify you of any material changes by posting the
            new policy on this page and updating the "Last Updated" date. We
            encourage you to review this Privacy Policy periodically.
          </Typography>
        </Paper>

        {/* Contact Information */}
        <Paper
          elevation={0}
          sx={{
            p: { xs: 3, md: 5 },
            border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
            borderRadius: 3,
            bgcolor: alpha(theme.palette.primary.main, 0.02),
          }}
        >
          <Typography variant="h5" fontWeight={700} sx={{ mb: 3 }}>
            Contact Us
          </Typography>
          <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
            If you have any questions, concerns, or requests regarding this
            Privacy Policy or our data practices, please contact us:
          </Typography>
          <Divider sx={{ my: 3 }} />
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <IconMail size={20} color={theme.palette.primary.main} />
              <Typography variant="body1">
                Email:{" "}
                <Typography
                  component="a"
                  href="mailto:privacy@roamnlearn.com"
                  sx={{
                    color: theme.palette.primary.main,
                    textDecoration: "none",
                    fontWeight: 600,
                    "&:hover": { textDecoration: "underline" },
                  }}
                >
                  privacy@roamnlearn.com
                </Typography>
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <IconShield size={20} color={theme.palette.primary.main} />
              <Typography variant="body1">
                Data Protection Officer:{" "}
                <Typography
                  component="a"
                  href="mailto:dpo@roamnlearn.com"
                  sx={{
                    color: theme.palette.primary.main,
                    textDecoration: "none",
                    fontWeight: 600,
                    "&:hover": { textDecoration: "underline" },
                  }}
                >
                  dpo@roamnlearn.com
                </Typography>
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}>
              <IconUser size={20} color={theme.palette.primary.main} sx={{ mt: 0.5 }} />
              <Typography variant="body1">
                Mailing Address:<br />
                RoamnLearn Inc.<br />
                123 Education Street<br />
                New York, NY 10001<br />
                United States
              </Typography>
            </Box>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
});

// Display name for debugging
PrivacyPolicy.displayName = "PrivacyPolicy";

export default PrivacyPolicy;
