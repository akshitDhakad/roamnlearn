import { memo, useState, type ReactNode } from "react";
import {
  Box,
  Container,
  Typography,
  Paper,
  Button,
  Card,
  CardContent,
  useTheme,
  alpha,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Stack,
  TextField,
  InputAdornment,
} from "@mui/material";
import { Grid } from "@mui/material";
import {
  IconBook,
  IconChevronDown,
  IconSearch,
  IconUsers,
  IconCalendar,
  IconMap,
  IconShield,
  IconHeadset,
  IconArrowRight,
  IconDownload,
  IconVideo,
  IconListCheck,
} from "@tabler/icons-react";

/**
 * Documentation category interface
 */
interface DocCategory {
  id: string;
  icon: ReactNode;
  title: string;
  description: string;
  guides: DocGuide[];
}

/**
 * Documentation guide interface
 */
interface DocGuide {
  id: string;
  title: string;
  description: string;
  steps?: string[];
}

/**
 * Documentation page component
 *
 * @component
 * @description Comprehensive documentation and guides for using RoamnLearn
 */
const Documentation = memo(() => {
  const theme = useTheme();
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedCategory, setExpandedCategory] =
    useState<string>("getting-started");

  const categories: DocCategory[] = [
    {
      id: "getting-started",
      icon: <IconBook size={24} />,
      title: "Getting Started",
      description: "Learn the basics of planning and booking educational tours",
      guides: [
        {
          id: "create-account",
          title: "Creating Your Account",
          description:
            "Step-by-step guide to setting up your RoamnLearn account",
          steps: [
            "Visit the RoamnLearn website and click 'Sign Up'",
            "Enter your email address and create a secure password",
            "Fill in your profile information (name, institution, role)",
            "Verify your email address by clicking the confirmation link",
            "Complete your profile by adding additional details",
            "Explore available tours and start planning your trip",
          ],
        },
        {
          id: "browse-tours",
          title: "Browsing Tours",
          description:
            "How to find the perfect educational tour for your group",
          steps: [
            "Use the search bar to find tours by destination or subject",
            "Apply filters for dates, duration, budget, and educational focus",
            "Read detailed tour descriptions and itineraries",
            "Check reviews and ratings from other educators",
            "Compare multiple tours side-by-side",
            "Save favorite tours to your wishlist for later review",
          ],
        },
        {
          id: "tour-details",
          title: "Understanding Tour Details",
          description: "Learn how to read and interpret tour information",
          steps: [
            "Review the complete itinerary with daily activities",
            "Check included services (meals, accommodation, transportation)",
            "Understand what's not included in the base price",
            "Review educational objectives and learning outcomes",
            "Check minimum and maximum group sizes",
            "Note any special requirements or prerequisites",
          ],
        },
      ],
    },
    {
      id: "booking",
      icon: <IconCalendar size={24} />,
      title: "Booking Process",
      description: "Complete guide to booking and confirming your tour",
      guides: [
        {
          id: "make-booking",
          title: "Making a Booking",
          description: "How to book a tour for your group",
          steps: [
            "Select your preferred tour from the catalog",
            "Choose your desired dates and group size",
            "Add participant information for all travelers",
            "Review the total cost and payment schedule",
            "Provide emergency contact information",
            "Review and accept terms and conditions",
            "Submit your booking request",
          ],
        },
        {
          id: "group-bookings",
          title: "Group Bookings",
          description: "Special considerations for booking with groups",
          steps: [
            "Contact our team for groups larger than 20 participants",
            "Provide an estimated headcount and preferred dates",
            "Receive a custom quote and group discount information",
            "Collect participant information using our group form",
            "Coordinate rooming arrangements and special requests",
            "Review group-specific terms and cancellation policies",
          ],
        },
        {
          id: "payment-options",
          title: "Payment Options",
          description: "Understanding payment methods and schedules",
          steps: [
            "Review total tour cost and included services",
            "Pay initial deposit (typically 25-50% of total)",
            "Set up payment plan for remaining balance if needed",
            "Choose from credit card, bank transfer, or check payment",
            "Receive payment confirmation and receipt via email",
            "Track payment status in your account dashboard",
          ],
        },
      ],
    },
    {
      id: "preparation",
      icon: <IconListCheck size={24} />,
      title: "Trip Preparation",
      description: "Everything you need to prepare for your tour",
      guides: [
        {
          id: "travel-docs",
          title: "Travel Documentation",
          description: "Required documents and how to obtain them",
          steps: [
            "Check passport validity (must be valid 6 months beyond travel)",
            "Research visa requirements for your destination",
            "Apply for necessary visas well in advance",
            "Make copies of all important documents",
            "Share itinerary with family and emergency contacts",
            "Download the RoamnLearn mobile app for offline access",
          ],
        },
        {
          id: "packing",
          title: "Packing Guide",
          description: "What to bring on your educational tour",
          steps: [
            "Check weather forecast for your destination",
            "Pack appropriate clothing for activities and cultural sites",
            "Bring necessary medications and prescriptions",
            "Include adapters for electronic devices",
            "Pack comfortable walking shoes",
            "Bring journal or notebook for reflection",
          ],
        },
        {
          id: "health-safety",
          title: "Health & Safety",
          description: "Staying healthy and safe during your tour",
          steps: [
            "Get required vaccinations for your destination",
            "Bring any prescribed medications in original containers",
            "Purchase comprehensive travel insurance",
            "Register with your country's embassy if traveling abroad",
            "Review tour safety guidelines and emergency procedures",
            "Save important numbers in your phone",
          ],
        },
      ],
    },
    {
      id: "during-tour",
      icon: <IconMap size={24} />,
      title: "During Your Tour",
      description: "Making the most of your educational experience",
      guides: [
        {
          id: "daily-activities",
          title: "Daily Activities",
          description: "What to expect each day on tour",
          steps: [
            "Meet your tour guide at designated meeting points",
            "Follow the daily itinerary in your tour packet",
            "Participate actively in educational activities",
            "Respect local customs and cultural practices",
            "Stay with your group at all times",
            "Ask questions and engage with local experts",
          ],
        },
        {
          id: "support",
          title: "Getting Support",
          description: "How to reach us if you need help during your tour",
          steps: [
            "Contact your tour guide for immediate assistance",
            "Use the RoamnLearn app to message our support team",
            "Call our 24/7 emergency hotline for urgent matters",
            "Access your tour documents through the mobile app",
            "Report any issues or concerns promptly",
            "Provide feedback through the daily check-in system",
          ],
        },
      ],
    },
    {
      id: "after-tour",
      icon: <IconUsers size={24} />,
      title: "After Your Tour",
      description: "Post-tour activities and follow-up",
      guides: [
        {
          id: "feedback",
          title: "Providing Feedback",
          description: "Share your experience to help us improve",
          steps: [
            "Complete the post-tour survey sent via email",
            "Rate your tour guide and overall experience",
            "Share specific highlights and suggestions",
            "Upload photos from your trip (optional)",
            "Write a detailed review on our website",
            "Recommend tours to other educators",
          ],
        },
        {
          id: "certificates",
          title: "Certificates & Documentation",
          description: "Obtaining proof of participation and credits",
          steps: [
            "Download your certificate of participation from your account",
            "Request academic credit documentation if applicable",
            "Access your complete trip itinerary and receipts",
            "Share accomplishments on social media",
            "Connect with fellow participants through our alumni network",
          ],
        },
      ],
    },
    {
      id: "policies",
      icon: <IconShield size={24} />,
      title: "Policies & Guidelines",
      description: "Important terms, conditions, and policies",
      guides: [
        {
          id: "cancellation",
          title: "Cancellation Policy",
          description: "Understanding our cancellation and refund terms",
          steps: [
            "Review cancellation deadlines in your booking confirmation",
            "Submit cancellation requests in writing",
            "Understand refund amounts based on timing",
            "Consider travel insurance for maximum protection",
            "Review options for transferring bookings",
            "Contact support for special circumstances",
          ],
        },
        {
          id: "code-of-conduct",
          title: "Code of Conduct",
          description: "Expected behavior during tours",
          steps: [
            "Respect local laws and cultural norms",
            "Treat fellow participants and locals with courtesy",
            "Follow your tour guide's instructions",
            "Maintain punctuality for scheduled activities",
            "Take responsibility for personal belongings",
            "Report any inappropriate behavior to staff",
          ],
        },
      ],
    },
  ];

  const quickLinks = [
    {
      icon: <IconDownload size={20} />,
      title: "Downloadable Resources",
      description: "Packing lists, forms, and checklists",
      link: "#",
    },
    {
      icon: <IconVideo size={20} />,
      title: "Video Tutorials",
      description: "Watch step-by-step video guides",
      link: "#",
    },
    {
      icon: <IconHeadset size={20} />,
      title: "Contact Support",
      description: "Get help from our support team",
      link: "#contact",
    },
  ];

  const handleCategoryChange = (categoryId: string) => {
    setExpandedCategory(expandedCategory === categoryId ? "" : categoryId);
  };

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
          background: `linear-gradient(135deg, ${alpha(
            theme.palette.primary.main,
            0.1
          )} 0%, ${alpha(theme.palette.secondary.main, 0.1)} 100%)`,
          py: { xs: 8, md: 10 },
          mb: 6,
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center" }}>
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
              <IconBook size={40} color={theme.palette.primary.main} />
            </Box>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 800,
                mb: 2,
                fontSize: { xs: "2rem", md: "3rem" },
              }}
            >
              Documentation
            </Typography>
            <Typography
              variant="h6"
              color="text.secondary"
              sx={{ maxWidth: 700, mx: "auto", mb: 4 }}
            >
              Everything you need to know about planning, booking, and
              experiencing educational tours with RoamnLearn.
            </Typography>

            {/* Search Bar */}
            <Box sx={{ maxWidth: 600, mx: "auto" }}>
              <TextField
                fullWidth
                placeholder="Search documentation..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <IconSearch size={20} />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  bgcolor: "background.paper",
                  borderRadius: 2,
                  "& .MuiOutlinedInput-root": {
                    borderRadius: 2,
                  },
                }}
              />
            </Box>
          </Box>
        </Container>
      </Box>

      <Container maxWidth="lg">
        {/* Quick Links */}
        <Grid container spacing={3} sx={{ mb: 8 }}>
          {quickLinks.map((link, index) => (
            <Grid size={{ xs: 12, sm: 4 }} key={index}>
              <Card
                elevation={0}
                sx={{
                  height: "100%",
                  border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
                  borderRadius: 3,
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: `0 8px 16px ${alpha(
                      theme.palette.primary.main,
                      0.08
                    )}`,
                    borderColor: alpha(theme.palette.primary.main, 0.3),
                  },
                }}
              >
                <CardContent sx={{ p: 3, textAlign: "center" }}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: 48,
                      height: 48,
                      borderRadius: "50%",
                      bgcolor: alpha(theme.palette.primary.main, 0.1),
                      color: theme.palette.primary.main,
                      mx: "auto",
                      mb: 2,
                    }}
                  >
                    {link.icon}
                  </Box>
                  <Typography variant="h6" fontWeight={600} sx={{ mb: 1 }}>
                    {link.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {link.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Documentation Categories */}
        <Box sx={{ mb: 4 }}>
          <Typography
            variant="h4"
            sx={{ fontWeight: 700, mb: 4, textAlign: "center" }}
          >
            Browse by Category
          </Typography>

          {categories.map((category) => (
            <Accordion
              key={category.id}
              expanded={expandedCategory === category.id}
              onChange={() => handleCategoryChange(category.id)}
              elevation={0}
              sx={{
                mb: 2,
                border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
                borderRadius: "12px !important",
                "&:before": {
                  display: "none",
                },
                "&.Mui-expanded": {
                  margin: "0 0 16px 0",
                  boxShadow: `0 4px 12px ${alpha(
                    theme.palette.primary.main,
                    0.08
                  )}`,
                },
              }}
            >
              <AccordionSummary
                expandIcon={<IconChevronDown />}
                sx={{
                  px: 3,
                  py: 2,
                  "& .MuiAccordionSummary-content": {
                    alignItems: "center",
                  },
                }}
              >
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
                  {category.icon}
                </Box>
                <Box sx={{ flex: 1 }}>
                  <Typography variant="h6" fontWeight={700}>
                    {category.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {category.description}
                  </Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails sx={{ px: 3, py: 2, pt: 0 }}>
                <Grid container spacing={3}>
                  {category.guides.map((guide) => (
                    <Grid size={{ xs: 12 }} key={guide.id}>
                      <Paper
                        elevation={0}
                        sx={{
                          p: 3,
                          bgcolor: alpha(theme.palette.primary.main, 0.02),
                          border: `1px solid ${alpha(
                            theme.palette.divider,
                            0.1
                          )}`,
                          borderRadius: 2,
                        }}
                      >
                        <Typography
                          variant="h6"
                          fontWeight={600}
                          sx={{ mb: 1 }}
                        >
                          {guide.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          paragraph
                        >
                          {guide.description}
                        </Typography>

                        {guide.steps && (
                          <List dense>
                            {guide.steps.map((step, index) => (
                              <ListItem
                                key={index}
                                sx={{ px: 0, alignItems: "flex-start" }}
                              >
                                <ListItemIcon sx={{ minWidth: 32, mt: 0.5 }}>
                                  <Box
                                    sx={{
                                      width: 24,
                                      height: 24,
                                      borderRadius: "50%",
                                      bgcolor: alpha(
                                        theme.palette.primary.main,
                                        0.1
                                      ),
                                      color: theme.palette.primary.main,
                                      display: "flex",
                                      alignItems: "center",
                                      justifyContent: "center",
                                      fontSize: "0.75rem",
                                      fontWeight: 700,
                                    }}
                                  >
                                    {index + 1}
                                  </Box>
                                </ListItemIcon>
                                <ListItemText
                                  primary={step}
                                  primaryTypographyProps={{
                                    variant: "body2",
                                    sx: { lineHeight: 1.6 },
                                  }}
                                />
                              </ListItem>
                            ))}
                          </List>
                        )}
                      </Paper>
                    </Grid>
                  ))}
                </Grid>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>

        {/* Still Need Help */}
        <Paper
          elevation={0}
          sx={{
            p: { xs: 4, md: 6 },
            borderRadius: 4,
            background: `linear-gradient(135deg, ${alpha(
              theme.palette.primary.main,
              0.1
            )} 0%, ${alpha(theme.palette.secondary.main, 0.1)} 100%)`,
            border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
            textAlign: "center",
          }}
        >
          <Typography variant="h4" fontWeight={700} sx={{ mb: 2 }}>
            Still Need Help?
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ mb: 4, maxWidth: 600, mx: "auto" }}
          >
            Can't find what you're looking for? Our support team is here to help
            you with any questions about planning your educational tour.
          </Typography>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            sx={{ justifyContent: "center" }}
          >
            <Button
              variant="contained"
              size="large"
              startIcon={<IconHeadset />}
              onClick={() => (window.location.hash = "contact")}
              sx={{
                px: 4,
                py: 1.5,
                borderRadius: 2,
                textTransform: "none",
                fontSize: "1rem",
                fontWeight: 600,
              }}
            >
              Contact Support
            </Button>
            <Button
              variant="outlined"
              size="large"
              endIcon={<IconArrowRight />}
              onClick={() => (window.location.hash = "help")}
              sx={{
                px: 4,
                py: 1.5,
                borderRadius: 2,
                textTransform: "none",
                fontSize: "1rem",
                fontWeight: 600,
              }}
            >
              Visit Help Center
            </Button>
          </Stack>
        </Paper>
      </Container>
    </Box>
  );
});

// Display name for debugging
Documentation.displayName = "Documentation";

export default Documentation;
