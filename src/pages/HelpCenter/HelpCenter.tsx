import { memo, useState } from "react";
import {
  Box,
  Container,
  Typography,
  Paper,
  Grid,
  Button,
  Card,
  CardContent,
  useTheme,
  alpha,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  TextField,
  InputAdornment,
  Stack,
  Divider,
  Chip,
} from "@mui/material";
import {
  IconHeadset,
  IconChevronDown,
  IconSearch,
  IconMail,
  IconPhone,
  IconMessageCircle,
  IconClock,
  IconBook,
  IconHelpCircle,
  IconAlertCircle,
  IconCreditCard,
  IconCalendar,
  IconMapPin,
  IconFileText,
} from "@tabler/icons-react";

/**
 * FAQ category interface
 */
interface FAQCategory {
  id: string;
  icon: JSX.Element;
  title: string;
  faqs: FAQ[];
}

/**
 * FAQ interface
 */
interface FAQ {
  question: string;
  answer: string;
}

/**
 * Help Center page component
 *
 * @component
 * @description Comprehensive help center with FAQs and support options
 */
const HelpCenter = memo(() => {
  const theme = useTheme();
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedFAQ, setExpandedFAQ] = useState<string | false>("faq-0");

  const faqCategories: FAQCategory[] = [
    {
      id: "general",
      icon: <IconHelpCircle size={24} />,
      title: "General Questions",
      faqs: [
        {
          question: "What is RoamnLearn?",
          answer:
            "RoamnLearn is an educational travel company specializing in creating immersive learning experiences for students, educators, and institutions. We design and organize tours that combine cultural exploration with curriculum-aligned educational content, helping participants gain hands-on learning experiences in destinations around the world.",
        },
        {
          question: "Who can participate in RoamnLearn tours?",
          answer:
            "Our tours are designed for students (middle school through university), educators, and educational institutions. We welcome individual students (with parental consent if under 18), school groups, university programs, and adult learners. Each tour specifies age requirements and any prerequisites.",
        },
        {
          question: "How do I choose the right tour for my group?",
          answer:
            "Consider your educational objectives, budget, available dates, and group size. Browse our tour catalog by subject, destination, or educational focus. Read detailed itineraries and learning outcomes. You can also contact our education specialists who can help recommend tours that align with your curriculum and learning goals.",
        },
        {
          question: "Are your tours led by qualified guides?",
          answer:
            "Yes! All our tours are led by experienced, certified tour guides with expertise in both travel coordination and education. Many of our guides have teaching backgrounds or advanced degrees in their specialty areas. We also partner with local experts and educators at each destination.",
        },
      ],
    },
    {
      id: "booking",
      icon: <IconCalendar size={24} />,
      title: "Booking & Payments",
      faqs: [
        {
          question: "How do I book a tour?",
          answer:
            "Browse our available tours, select your preferred option, choose your dates and group size, provide participant information, and submit your booking. You'll need to pay a deposit to confirm your reservation. Our team will then contact you with additional details and next steps.",
        },
        {
          question: "What payment methods do you accept?",
          answer:
            "We accept major credit cards (Visa, MasterCard, American Express), debit cards, bank transfers (ACH), and checks. For group bookings, we can arrange payment plans and accept purchase orders from educational institutions. All payments are processed securely through encrypted payment gateways.",
        },
        {
          question: "When is payment due?",
          answer:
            "A deposit of 25-50% of the total tour cost is required at booking. The remaining balance is due 60 days before departure. For bookings made within 60 days of departure, full payment is required at the time of booking. We offer flexible payment plans for groups - contact us for details.",
        },
        {
          question: "Can I get a group discount?",
          answer:
            "Yes! We offer discounts for group bookings. Groups of 10+ participants receive a 5% discount, 20+ receive 10%, and 30+ receive 15%. Educational institutions may qualify for additional discounts. One complimentary spot is provided for every 10 paying participants (for chaperones/teachers).",
        },
        {
          question: "What's included in the tour price?",
          answer:
            "Tour prices typically include accommodation, most meals, transportation during the tour, entrance fees to attractions, guided activities, educational materials, and travel insurance. Flights to/from the destination, some meals, personal expenses, and optional activities are usually not included. Check each tour's detailed pricing breakdown.",
        },
      ],
    },
    {
      id: "cancellation",
      icon: <IconAlertCircle size={24} />,
      title: "Cancellation & Changes",
      faqs: [
        {
          question: "What is your cancellation policy?",
          answer:
            "Cancellations 90+ days before departure: full refund minus $200 admin fee. 60-89 days: 50% refund. 30-59 days: 25% refund. Less than 30 days: no refund. Cancellations must be submitted in writing. We strongly recommend purchasing travel insurance to protect against unforeseen circumstances.",
        },
        {
          question: "Can I change my tour dates after booking?",
          answer:
            "Yes, subject to availability and any applicable fees. Changes requested more than 90 days before departure may be accommodated at no charge. Changes within 90 days may incur fees depending on the nature of the change. Contact our support team as soon as possible if you need to modify your booking.",
        },
        {
          question: "What happens if RoamnLearn cancels my tour?",
          answer:
            "If we cancel your tour (due to insufficient enrollment, force majeure, or other reasons beyond our control), you'll receive a full refund or the option to transfer to an alternative tour. We're not responsible for non-refundable expenses you may have incurred (flights, visas, etc.), which is why we recommend travel insurance.",
        },
        {
          question: "Should I purchase travel insurance?",
          answer:
            "We strongly recommend comprehensive travel insurance that covers trip cancellation, medical emergencies, evacuation, lost luggage, and travel delays. Insurance protects you against unforeseen circumstances like illness, family emergencies, or travel disruptions. We can recommend trusted insurance providers.",
        },
      ],
    },
    {
      id: "preparation",
      icon: <IconFileText size={24} />,
      title: "Travel Preparation",
      faqs: [
        {
          question: "Do I need a passport?",
          answer:
            "Yes, a valid passport is required for all international tours. Your passport must be valid for at least 6 months beyond your return date. For domestic tours, a government-issued ID is required for air travel. Apply for or renew your passport well in advance - processing can take 8-12 weeks.",
        },
        {
          question: "Do I need a visa?",
          answer:
            "Visa requirements vary by destination and your nationality. Check our tour-specific documentation for requirements. We provide guidance on visa applications but participants are responsible for obtaining necessary visas. Some destinations offer visa-on-arrival or e-visas. Start the visa process early to avoid delays.",
        },
        {
          question: "What vaccinations do I need?",
          answer:
            "Vaccination requirements vary by destination. Check with your healthcare provider and visit the CDC website for destination-specific recommendations. Common requirements include hepatitis A/B, typhoid, and routine vaccinations. Some countries may require proof of yellow fever or COVID-19 vaccination. Schedule appointments well in advance.",
        },
        {
          question: "What should I pack?",
          answer:
            "We provide a detailed packing list specific to your tour. Generally, pack comfortable walking shoes, weather-appropriate clothing, necessary medications, travel adapters, and any required documents. Pack light as you'll be moving between locations. Check baggage allowances for your flights. Don't forget journals, cameras, and learning materials.",
        },
        {
          question: "How do I prepare students for the trip?",
          answer:
            "We provide pre-departure orientation materials including cultural briefings, learning objectives, and behavioral expectations. Hold preparation meetings to discuss itinerary, rules, and learning goals. Review the destination's culture, history, and customs. Set academic expectations and assign pre-trip research or projects. Ensure all forms and permissions are completed.",
        },
      ],
    },
    {
      id: "during-tour",
      icon: <IconMapPin size={24} />,
      title: "During Your Tour",
      faqs: [
        {
          question: "What if I have a medical emergency?",
          answer:
            "Immediately notify your tour guide or contact our 24/7 emergency hotline. Our guides are trained in first aid and will coordinate with local medical facilities. Your travel insurance should cover medical treatment. We maintain relationships with medical providers in all our tour destinations. Emergency contact information is provided in your tour documents.",
        },
        {
          question: "How do I stay connected with family back home?",
          answer:
            "Most accommodations offer WiFi. We recommend purchasing an international phone plan or local SIM card. WhatsApp and other messaging apps work well over WiFi. We post daily updates and photos to a private tour group page. Check with your mobile provider about international plans before departure.",
        },
        {
          question: "What if I lose my passport or valuables?",
          answer:
            "Report losses immediately to your tour guide and local police. For lost passports, contact your country's embassy or consulate - we'll help you coordinate this. File a police report for insurance claims. Keep copies of important documents separately. Use hotel safes for valuables. Take photos of important documents before traveling.",
        },
        {
          question: "Can I leave the group for personal time?",
          answer:
            "Free time is built into most itineraries, but you must stay within designated areas and return at scheduled times. For safety and liability reasons, minors cannot leave the group unsupervised. Adult participants have more flexibility but must inform their guide. Always carry emergency contact information and hotel details.",
        },
        {
          question: "What dietary restrictions can you accommodate?",
          answer:
            "We accommodate vegetarian, vegan, gluten-free, and common religious dietary restrictions when indicated at booking. Inform us of allergies and restrictions in advance. Our guides communicate requirements to restaurants and venues. Severe allergies require additional precautions - discuss with our team before booking.",
        },
      ],
    },
    {
      id: "technical",
      icon: <IconBook size={24} />,
      title: "Website & Account",
      faqs: [
        {
          question: "How do I reset my password?",
          answer:
            "Click 'Forgot Password' on the login page, enter your email address, and follow the instructions in the reset email. If you don't receive the email, check your spam folder. Still having trouble? Contact support@roamnlearn.com with your account email address.",
        },
        {
          question: "How do I update my account information?",
          answer:
            "Log into your account and click 'Profile' or 'Account Settings.' Update your personal information, contact details, and preferences. Important: update emergency contact information before each trip. Changes to participant information on confirmed bookings should be communicated to our team.",
        },
        {
          question: "Can I access my documents offline?",
          answer:
            "Yes! Download the RoamnLearn mobile app and save your tour documents for offline access. This includes itineraries, emergency contacts, vouchers, and travel information. We recommend downloading everything before departure and taking screenshots of important information.",
        },
        {
          question: "How do I leave a review?",
          answer:
            "After your tour, you'll receive an email with a link to our review form. You can also log into your account, view your completed tours, and click 'Write a Review.' Share your experience, rate your guide, and provide feedback. Reviews help other educators and help us improve our services.",
        },
      ],
    },
  ];

  const contactOptions = [
    {
      icon: <IconMail size={28} />,
      title: "Email Support",
      description: "Get help via email",
      detail: "support@roamnlearn.com",
      responseTime: "Response within 24 hours",
    },
    {
      icon: <IconPhone size={28} />,
      title: "Phone Support",
      description: "Speak with our team",
      detail: "+1 (234) 567-890",
      responseTime: "Mon-Fri, 9AM-6PM EST",
    },
    {
      icon: <IconMessageCircle size={28} />,
      title: "Live Chat",
      description: "Chat with us instantly",
      detail: "Available on website",
      responseTime: "Average response: 5 mins",
    },
    {
      icon: <IconClock size={28} />,
      title: "24/7 Emergency",
      description: "For urgent tour issues",
      detail: "+1 (234) 567-8911",
      responseTime: "Available during tours",
    },
  ];

  const handleFAQChange = (panel: string) => {
    setExpandedFAQ(expandedFAQ === panel ? false : panel);
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
              <IconHeadset size={40} color={theme.palette.primary.main} />
            </Box>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 800,
                mb: 2,
                fontSize: { xs: "2rem", md: "3rem" },
              }}
            >
              Help Center
            </Typography>
            <Typography
              variant="h6"
              color="text.secondary"
              sx={{ maxWidth: 700, mx: "auto", mb: 4 }}
            >
              Find answers to common questions or get in touch with our support
              team. We're here to help!
            </Typography>

            {/* Search Bar */}
            <Box sx={{ maxWidth: 600, mx: "auto" }}>
              <TextField
                fullWidth
                placeholder="Search for help..."
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
        {/* Contact Options */}
        <Box sx={{ mb: 8 }}>
          <Typography
            variant="h4"
            sx={{ fontWeight: 700, mb: 4, textAlign: "center" }}
          >
            Contact Our Support Team
          </Typography>
          <Grid container spacing={3}>
            {contactOptions.map((option, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
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
                        0.1
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
                        width: 56,
                        height: 56,
                        borderRadius: "50%",
                        bgcolor: alpha(theme.palette.primary.main, 0.1),
                        color: theme.palette.primary.main,
                        mx: "auto",
                        mb: 2,
                      }}
                    >
                      {option.icon}
                    </Box>
                    <Typography variant="h6" fontWeight={600} sx={{ mb: 1 }}>
                      {option.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mb: 1 }}
                    >
                      {option.description}
                    </Typography>
                    <Typography
                      variant="body2"
                      fontWeight={600}
                      color="primary"
                      sx={{ mb: 1 }}
                    >
                      {option.detail}
                    </Typography>
                    <Chip
                      label={option.responseTime}
                      size="small"
                      sx={{
                        bgcolor: alpha(theme.palette.success.main, 0.1),
                        color: theme.palette.success.dark,
                        fontSize: "0.7rem",
                      }}
                    />
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Divider sx={{ my: 6 }} />

        {/* FAQ Section */}
        <Box sx={{ mb: 6 }}>
          <Typography
            variant="h4"
            sx={{ fontWeight: 700, mb: 2, textAlign: "center" }}
          >
            Frequently Asked Questions
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ textAlign: "center", mb: 6, maxWidth: 700, mx: "auto" }}
          >
            Browse our comprehensive FAQ to find quick answers to common
            questions about tours, bookings, and policies.
          </Typography>

          {faqCategories.map((category, categoryIndex) => (
            <Box key={category.id} sx={{ mb: 4 }}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  mb: 2,
                  border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
                  borderRadius: 3,
                  bgcolor: alpha(theme.palette.primary.main, 0.02),
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: 40,
                      height: 40,
                      borderRadius: 2,
                      bgcolor: alpha(theme.palette.primary.main, 0.1),
                      color: theme.palette.primary.main,
                      mr: 2,
                    }}
                  >
                    {category.icon}
                  </Box>
                  <Typography variant="h5" fontWeight={700}>
                    {category.title}
                  </Typography>
                </Box>

                {category.faqs.map((faq, faqIndex) => {
                  const panelId = `faq-${categoryIndex}-${faqIndex}`;
                  return (
                    <Accordion
                      key={faqIndex}
                      expanded={expandedFAQ === panelId}
                      onChange={() => handleFAQChange(panelId)}
                      elevation={0}
                      sx={{
                        mb: 1,
                        border: `1px solid ${alpha(
                          theme.palette.divider,
                          0.1
                        )}`,
                        borderRadius: "8px !important",
                        "&:before": {
                          display: "none",
                        },
                        "&.Mui-expanded": {
                          margin: "0 0 8px 0",
                        },
                      }}
                    >
                      <AccordionSummary
                        expandIcon={<IconChevronDown />}
                        sx={{ px: 2, py: 1 }}
                      >
                        <Typography variant="body1" fontWeight={600}>
                          {faq.question}
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails sx={{ px: 2, py: 2, pt: 0 }}>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{ lineHeight: 1.7 }}
                        >
                          {faq.answer}
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  );
                })}
              </Paper>
            </Box>
          ))}
        </Box>

        {/* Additional Resources */}
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
            Need More Information?
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ mb: 4, maxWidth: 600, mx: "auto" }}
          >
            Explore our comprehensive documentation or get in touch with our team
            for personalized assistance.
          </Typography>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            sx={{ justifyContent: "center" }}
          >
            <Button
              variant="contained"
              size="large"
              startIcon={<IconBook />}
              onClick={() => (window.location.hash = "documentation")}
              sx={{
                px: 4,
                py: 1.5,
                borderRadius: 2,
                textTransform: "none",
                fontSize: "1rem",
                fontWeight: 600,
              }}
            >
              View Documentation
            </Button>
            <Button
              variant="outlined"
              size="large"
              startIcon={<IconMail />}
              href="mailto:support@roamnlearn.com"
              sx={{
                px: 4,
                py: 1.5,
                borderRadius: 2,
                textTransform: "none",
                fontSize: "1rem",
                fontWeight: 600,
              }}
            >
              Email Support
            </Button>
          </Stack>
        </Paper>
      </Container>
    </Box>
  );
});

// Display name for debugging
HelpCenter.displayName = "HelpCenter";

export default HelpCenter;
