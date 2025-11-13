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
  Alert,
} from "@mui/material";
import {
  IconFileText,
  IconGavel,
  IconCreditCard,
  IconAlertCircle,
  IconShield,
  IconMail,
  IconUserCheck,
  IconCalendar,
} from "@tabler/icons-react";

/**
 * Terms of Service page component
 *
 * @component
 * @description Comprehensive terms of service for RoamnLearn educational tours platform
 */
const TermsOfService = memo(() => {
  const theme = useTheme();
  const lastUpdated = "January 13, 2025";

  const sections = [
    {
      icon: <IconUserCheck size={24} />,
      title: "Acceptance of Terms",
      content: [
        {
          text: "By accessing and using the RoamnLearn website and services, you accept and agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree to these terms, please do not use our services.",
        },
        {
          text: "These terms apply to all users of our services, including visitors, registered users, students, educators, and tour participants.",
        },
      ],
    },
    {
      icon: <IconFileText size={24} />,
      title: "Service Description",
      content: [
        {
          text: "RoamnLearn provides educational tour and travel services, including:",
          list: [
            "Educational tours to domestic and international destinations",
            "Accommodation arrangements and bookings",
            "Transportation and logistics coordination",
            "Educational activities and guided experiences",
            "Tour guides and educational facilitators",
            "Travel documentation assistance",
            "Pre-trip preparation and orientation",
          ],
        },
        {
          text: "We reserve the right to modify, suspend, or discontinue any aspect of our services at any time without prior notice.",
        },
      ],
    },
    {
      icon: <IconUserCheck size={24} />,
      title: "Eligibility and Registration",
      content: [
        {
          text: "To use our services, you must:",
          list: [
            "Be at least 18 years old, or have parental/guardian consent if under 18",
            "Provide accurate, current, and complete information during registration",
            "Maintain and promptly update your account information",
            "Keep your account credentials confidential",
            "Be responsible for all activities under your account",
            "Notify us immediately of any unauthorized use of your account",
          ],
        },
        {
          subtitle: "Parental Consent for Minors",
          text: "For participants under 18 years of age, a parent or legal guardian must provide consent and accept these terms on behalf of the minor. The parent/guardian is responsible for the minor's compliance with these terms.",
        },
      ],
    },
    {
      icon: <IconCreditCard size={24} />,
      title: "Booking and Payment Terms",
      content: [
        {
          subtitle: "Booking Process",
          text: "When you book a tour with RoamnLearn:",
          list: [
            "You must provide accurate information for all participants",
            "Tour availability is subject to confirmation",
            "Bookings are not confirmed until payment is received",
            "You will receive a confirmation email with tour details",
            "Group bookings may have special terms and conditions",
          ],
        },
        {
          subtitle: "Payment",
          text: "Payment terms include:",
          list: [
            "A deposit is required at the time of booking (typically 25-50% of total cost)",
            "Full payment is due 60 days before tour departure",
            "Late payments may result in booking cancellation",
            "We accept major credit cards, debit cards, and bank transfers",
            "All prices are in USD unless otherwise stated",
            "Prices are subject to change until booking is confirmed",
            "Additional fees may apply for optional activities or services",
          ],
        },
        {
          subtitle: "Payment Security",
          text: "We use secure third-party payment processors to handle all transactions. We do not store your complete payment card information on our servers.",
        },
      ],
    },
    {
      icon: <IconCalendar size={24} />,
      title: "Cancellation and Refund Policy",
      content: [
        {
          subtitle: "Cancellation by Customer",
          text: "If you need to cancel your tour booking:",
          list: [
            "More than 90 days before departure: Full refund minus $200 administrative fee",
            "60-89 days before departure: 50% refund of total tour cost",
            "30-59 days before departure: 25% refund of total tour cost",
            "Less than 30 days before departure: No refund",
            "No-shows or early departures: No refund",
          ],
        },
        {
          text: "All cancellation requests must be submitted in writing to cancellations@roamnlearn.com. Cancellations are effective from the date we receive your written notice.",
        },
        {
          subtitle: "Cancellation by RoamnLearn",
          text: "We reserve the right to cancel tours due to:",
          list: [
            "Insufficient enrollment (minimum participants not met)",
            "Force majeure events (natural disasters, pandemics, political unrest, etc.)",
            "Safety concerns or travel advisories",
            "Circumstances beyond our reasonable control",
          ],
        },
        {
          text: "If we cancel your tour, you will receive a full refund or the option to transfer to an alternative tour. We are not responsible for any additional costs you may have incurred (flights, visas, etc.).",
        },
        {
          subtitle: "Travel Insurance",
          text: "We strongly recommend purchasing comprehensive travel insurance that covers trip cancellation, medical emergencies, lost luggage, and other unforeseen circumstances. Tour costs are non-refundable except as stated in our cancellation policy.",
        },
      ],
    },
    {
      icon: <IconAlertCircle size={24} />,
      title: "Tour Participation and Conduct",
      content: [
        {
          text: "Tour participants must:",
          list: [
            "Follow all instructions from tour guides and staff",
            "Respect local laws, customs, and cultural norms",
            "Behave respectfully toward other participants and local communities",
            "Not engage in illegal activities or substance abuse",
            "Attend scheduled activities and maintain punctuality",
            "Take responsibility for personal belongings",
            "Comply with all safety guidelines and regulations",
          ],
        },
        {
          subtitle: "Removal from Tour",
          text: "We reserve the right to remove participants from a tour without refund if they:",
          list: [
            "Engage in dangerous, illegal, or disruptive behavior",
            "Fail to follow instructions from tour staff",
            "Endanger themselves or others",
            "Violate these terms of service",
            "Are under the influence of alcohol or drugs",
          ],
        },
      ],
    },
    {
      icon: <IconShield size={24} />,
      title: "Health and Safety",
      content: [
        {
          text: "Participants are responsible for:",
          list: [
            "Disclosing any medical conditions, allergies, or special needs at booking",
            "Ensuring they are physically fit for tour activities",
            "Obtaining necessary vaccinations and medications",
            "Carrying adequate health and travel insurance",
            "Following all health and safety guidelines provided",
            "Bringing necessary medications and medical equipment",
          ],
        },
        {
          text: "We make reasonable efforts to accommodate special needs but cannot guarantee all accommodations will be available. Please contact us in advance to discuss specific requirements.",
        },
        {
          subtitle: "Medical Emergencies",
          text: "In case of medical emergencies during tours, our staff will provide reasonable assistance. However, participants are responsible for all medical costs, evacuation expenses, and related fees not covered by insurance.",
        },
      ],
    },
    {
      icon: <IconFileText size={24} />,
      title: "Travel Documentation",
      content: [
        {
          text: "Participants are responsible for:",
          list: [
            "Obtaining valid passports with appropriate validity periods",
            "Securing necessary visas and entry permits",
            "Ensuring all travel documents are accurate and up-to-date",
            "Bringing all required documentation on the tour",
            "Complying with entry and exit requirements of all destinations",
          ],
        },
        {
          text: "We can provide guidance on documentation requirements, but participants are solely responsible for ensuring they have proper documentation. We are not liable for denied entry or deportation due to inadequate documentation.",
        },
      ],
    },
    {
      icon: <IconGavel size={24} />,
      title: "Liability and Disclaimers",
      content: [
        {
          subtitle: "Limitation of Liability",
          text: "To the fullest extent permitted by law, RoamnLearn shall not be liable for:",
          list: [
            "Acts of God, natural disasters, or force majeure events",
            "Personal injury, illness, or death not caused by our negligence",
            "Loss, theft, or damage to personal property",
            "Delays, cancellations, or changes to services caused by third parties",
            "Actions or omissions of third-party service providers (hotels, airlines, etc.)",
            "Any indirect, consequential, or punitive damages",
          ],
        },
        {
          text: "Our total liability for any claim shall not exceed the amount paid by you for the specific tour in question.",
        },
        {
          subtitle: "Third-Party Services",
          text: "We work with various third-party providers for accommodations, transportation, and activities. While we carefully select our partners, we are not responsible for their acts, errors, omissions, or failures to perform.",
        },
        {
          subtitle: "Photography and Media",
          text: "By participating in our tours, you consent to being photographed or recorded for promotional purposes. If you prefer not to be featured in our marketing materials, please notify us in writing.",
        },
      ],
    },
    {
      icon: <IconShield size={24} />,
      title: "Intellectual Property",
      content: [
        {
          text: "All content on our website, including text, graphics, logos, images, videos, and software, is the property of RoamnLearn or its licensors and is protected by copyright, trademark, and other intellectual property laws.",
        },
        {
          text: "You may not:",
          list: [
            "Copy, reproduce, or distribute our content without permission",
            "Modify, adapt, or create derivative works",
            "Use our trademarks or branding without authorization",
            "Reverse engineer or extract source code from our website",
            "Use automated tools to scrape or download content",
          ],
        },
      ],
    },
    {
      icon: <IconAlertCircle size={24} />,
      title: "Dispute Resolution",
      content: [
        {
          subtitle: "Informal Resolution",
          text: "If you have any concerns or disputes, please contact us first at support@roamnlearn.com. We will make good faith efforts to resolve issues informally.",
        },
        {
          subtitle: "Arbitration",
          text: "Any disputes that cannot be resolved informally shall be settled by binding arbitration in accordance with the rules of the American Arbitration Association. The arbitration shall be conducted in New York, NY, and judgment on the award may be entered in any court having jurisdiction.",
        },
        {
          subtitle: "Class Action Waiver",
          text: "You agree to resolve disputes individually and waive any right to participate in class action lawsuits or class-wide arbitration.",
        },
      ],
    },
    {
      icon: <IconFileText size={24} />,
      title: "Governing Law",
      content: [
        {
          text: "These Terms of Service shall be governed by and construed in accordance with the laws of the State of New York, United States, without regard to its conflict of law provisions.",
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
              <IconGavel size={40} color={theme.palette.primary.main} />
            </Box>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 800,
                mb: 2,
                fontSize: { xs: "2rem", md: "3rem" },
              }}
            >
              Terms of Service
            </Typography>
            <Typography
              variant="h6"
              color="text.secondary"
              sx={{ maxWidth: 700, mx: "auto", mb: 3 }}
            >
              Please read these terms carefully before using our educational tour
              services.
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
        {/* Important Notice */}
        <Alert
          severity="info"
          icon={<IconAlertCircle size={24} />}
          sx={{
            mb: 4,
            borderRadius: 3,
            "& .MuiAlert-message": { width: "100%" },
          }}
        >
          <Typography variant="body1" fontWeight={600} sx={{ mb: 1 }}>
            Important Notice
          </Typography>
          <Typography variant="body2" sx={{ lineHeight: 1.7 }}>
            These Terms of Service constitute a legally binding agreement between
            you and RoamnLearn. By using our services, you acknowledge that you
            have read, understood, and agree to be bound by these terms. If you
            are booking on behalf of minors, you accept these terms as their
            parent or legal guardian.
          </Typography>
        </Alert>

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
            Welcome to RoamnLearn, your trusted partner for educational travel
            experiences. These Terms of Service ("Terms") govern your use of our
            website and services, including all educational tours, bookings, and
            related services.
          </Typography>
          <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
            Please take the time to carefully review these terms. They contain
            important information about your legal rights, obligations, and
            limitations of liability. If you have any questions about these
            terms, please contact us before using our services.
          </Typography>
        </Paper>

        {/* Terms Sections */}
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
              <Box
                key={itemIndex}
                sx={{ mb: itemIndex < section.content.length - 1 ? 3 : 0 }}
              >
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

        {/* Changes to Terms */}
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
            Changes to These Terms
          </Typography>
          <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
            We reserve the right to modify these Terms of Service at any time. We
            will notify users of any material changes by posting the updated terms
            on our website and updating the "Last Updated" date. Your continued
            use of our services after such modifications constitutes acceptance of
            the updated terms.
          </Typography>
          <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
            For significant changes, we may also send notification via email to
            registered users. We encourage you to review these terms periodically
            to stay informed of any updates.
          </Typography>
        </Paper>

        {/* Severability */}
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
            Severability
          </Typography>
          <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
            If any provision of these Terms of Service is found to be
            unenforceable or invalid by a court of competent jurisdiction, such
            provision shall be limited or eliminated to the minimum extent
            necessary, and the remaining provisions shall remain in full force and
            effect.
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
            Questions About These Terms?
          </Typography>
          <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
            If you have any questions, concerns, or need clarification regarding
            these Terms of Service, please don't hesitate to contact us:
          </Typography>
          <Divider sx={{ my: 3 }} />
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <IconMail size={20} color={theme.palette.primary.main} />
              <Typography variant="body1">
                Email:{" "}
                <Typography
                  component="a"
                  href="mailto:support@roamnlearn.com"
                  sx={{
                    color: theme.palette.primary.main,
                    textDecoration: "none",
                    fontWeight: 600,
                    "&:hover": { textDecoration: "underline" },
                  }}
                >
                  support@roamnlearn.com
                </Typography>
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <IconGavel size={20} color={theme.palette.primary.main} />
              <Typography variant="body1">
                Legal Department:{" "}
                <Typography
                  component="a"
                  href="mailto:legal@roamnlearn.com"
                  sx={{
                    color: theme.palette.primary.main,
                    textDecoration: "none",
                    fontWeight: 600,
                    "&:hover": { textDecoration: "underline" },
                  }}
                >
                  legal@roamnlearn.com
                </Typography>
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}>
              <IconFileText
                size={20}
                color={theme.palette.primary.main}
                sx={{ mt: 0.5 }}
              />
              <Typography variant="body1">
                Mailing Address:
                <br />
                RoamnLearn Inc.
                <br />
                Legal Department
                <br />
                123 Education Street
                <br />
                New York, NY 10001
                <br />
                United States
              </Typography>
            </Box>
          </Box>
        </Paper>

        {/* Agreement Acknowledgment */}
        <Alert
          severity="success"
          icon={<IconUserCheck size={24} />}
          sx={{
            mt: 4,
            borderRadius: 3,
            "& .MuiAlert-message": { width: "100%" },
          }}
        >
          <Typography variant="body1" fontWeight={600} sx={{ mb: 1 }}>
            Agreement Acknowledgment
          </Typography>
          <Typography variant="body2" sx={{ lineHeight: 1.7 }}>
            By using RoamnLearn's services, you acknowledge that you have read
            these Terms of Service, understand them, and agree to be bound by
            them. Thank you for choosing RoamnLearn for your educational travel
            experiences!
          </Typography>
        </Alert>
      </Container>
    </Box>
  );
});

// Display name for debugging
TermsOfService.displayName = "TermsOfService";

export default TermsOfService;
