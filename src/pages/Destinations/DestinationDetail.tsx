import { memo, useState } from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Paper,
  Chip,
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  Stack,
  useTheme,
  alpha,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import TalentTest from "./TalentTest";
import {
  IconMapPin,
  IconClock,
  IconUsers,
  IconStar,
  IconCheck,
  IconHeart,
  IconHeartFilled,
  IconShare,
  IconChevronDown,
  IconBed,
  IconCoffee,
  IconCamera,
  IconShieldCheck,
  IconLanguage,
  IconAward,
  IconArrowLeft,
} from "@tabler/icons-react";

/**
 * Destination Detail Page Component
 * Airbnb-style detail page with image gallery, itinerary, and booking
 */
const DestinationDetail = memo(() => {
  const theme = useTheme();
  const [isFavorite, setIsFavorite] = useState(false);
  const [, setShowAllPhotos] = useState(false);
  const [testOpen, setTestOpen] = useState(false);

  // Sample data - would come from API/route params
  const destination = {
    id: "1",
    title: "Renaissance Art & Architecture Tour",
    location: "Florence, Italy",
    rating: 4.9,
    reviews: 124,
    price: 2499,
    duration: "7 Days",
    participants: "15-25 students",
    category: "Culture & History",
    description:
      "Immerse yourself in the birthplace of the Renaissance with our comprehensive 7-day tour through Florence. Experience world-renowned art, stunning architecture, and rich cultural heritage with expert art historians as your guides. This educational journey combines guided museum tours, hands-on workshops, and authentic Italian experiences.",
    images: [
      "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=1200&h=800&fit=crop&q=80",
      "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=600&h=400&fit=crop&q=80",
      "https://images.unsplash.com/photo-1541629602-333925fa5e0e?w=600&h=400&fit=crop&q=80",
      "https://images.unsplash.com/photo-1583422409516-2895a77efded?w=600&h=400&fit=crop&q=80",
      "https://images.unsplash.com/photo-1471623320832-752e8bbf8413?w=600&h=400&fit=crop&q=80",
    ],
    host: {
      name: "Dr. Maria Rossi",
      avatar: "https://i.pravatar.cc/150?img=5",
      title: "Art History Professor",
      experience: "15+ years",
      languages: ["English", "Italian", "French"],
      rating: 4.95,
      reviews: 89,
    },
    itinerary: [
      {
        day: 1,
        title: "Arrival & Welcome to Florence",
        description:
          "Arrive at Florence Airport, transfer to your boutique hotel in the historic center. Welcome dinner at a traditional Tuscan restaurant.",
        activities: [
          "Airport pickup and hotel check-in",
          "Orientation walking tour of Florence",
          "Welcome dinner with group introduction",
          "Overview of the week ahead",
        ],
        meals: "Dinner",
        accommodation: "Hotel Brunelleschi (4-star)",
      },
      {
        day: 2,
        title: "Uffizi Gallery & Renaissance Masters",
        description:
          "Deep dive into Renaissance art at the world-famous Uffizi Gallery. Expert-led tour of masterpieces by Botticelli, da Vinci, and Michelangelo.",
        activities: [
          "Private morning tour of Uffizi Gallery",
          "Lunch at historic Palazzo café",
          "Afternoon art history lecture",
          "Free time to explore Piazza della Signoria",
        ],
        meals: "Breakfast, Lunch",
        accommodation: "Hotel Brunelleschi",
      },
      {
        day: 3,
        title: "Michelangelo's Florence",
        description:
          "Explore the genius of Michelangelo through his iconic works including the David at Galleria dell'Accademia.",
        activities: [
          "Skip-the-line access to Galleria dell'Accademia",
          "Study of Michelangelo's David",
          "Visit to San Lorenzo complex and Medici Chapels",
          "Sculpture workshop with local artist",
        ],
        meals: "Breakfast",
        accommodation: "Hotel Brunelleschi",
      },
      {
        day: 4,
        title: "Florence Cathedral & Brunelleschi's Dome",
        description:
          "Architectural masterpiece tour including climbing the iconic Duomo and exploring the Baptistery.",
        activities: [
          "Guided tour of Florence Cathedral",
          "Climb Brunelleschi's Dome (463 steps)",
          "Visit to the Baptistery and Giotto's Bell Tower",
          "Panoramic views from the top",
        ],
        meals: "Breakfast, Lunch",
        accommodation: "Hotel Brunelleschi",
      },
      {
        day: 5,
        title: "Day Trip to Siena & San Gimignano",
        description:
          "Venture into the Tuscan countryside to explore medieval hill towns rich in art and architecture.",
        activities: [
          "Private coach to Siena",
          "Tour of Siena Cathedral and Piazza del Campo",
          "Traditional Tuscan lunch in San Gimignano",
          "Return to Florence via scenic Chianti region",
        ],
        meals: "Breakfast, Lunch",
        accommodation: "Hotel Brunelleschi",
      },
      {
        day: 6,
        title: "Pitti Palace & Boboli Gardens",
        description:
          "Explore the grandeur of the Medici family at their former residence and spectacular Renaissance gardens.",
        activities: [
          "Tour of Pitti Palace galleries",
          "Stroll through Boboli Gardens",
          "Visit to Ponte Vecchio",
          "Farewell dinner with traditional music",
        ],
        meals: "Breakfast, Dinner",
        accommodation: "Hotel Brunelleschi",
      },
      {
        day: 7,
        title: "Departure",
        description:
          "Final breakfast and farewell. Transfer to Florence Airport for your departure flight.",
        activities: [
          "Check-out and luggage storage",
          "Optional last-minute shopping",
          "Airport transfer",
          "Departure",
        ],
        meals: "Breakfast",
        accommodation: "N/A",
      },
    ],
    included: [
      "6 nights accommodation in 4-star hotel",
      "Daily breakfast and 4 dinners",
      "All entrance fees to museums and attractions",
      "Expert art historian guide throughout",
      "Private transportation for day trips",
      "Skip-the-line tickets for all attractions",
      "Art workshop materials",
      "Welcome and farewell dinners",
    ],
    notIncluded: [
      "International airfare",
      "Travel insurance",
      "Lunches on days 3, 5, 7",
      "Personal expenses",
      "Tips and gratuities",
      "Optional activities",
    ],
    highlights: [
      "Private tours of Uffizi Gallery and Accademia",
      "Expert art history lectures",
      "Hands-on sculpture workshop",
      "Day trip to Tuscan hill towns",
      "Small group size (max 25 students)",
      "Skip-the-line access to all sites",
    ],
  };

  // Reviews are intentionally omitted in this view to keep the page concise

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "background.default" }}>
      {/* Back Button */}
      <Box
        sx={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          bgcolor: "background.paper",
          borderBottom: `1px solid ${theme.palette.divider}`,
          py: 2,
        }}
      >
        <Container maxWidth="xl">
          <Button
            startIcon={<IconArrowLeft size={20} />}
            sx={{
              textTransform: "none",
              fontWeight: 600,
              color: "text.primary",
              "&:hover": {
                bgcolor: alpha(theme.palette.primary.main, 0.05),
              },
            }}
            onClick={() => window.history.back()}
          >
            Back to Educational Tours
          </Button>
        </Container>
      </Box>

      {/* Image Gallery */}
      <Container maxWidth="xl" sx={{ py: 4 }}>
        <Grid container spacing={2} sx={{ mb: 4 }}>
          {/* Main Large Image */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                position: "relative",
                width: "100%",
                paddingTop: "75%",
                borderRadius: 2,
                overflow: "hidden",
                cursor: "pointer",
                border: `1px solid ${theme.palette.divider}`,
                "&:hover img": {
                  transform: "scale(1.05)",
                },
              }}
              onClick={() => setShowAllPhotos(true)}
            >
              <Box
                component="img"
                src={destination.images[0]}
                alt={destination.title}
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "transform 0.3s ease",
                }}
              />
            </Box>
          </Grid>

          {/* Grid of Smaller Images */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Grid container spacing={2}>
              {destination.images.slice(1, 5).map((image, index) => (
                <Grid size={{ xs: 6 }} key={index}>
                  <Box
                    sx={{
                      position: "relative",
                      width: "100%",
                      paddingTop: "100%",
                      borderRadius: 2,
                      overflow: "hidden",
                      cursor: "pointer",
                      border: `1px solid ${theme.palette.divider}`,
                      "&:hover img": {
                        transform: "scale(1.05)",
                      },
                    }}
                    onClick={() => setShowAllPhotos(true)}
                  >
                    <Box
                      component="img"
                      src={image}
                      alt={`${destination.title} ${index + 2}`}
                      sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        transition: "transform 0.3s ease",
                      }}
                    />
                    {index === 3 && (
                      <Box
                        sx={{
                          position: "absolute",
                          inset: 0,
                          bgcolor: "rgba(0,0,0,0.6)",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "white",
                          fontWeight: 600,
                          gap: 1,
                        }}
                      >
                        <IconCamera size={28} />
                        <Typography variant="body2" fontWeight={600}>
                          View all photos
                        </Typography>
                      </Box>
                    )}
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>

        {/* Main Content Grid */}
        <Grid container spacing={4}>
          {/* Left Column - Main Content */}
          <Grid size={{ xs: 12, md: 8 }}>
            {/* Title and Actions */}
            <Box sx={{ mb: 4 }}>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="flex-start"
                sx={{ mb: 2 }}
              >
                <Box sx={{ flex: 1 }}>
                  <Stack direction="row" spacing={1} sx={{ mb: 1.5 }}>
                    <Chip
                      label={destination.category}
                      size="small"
                      sx={{
                        bgcolor: alpha(theme.palette.primary.main, 0.1),
                        color: theme.palette.primary.main,
                        fontWeight: 600,
                      }}
                    />
                    <Chip
                      label="Educational Tour"
                      size="small"
                      sx={{
                        bgcolor: alpha(theme.palette.primary.main, 0.1),
                        color: theme.palette.primary.main,
                        fontWeight: 600,
                      }}
                    />
                  </Stack>
                  <Typography
                    variant="h3"
                    fontWeight={700}
                    sx={{
                      mb: 2,
                      fontSize: { xs: "1.75rem", md: "2.5rem" },
                    }}
                  >
                    {destination.title}
                  </Typography>
                  <Stack direction="row" spacing={2} flexWrap="wrap">
                    <Box
                      sx={{ display: "flex", alignItems: "center", gap: 0.5 }}
                    >
                      <IconStar size={18} fill="#FFB800" color="#FFB800" />
                      <Typography variant="body2" fontWeight={600}>
                        {destination.rating}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        ({destination.reviews} students)
                      </Typography>
                    </Box>
                    <Box
                      sx={{ display: "flex", alignItems: "center", gap: 0.5 }}
                    >
                      <IconMapPin
                        size={18}
                        color={theme.palette.text.secondary}
                      />
                      <Typography variant="body2" color="text.secondary">
                        {destination.location}
                      </Typography>
                    </Box>
                  </Stack>
                </Box>

                <Stack direction="row" spacing={1}>
                  <IconButton
                    size="small"
                    onClick={() => setIsFavorite(!isFavorite)}
                    sx={{
                      border: `1px solid ${theme.palette.divider}`,
                      "&:hover": {
                        bgcolor: alpha(theme.palette.primary.main, 0.05),
                      },
                    }}
                  >
                    {isFavorite ? (
                      <IconHeartFilled
                        size={20}
                        color={theme.palette.error.main}
                      />
                    ) : (
                      <IconHeart size={20} />
                    )}
                  </IconButton>
                  <IconButton
                    size="small"
                    sx={{
                      border: `1px solid ${theme.palette.divider}`,
                      "&:hover": {
                        bgcolor: alpha(theme.palette.primary.main, 0.05),
                      },
                    }}
                  >
                    <IconShare size={20} />
                  </IconButton>
                </Stack>
              </Stack>

              {/* Quick Info */}
              <Paper
                elevation={0}
                sx={{
                  p: 2.5,
                  bgcolor: alpha(theme.palette.primary.main, 0.03),
                  border: `1px solid ${theme.palette.divider}`,
                  borderRadius: 2,
                }}
              >
                <Grid container spacing={2}>
                  <Grid size={{ xs: 6, sm: 3 }}>
                    <Box sx={{ textAlign: "center" }}>
                      <IconClock
                        size={24}
                        color={theme.palette.primary.main}
                        style={{ marginBottom: 8 }}
                      />
                      <Typography
                        variant="caption"
                        color="text.secondary"
                        sx={{ display: "block" }}
                      >
                        Duration
                      </Typography>
                      <Typography variant="body2" fontWeight={600}>
                        {destination.duration}
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid size={{ xs: 6, sm: 3 }}>
                    <Box sx={{ textAlign: "center" }}>
                      <IconUsers
                        size={24}
                        color={theme.palette.primary.main}
                        style={{ marginBottom: 8 }}
                      />
                      <Typography
                        variant="caption"
                        color="text.secondary"
                        sx={{ display: "block" }}
                      >
                        Group Size
                      </Typography>
                      <Typography variant="body2" fontWeight={600}>
                        {destination.participants.split(" ")[0]}
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid size={{ xs: 6, sm: 3 }}>
                    <Box sx={{ textAlign: "center" }}>
                      <IconLanguage
                        size={24}
                        color={theme.palette.primary.main}
                        style={{ marginBottom: 8 }}
                      />
                      <Typography
                        variant="caption"
                        color="text.secondary"
                        sx={{ display: "block" }}
                      >
                        Language
                      </Typography>
                      <Typography variant="body2" fontWeight={600}>
                        English
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid size={{ xs: 6, sm: 3 }}>
                    <Box sx={{ textAlign: "center" }}>
                      <IconAward
                        size={24}
                        color={theme.palette.primary.main}
                        style={{ marginBottom: 8 }}
                      />
                      <Typography
                        variant="caption"
                        color="text.secondary"
                        sx={{ display: "block" }}
                      >
                        Level
                      </Typography>
                      <Typography variant="body2" fontWeight={600}>
                        Intermediate
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Paper>
            </Box>

            {/* Instructor Information */}
            <Paper
              elevation={0}
              sx={{
                p: 3,
                mb: 4,
                border: `1px solid ${theme.palette.divider}`,
                borderRadius: 2,
              }}
            >
              <Typography
                variant="subtitle2"
                fontWeight={600}
                color="text.secondary"
                sx={{ mb: 2 }}
              >
                Your Tour Instructor
              </Typography>
              <Stack direction="row" spacing={2} alignItems="center">
                <Avatar
                  src={destination.host.avatar}
                  sx={{ width: 64, height: 64 }}
                />
                <Box sx={{ flexGrow: 1 }}>
                  <Typography variant="h6" fontWeight={700}>
                    {destination.host.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 0.5 }}
                  >
                    {destination.host.title} · {destination.host.experience}
                  </Typography>
                  <Stack direction="row" spacing={2}>
                    <Box
                      sx={{ display: "flex", alignItems: "center", gap: 0.5 }}
                    >
                      <IconStar size={16} fill="#FFB800" color="#FFB800" />
                      <Typography variant="body2" fontWeight={600}>
                        {destination.host.rating}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        ({destination.host.reviews})
                      </Typography>
                    </Box>
                    <Typography variant="body2" color="text.secondary">
                      {destination.host.languages.join(", ")}
                    </Typography>
                  </Stack>
                </Box>
                <Button
                  variant="outlined"
                  sx={{
                    textTransform: "none",
                    fontWeight: 600,
                  }}
                >
                  Contact
                </Button>
              </Stack>
            </Paper>

            {/* Description */}
            <Box sx={{ mb: 4 }}>
              <Typography variant="h5" fontWeight={700} sx={{ mb: 2 }}>
                About this Educational Tour
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ lineHeight: 1.8, mb: 2 }}
              >
                {destination.description}
              </Typography>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  mt: 3,
                  bgcolor: alpha(theme.palette.primary.main, 0.04),
                  border: `1px solid ${theme.palette.divider}`,
                  borderRadius: 2,
                  borderLeft: `4px solid ${theme.palette.primary.main}`,
                }}
              >
                <Typography variant="subtitle2" fontWeight={700} sx={{ mb: 1 }}>
                  Educational Focus
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ lineHeight: 1.7 }}
                >
                  This tour is designed as an immersive educational experience
                  that combines theoretical knowledge with practical
                  application. Students will engage with primary sources,
                  participate in expert-led discussions, and develop critical
                  analysis skills essential for advanced study in art history
                  and cultural studies.
                </Typography>
              </Paper>
            </Box>

            <Divider sx={{ my: 4 }} />

            {/* Skills You'll Gain */}
            <Box sx={{ mb: 4 }}>
              <Typography variant="h5" fontWeight={700} sx={{ mb: 3 }}>
                Skills You'll Gain
              </Typography>
              <Grid container spacing={2}>
                {[
                  { skill: "Art Historical Analysis", icon: IconCamera },
                  { skill: "Critical Thinking", icon: IconAward },
                  { skill: "Cultural Awareness", icon: IconLanguage },
                  { skill: "Visual Literacy", icon: IconStar },
                  { skill: "Research Methods", icon: IconCheck },
                  { skill: "Academic Writing", icon: IconCoffee },
                ].map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                      <Paper
                        elevation={0}
                        sx={{
                          p: 2,
                          height: "100%",
                          border: `1px solid ${theme.palette.divider}`,
                          borderRadius: 2,
                          bgcolor: "background.paper",
                          "&:hover": {
                            bgcolor: alpha(theme.palette.primary.main, 0.04),
                          },
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 1.5,
                          }}
                        >
                          <IconComponent
                            size={20}
                            color={theme.palette.primary.main}
                          />
                          <Typography variant="body2" fontWeight={600}>
                            {item.skill}
                          </Typography>
                        </Box>
                      </Paper>
                    </Grid>
                  );
                })}
              </Grid>
            </Box>

            <Divider sx={{ my: 4 }} />

            {/* Tour Highlights */}
            <Box sx={{ mb: 4 }}>
              <Typography variant="h5" fontWeight={700} sx={{ mb: 3 }}>
                Educational Highlights
              </Typography>
              <Grid container spacing={1.5}>
                {destination.highlights.map((highlight, index) => (
                  <Grid size={{ xs: 12, sm: 6 }} key={index}>
                    <Box sx={{ display: "flex", gap: 1.5, p: 1.5 }}>
                      <IconCheck
                        size={20}
                        color={theme.palette.primary.main}
                        style={{ flexShrink: 0 }}
                      />
                      <Typography variant="body2" color="text.secondary">
                        {highlight}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>

            <Divider sx={{ my: 4 }} />

            {/* Day-by-Day Itinerary */}
            <Box sx={{ mb: 4 }}>
              <Typography variant="h5" fontWeight={700} sx={{ mb: 3 }}>
                Day-by-Day Learning Journey
              </Typography>
              <Stack spacing={2}>
                {destination.itinerary.map((day) => (
                  <Accordion
                    key={day.day}
                    elevation={0}
                    sx={{
                      border: `1px solid ${theme.palette.divider}`,
                      borderRadius: "8px !important",
                      "&:before": { display: "none" },
                      overflow: "hidden",
                    }}
                  >
                    <AccordionSummary
                      expandIcon={<IconChevronDown size={20} />}
                      sx={{
                        px: 3,
                        py: 1.5,
                        "&:hover": {
                          bgcolor: alpha(theme.palette.primary.main, 0.03),
                        },
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 2,
                          width: "100%",
                        }}
                      >
                        <Box
                          sx={{
                            width: 48,
                            height: 48,
                            borderRadius: 1,
                            bgcolor: alpha(theme.palette.primary.main, 0.1),
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                          }}
                        >
                          <Typography
                            variant="h6"
                            fontWeight={700}
                            color="primary"
                          >
                            {day.day}
                          </Typography>
                        </Box>
                        <Box sx={{ flexGrow: 1 }}>
                          <Typography variant="h6" fontWeight={700}>
                            {day.title}
                          </Typography>
                          <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{
                              display: "-webkit-box",
                              WebkitLineClamp: 1,
                              WebkitBoxOrient: "vertical",
                              overflow: "hidden",
                            }}
                          >
                            {day.description}
                          </Typography>
                        </Box>
                      </Box>
                    </AccordionSummary>
                    <AccordionDetails
                      sx={{
                        px: 3,
                        py: 2,
                        bgcolor: alpha(theme.palette.primary.main, 0.02),
                        borderTop: `1px solid ${theme.palette.divider}`,
                      }}
                    >
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ mb: 2, lineHeight: 1.7 }}
                      >
                        {day.description}
                      </Typography>
                      <Typography
                        variant="subtitle2"
                        fontWeight={700}
                        sx={{ mb: 1.5 }}
                      >
                        Learning Activities:
                      </Typography>
                      <List dense sx={{ mb: 2 }}>
                        {day.activities.map((activity, idx) => (
                          <ListItem key={idx} sx={{ py: 0.5, px: 0 }}>
                            <ListItemIcon sx={{ minWidth: 32 }}>
                              <IconCheck
                                size={18}
                                color={theme.palette.primary.main}
                              />
                            </ListItemIcon>
                            <ListItemText
                              primary={activity}
                              primaryTypographyProps={{
                                variant: "body2",
                                color: "text.secondary",
                              }}
                            />
                          </ListItem>
                        ))}
                      </List>
                      <Stack direction="row" spacing={3} flexWrap="wrap">
                        <Box
                          sx={{ display: "flex", alignItems: "center", gap: 1 }}
                        >
                          <IconCoffee
                            size={18}
                            color={theme.palette.text.secondary}
                          />
                          <Typography variant="caption" color="text.secondary">
                            <strong>Meals:</strong> {day.meals}
                          </Typography>
                        </Box>
                        <Box
                          sx={{ display: "flex", alignItems: "center", gap: 1 }}
                        >
                          <IconBed
                            size={18}
                            color={theme.palette.text.secondary}
                          />
                          <Typography variant="caption" color="text.secondary">
                            <strong>Stay:</strong> {day.accommodation}
                          </Typography>
                        </Box>
                      </Stack>
                    </AccordionDetails>
                  </Accordion>
                ))}
              </Stack>
            </Box>

            <Divider sx={{ my: 4 }} />

            {/* Learning Objectives */}
            <Box sx={{ mb: 4 }}>
              <Typography variant="h5" fontWeight={700} sx={{ mb: 3 }}>
                Learning Objectives
              </Typography>
              <List dense>
                {[
                  "Understand the historical context of the Italian Renaissance",
                  "Analyze key artistic techniques and innovations of Renaissance masters",
                  "Identify architectural elements and their significance",
                  "Develop critical thinking skills through art appreciation",
                  "Gain hands-on experience with traditional art methods",
                  "Build cultural awareness and historical knowledge",
                ].map((objective, index) => (
                  <ListItem key={index} sx={{ py: 1, px: 0 }}>
                    <ListItemIcon sx={{ minWidth: 40 }}>
                      <Box
                        sx={{
                          width: 28,
                          height: 28,
                          borderRadius: "50%",
                          bgcolor: alpha(theme.palette.primary.main, 0.1),
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Typography
                          variant="caption"
                          fontWeight={700}
                          color="primary"
                        >
                          {index + 1}
                        </Typography>
                      </Box>
                    </ListItemIcon>
                    <ListItemText
                      primary={objective}
                      primaryTypographyProps={{
                        variant: "body2",
                        color: "text.secondary",
                      }}
                    />
                  </ListItem>
                ))}
              </List>
            </Box>

            <Divider sx={{ my: 4 }} />

            {/* Prerequisites & Requirements */}
            <Box sx={{ mb: 4 }}>
              <Typography variant="h5" fontWeight={700} sx={{ mb: 3 }}>
                Prerequisites & Requirements
              </Typography>
              <Grid container spacing={3}>
                <Grid size={{ xs: 12, md: 6 }}>
                  <Paper
                    elevation={0}
                    sx={{
                      p: 3,
                      height: "100%",
                      bgcolor: alpha(theme.palette.primary.main, 0.03),
                      border: `1px solid ${theme.palette.divider}`,
                      borderRadius: 2,
                    }}
                  >
                    <Typography variant="h6" fontWeight={700} sx={{ mb: 2 }}>
                      Required
                    </Typography>
                    <List dense>
                      {[
                        "Basic knowledge of European history",
                        "Intermediate English proficiency",
                        "Ability to walk 3-5 miles per day",
                        "Valid passport (6 months validity)",
                      ].map((item, index) => (
                        <ListItem key={index} sx={{ py: 0.5, px: 0 }}>
                          <ListItemIcon sx={{ minWidth: 32 }}>
                            <IconCheck
                              size={18}
                              color={theme.palette.primary.main}
                            />
                          </ListItemIcon>
                          <ListItemText
                            primary={item}
                            primaryTypographyProps={{
                              variant: "body2",
                              color: "text.secondary",
                            }}
                          />
                        </ListItem>
                      ))}
                    </List>
                  </Paper>
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                  <Paper
                    elevation={0}
                    sx={{
                      p: 3,
                      height: "100%",
                      bgcolor: alpha(theme.palette.primary.main, 0.03),
                      border: `1px solid ${theme.palette.divider}`,
                      borderRadius: 2,
                    }}
                  >
                    <Typography variant="h6" fontWeight={700} sx={{ mb: 2 }}>
                      Recommended
                    </Typography>
                    <List dense>
                      {[
                        "Interest in art history and culture",
                        "Photography skills (optional)",
                        "Journal for note-taking",
                        "Comfortable walking shoes",
                      ].map((item, index) => (
                        <ListItem key={index} sx={{ py: 0.5, px: 0 }}>
                          <ListItemIcon sx={{ minWidth: 32 }}>
                            <IconCheck
                              size={18}
                              color={theme.palette.primary.main}
                            />
                          </ListItemIcon>
                          <ListItemText
                            primary={item}
                            primaryTypographyProps={{
                              variant: "body2",
                              color: "text.secondary",
                            }}
                          />
                        </ListItem>
                      ))}
                    </List>
                  </Paper>
                </Grid>
              </Grid>
            </Box>
          </Grid>

          {/* Right Column - Talent Test Card (Sticky) */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Paper
              elevation={0}
              sx={{
                p: 3,
                position: "sticky",
                top: 100,
                border: `1px solid ${theme.palette.divider}`,
                borderRadius: 2,
                bgcolor: "background.paper",
              }}
            >
              {/* Coins Display */}
              <Box
                sx={{
                  mb: 3,
                  p: 2.5,
                  borderRadius: 2,
                  bgcolor: alpha(theme.palette.primary.main, 0.04),
                  border: `1px solid ${theme.palette.divider}`,
                  textAlign: "center",
                }}
              >
                <Typography
                  variant="caption"
                  color="text.secondary"
                  sx={{ mb: 1, display: "block" }}
                >
                  Tour Cost
                </Typography>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="center"
                  spacing={1}
                >
                  <Box
                    sx={{
                      width: 36,
                      height: 36,
                      borderRadius: "50%",
                      bgcolor: theme.palette.primary.main,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Typography variant="body1" fontWeight={700} color="white">
                      C
                    </Typography>
                  </Box>
                  <Typography variant="h4" fontWeight={700} color="primary">
                    {destination.price.toLocaleString()}
                  </Typography>
                </Stack>
                <Typography
                  variant="caption"
                  color="text.secondary"
                  sx={{ mt: 1, display: "block" }}
                >
                  Coins required per student
                </Typography>
              </Box>

              {/* Test Information */}
              <Box sx={{ mb: 3 }}>
                <Typography variant="h6" fontWeight={700} sx={{ mb: 1 }}>
                  Talent Test Required
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 3, lineHeight: 1.6 }}
                >
                  Pass the talent test to qualify for this educational tour.
                  Demonstrate your knowledge and earn your spot!
                </Typography>

                <Stack spacing={1.5}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                    <IconClock size={20} color={theme.palette.primary.main} />
                    <Box>
                      <Typography variant="body2" fontWeight={600}>
                        45 minutes
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        Test Duration
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                    <IconAward size={20} color={theme.palette.primary.main} />
                    <Box>
                      <Typography variant="body2" fontWeight={600}>
                        75% or higher
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        Passing Score
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                    <IconCheck size={20} color={theme.palette.primary.main} />
                    <Box>
                      <Typography variant="body2" fontWeight={600}>
                        Multiple choice & Essay
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        Question Type
                      </Typography>
                    </Box>
                  </Box>
                </Stack>
              </Box>

              {/* Start Test Button */}
              <Button
                fullWidth
                variant="contained"
                size="large"
                onClick={() => setTestOpen(true)}
                sx={{
                  textTransform: "none",
                  fontWeight: 700,
                  py: 1.5,
                  mb: 2,
                  borderRadius: 2,
                }}
              >
                Start Talent Test
              </Button>

              <Typography
                variant="caption"
                color="text.secondary"
                sx={{ display: "block", textAlign: "center", mb: 3 }}
              >
                Test your knowledge before joining the tour
              </Typography>

              <Divider sx={{ my: 2 }} />

              {/* Benefits */}
              <Typography variant="subtitle2" fontWeight={600} sx={{ mb: 2 }}>
                Why Take This Test?
              </Typography>
              <Stack spacing={1.5}>
                <Box sx={{ display: "flex", alignItems: "start", gap: 1.5 }}>
                  <IconShieldCheck
                    size={18}
                    color={theme.palette.primary.main}
                    style={{ marginTop: 2 }}
                  />
                  <Typography
                    variant="caption"
                    color="text.secondary"
                    sx={{ lineHeight: 1.6 }}
                  >
                    Ensure you're prepared for the tour content
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "start", gap: 1.5 }}>
                  <IconAward
                    size={18}
                    color={theme.palette.primary.main}
                    style={{ marginTop: 2 }}
                  />
                  <Typography
                    variant="caption"
                    color="text.secondary"
                    sx={{ lineHeight: 1.6 }}
                  >
                    Earn a certification upon completion
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "start", gap: 1.5 }}>
                  <IconUsers
                    size={18}
                    color={theme.palette.primary.main}
                    style={{ marginTop: 2 }}
                  />
                  <Typography
                    variant="caption"
                    color="text.secondary"
                    sx={{ lineHeight: 1.6 }}
                  >
                    Join a community of qualified learners
                  </Typography>
                </Box>
              </Stack>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      {/* Talent Test Dialog */}
      <TalentTest
        open={testOpen}
        onClose={() => setTestOpen(false)}
        destinationTitle={destination.title}
      />
    </Box>
  );
});

DestinationDetail.displayName = "DestinationDetail";

export default DestinationDetail;
