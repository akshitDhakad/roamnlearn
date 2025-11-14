import { memo } from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
  Container,
  Stack,
  useTheme,
  alpha,
  Divider,
  Paper,
} from "@mui/material";
import {
  IconMapPin,
  IconUsers,
  IconAward,
  IconWorld,
  IconSchool,
  IconStar,
  IconShield,
  IconHeart,
  IconClock,
  IconArrowRight,
  IconPlayerPlay,
  IconSparkles,
  IconCheckbox,
} from "@tabler/icons-react";
import { APP_NAME } from "../../constants/constants";

/**
 * Modern home page component for educational tour website
 * Features 6 comprehensive sections with contemporary, card-free design
 *
 * @component
 */
const Home = memo(() => {
  const theme = useTheme();

  // Featured tours data
  const featuredTours = [
    {
      id: 1,
      title: "Historical Europe Discovery",
      category: "Cultural Tours",
      duration: "10 days",
      price: "$2,499",
      rating: 4.9,
      reviews: 234,
      image:
        "https://images.unsplash.com/photo-1762603784967-3b08e61ab04c?q=80&w=1073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Explore ancient civilizations and architectural marvels",
    },
    {
      id: 2,
      title: "Amazon Rainforest Adventure",
      category: "Adventure Tours",
      duration: "7 days",
      price: "$1,899",
      rating: 4.8,
      reviews: 189,
      image:
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=400&fit=crop",
      description: "Immerse yourself in nature's classroom",
    },
    {
      id: 3,
      title: "Tokyo Science & Technology",
      category: "Science & Nature",
      duration: "5 days",
      price: "$1,599",
      rating: 4.9,
      reviews: 312,
      image:
        "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600&h=400&fit=crop",
      description: "Discover innovation and cutting-edge technology",
    },
  ];

  return (
    <Box>
      {/* Section 1: Professional Hero Banner */}
      <Box
        sx={{
          position: "relative",
          minHeight: { xs: "700px", md: "650px" },
          bgcolor: "background.paper",
          overflow: "hidden",
          pt: { xs: 12, md: 8 },
          pb: { xs: 8, md: 6 },
        }}
      >
        {/* Background Pattern */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0.03,
            background: `repeating-linear-gradient(
              45deg,
              ${theme.palette.primary.main},
              ${theme.palette.primary.main} 2px,
              transparent 2px,
              transparent 20px
            )`,
            zIndex: 0,
          }}
        />

        {/* Subtle gradient blobs */}
        <Box
          sx={{
            position: "absolute",
            top: "-20%",
            right: "-10%",
            width: "50%",
            height: "80%",
            borderRadius: "50%",
            background: `radial-gradient(circle, ${alpha(
              theme.palette.primary.main,
              0.08
            )} 0%, transparent 70%)`,
            filter: "blur(60px)",
            zIndex: 0,
          }}
        />
        <Box
          sx={{
            position: "absolute",
            bottom: "-20%",
            left: "-10%",
            width: "40%",
            height: "70%",
            borderRadius: "50%",
            background: `radial-gradient(circle, ${alpha(
              theme.palette.secondary.main,
              0.08
            )} 0%, transparent 70%)`,
            filter: "blur(60px)",
            zIndex: 0,
          }}
        />

        <Container maxWidth="xl" sx={{ position: "relative", zIndex: 1 }}>
          <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
            {/* Left Content */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Box>
                {/* Small badge */}
                <Box
                  sx={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 1,
                    px: 2,
                    py: 0.75,
                    mb: 3,
                    bgcolor: alpha(theme.palette.primary.main, 0.08),
                    borderRadius: 10,
                    border: `1px solid ${alpha(
                      theme.palette.primary.main,
                      0.12
                    )}`,
                  }}
                >
                  <IconSparkles
                    size={16}
                    color={theme.palette.primary.main}
                    stroke={2.5}
                  />
                  <Typography
                    variant="caption"
                    sx={{
                      color: theme.palette.primary.main,
                      fontWeight: 700,
                      fontSize: "0.75rem",
                      letterSpacing: 0.5,
                      textTransform: "uppercase",
                    }}
                  >
                    Welcome to {APP_NAME}
                  </Typography>
                </Box>

                {/* Main Heading */}
                <Typography
                  variant="h1"
                  sx={{
                    fontWeight: 800,
                    fontSize: { xs: "2.5rem", sm: "3rem", md: "3.5rem" },
                    lineHeight: 1.2,
                    letterSpacing: "-0.02em",
                    mb: 3,
                    color: "text.primary",
                  }}
                >
                  Explore the World
                  <br />
                  Through{" "}
                  <Box
                    component="span"
                    sx={{
                      color: theme.palette.primary.main,
                      position: "relative",
                      display: "inline-block",
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        left: 0,
                        bottom: 4,
                        width: "100%",
                        height: 12,
                        bgcolor: alpha(theme.palette.primary.main, 0.15),
                        zIndex: -1,
                        borderRadius: 1,
                      },
                    }}
                  >
                    Educational Tours
                  </Box>
                </Typography>

                {/* Subtitle */}
                <Typography
                  variant="h6"
                  sx={{
                    color: "text.secondary",
                    fontWeight: 400,
                    lineHeight: 1.7,
                    mb: 4,
                    maxWidth: 520,
                    fontSize: { xs: "1rem", md: "1.1rem" },
                  }}
                >
                  Transform your learning journey through immersive educational
                  experiences across 50+ countries. Discover culture, history,
                  and knowledge with expert guides.
                </Typography>

                {/* CTA Buttons */}
                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  spacing={2}
                  sx={{ mb: 5 }}
                >
                  <Button
                    variant="contained"
                    size="large"
                    endIcon={<IconArrowRight size={20} />}
                    sx={{
                      px: 4,
                      py: 1.8,
                      fontSize: "1rem",
                      fontWeight: 600,
                      borderRadius: 2,
                      textTransform: "none",
                      boxShadow: `0 4px 14px ${alpha(
                        theme.palette.primary.main,
                        0.3
                      )}`,
                      "&:hover": {
                        boxShadow: `0 6px 20px ${alpha(
                          theme.palette.primary.main,
                          0.4
                        )}`,
                        transform: "translateY(-2px)",
                      },
                      transition: "all 0.3s ease",
                    }}
                  >
                    Browse Tours
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    startIcon={<IconPlayerPlay size={20} />}
                    sx={{
                      px: 4,
                      py: 1.8,
                      fontSize: "1rem",
                      fontWeight: 600,
                      borderRadius: 2,
                      textTransform: "none",
                      borderWidth: 2,
                      "&:hover": {
                        borderWidth: 2,
                        transform: "translateY(-2px)",
                      },
                      transition: "all 0.3s ease",
                    }}
                  >
                    How It Works
                  </Button>
                </Stack>

                {/* Trust Indicators */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 3,
                    flexWrap: "wrap",
                  }}
                >
                  <Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 0.5,
                        mb: 0.5,
                      }}
                    >
                      {[1, 2, 3, 4, 5].map((star) => (
                        <IconStar
                          key={star}
                          size={16}
                          fill={theme.palette.warning.main}
                          color={theme.palette.warning.main}
                        />
                      ))}
                    </Box>
                    <Typography
                      variant="caption"
                      color="text.secondary"
                      fontWeight={500}
                    >
                      4.9/5 from 2,500+ reviews
                    </Typography>
                  </Box>
                  <Divider
                    orientation="vertical"
                    flexItem
                    sx={{ height: 35 }}
                  />
                  <Box>
                    <Typography
                      variant="h6"
                      fontWeight={700}
                      sx={{ lineHeight: 1 }}
                    >
                      15,000+
                    </Typography>
                    <Typography
                      variant="caption"
                      color="text.secondary"
                      fontWeight={500}
                    >
                      Happy travelers
                    </Typography>
                  </Box>
                  <Divider
                    orientation="vertical"
                    flexItem
                    sx={{ height: 35 }}
                  />
                  <Box>
                    <Typography
                      variant="h6"
                      fontWeight={700}
                      sx={{ lineHeight: 1 }}
                    >
                      50+
                    </Typography>
                    <Typography
                      variant="caption"
                      color="text.secondary"
                      fontWeight={500}
                    >
                      Destinations
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>

            {/* Right Side - Image Composition */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                sx={{
                  position: "relative",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {/* Main Image */}
                <Box
                  sx={{
                    position: "relative",
                    width: "100%",
                    maxWidth: 800,
                    aspectRatio: "4/3",
                  }}
                >
                  <Box
                    component="img"
                    src="https://plus.unsplash.com/premium_photo-1677829177642-30def98b0963?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D0"
                    alt="Students learning together"
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: 3,
                      border: `6px solid ${theme.palette.background.paper}`,
                      boxShadow: `0 20px 60px ${alpha("#000000", 0.15)}`,
                    }}
                  />

                  {/* Floating Stats Card - Bottom Left */}
                  <Paper
                    elevation={0}
                    sx={{
                      position: "absolute",
                      bottom: -20,
                      left: -20,
                      px: 3,
                      py: 2,
                      bgcolor: "background.paper",
                      borderRadius: 2,
                      boxShadow: `0 12px 40px ${alpha("#000000", 0.12)}`,
                      border: `1px solid ${theme.palette.divider}`,
                      display: { xs: "none", sm: "block" },
                    }}
                  >
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                      <Box
                        sx={{
                          width: 48,
                          height: 48,
                          borderRadius: 2,
                          bgcolor: alpha(theme.palette.primary.main, 0.1),
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: theme.palette.primary.main,
                        }}
                      >
                        <IconWorld size={24} stroke={2} />
                      </Box>
                      <Box>
                        <Typography
                          variant="h6"
                          fontWeight={700}
                          sx={{ lineHeight: 1.2 }}
                        >
                          50+
                        </Typography>
                        <Typography
                          variant="caption"
                          color="text.secondary"
                          fontWeight={500}
                        >
                          Countries
                        </Typography>
                      </Box>
                    </Box>
                  </Paper>

                  {/* Floating Badge - Top Right */}
                  <Paper
                    elevation={0}
                    sx={{
                      position: "absolute",
                      top: -15,
                      right: -15,
                      px: 2.5,
                      py: 1.5,
                      bgcolor: theme.palette.primary.main,
                      color: "white",
                      borderRadius: 2,
                      boxShadow: `0 12px 40px ${alpha(
                        theme.palette.primary.main,
                        0.3
                      )}`,
                      display: { xs: "none", sm: "flex" },
                      alignItems: "center",
                      gap: 1,
                    }}
                  >
                    <IconAward size={20} stroke={2.5} />
                    <Box>
                      <Typography
                        variant="caption"
                        fontWeight={700}
                        sx={{ lineHeight: 1 }}
                      >
                        Certified
                      </Typography>
                      <Typography
                        variant="caption"
                        sx={{ fontSize: "0.65rem", opacity: 0.9 }}
                      >
                        Programs
                      </Typography>
                    </Box>
                  </Paper>
                </Box>

                {/* Secondary Image - Overlapping */}
                <Box
                  sx={{
                    position: "absolute",
                    bottom: { xs: -30, md: -40 },
                    right: { xs: -20, md: -40 },
                    width: { xs: "45%", md: "50%" },
                    aspectRatio: "3/4",
                    display: { xs: "none", md: "block" },
                  }}
                >
                  <Box
                    component="img"
                    src="https://images.unsplash.com/photo-1720260990556-f72a4fdadbf3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Educational tour experience"
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: 3,
                      border: `6px solid`,
                      borderColor: "background.paper",
                      boxShadow: `0 20px 60px ${alpha("#000000", 0.15)}`,
                    }}
                  />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Section 2: About with Asymmetric Layout */}
      <Box sx={{ py: { xs: 8, md: 12 }, overflow: "hidden" }}>
        <Container maxWidth="xl">
          <Grid container spacing={8} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }} sx={{ order: { xs: 2, md: 1 } }}>
              <Box sx={{ position: "relative" }}>
                {/* Background decorative element */}
                <Box
                  sx={{
                    position: "absolute",
                    top: -40,
                    left: -40,
                    width: 200,
                    height: 200,
                    borderRadius: "50%",
                    background: `linear-gradient(135deg, ${alpha(
                      theme.palette.primary.main,
                      0.1
                    )}, ${alpha(theme.palette.secondary.main, 0.1)})`,
                    zIndex: 0,
                  }}
                />

                {/* Main image with overlapping secondary image */}
                <Box sx={{ position: "relative", zIndex: 1 }}>
                  <Box
                    component="img"
                    src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop"
                    alt="Students learning"
                    sx={{
                      width: "100%",
                      height: "auto",
                      borderRadius: 3,
                      boxShadow: `0 16px 48px ${alpha("#000000", 0.15)}`,
                    }}
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: -30,
                      right: -30,
                      width: "50%",
                      zIndex: 2,
                      display: { xs: "none", md: "block" },
                    }}
                  >
                    <Box
                      component="img"
                      src="https://plus.unsplash.com/premium_photo-1702220976033-50f47c7a58a6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="Educational activity"
                      sx={{
                        width: "100%",
                        height: "auto",
                        borderRadius: 3,
                        border: `6px solid white`,
                        boxShadow: `0 12px 32px ${alpha("#000000", 0.2)}`,
                      }}
                    />
                  </Box>
                </Box>
              </Box>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }} sx={{ order: { xs: 1, md: 2 } }}>
              <Box sx={{ pl: { md: 4 } }}>
                <Typography
                  variant="overline"
                  sx={{
                    color: theme.palette.primary.main,
                    fontWeight: 700,
                    letterSpacing: 2,
                    mb: 2,
                    display: "block",
                  }}
                >
                  About {APP_NAME}
                </Typography>
                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: 800,
                    mb: 3,
                    fontSize: { xs: "2rem", md: "3rem" },
                    lineHeight: 1.2,
                  }}
                >
                  Learn Through Adventure & Discovery
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ mb: 3, lineHeight: 1.8, fontSize: "1.1rem" }}
                >
                  We believe that the best education happens when you step
                  outside the classroom. Our carefully designed tours combine
                  hands-on learning with cultural immersion, creating
                  experiences that inspire, educate, and transform.
                </Typography>

                {/* Feature list */}
                <Stack spacing={2} sx={{ mb: 4 }}>
                  {[
                    "Expert-led educational programs",
                    "Immersive cultural experiences",
                    "Safety-first approach with 24/7 support",
                    "Certified learning outcomes",
                  ].map((feature, index) => (
                    <Box
                      key={index}
                      sx={{ display: "flex", alignItems: "center", gap: 1.5 }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: 24,
                          height: 24,
                          borderRadius: "50%",
                          bgcolor: alpha(theme.palette.primary.main, 0.1),
                          color: theme.palette.primary.main,
                          flexShrink: 0,
                        }}
                      >
                        <IconCheckbox size={16} />
                      </Box>
                      <Typography variant="body1" fontWeight={500}>
                        {feature}
                      </Typography>
                    </Box>
                  ))}
                </Stack>

                <Button
                  variant="contained"
                  size="large"
                  endIcon={<IconArrowRight size={20} />}
                  sx={{
                    px: 4,
                    py: 1.5,
                    fontSize: "1rem",
                    fontWeight: 600,
                    borderRadius: 2,
                  }}
                >
                  Learn More About Us
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Section 3: Modern Destinations Showcase */}
      <Box
        sx={{
          py: { xs: 8, md: 12 },
          position: "relative",
          overflow: "hidden",
          background: `linear-gradient(180deg, ${alpha(
            theme.palette.primary.main,
            0.02
          )} 0%, transparent 50%, ${alpha(
            theme.palette.secondary.main,
            0.02
          )} 100%)`,
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", mb: 8 }}>
            <Typography
              variant="overline"
              sx={{
                color: theme.palette.primary.main,
                fontWeight: 700,
                letterSpacing: 2,
                mb: 2,
                display: "block",
              }}
            >
              Popular Destinations
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 800,
                mb: 2,
                fontSize: { xs: "2rem", md: "2.75rem" },
              }}
            >
              Explore the World with Us
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ maxWidth: 600, mx: "auto" }}
            >
              Discover our handpicked destinations across the globe, each
              offering unique educational experiences
            </Typography>
          </Box>

          {/* Horizontal Layout with Side Images */}
          <Grid container spacing={4} alignItems="center" sx={{ mb: 6 }}>
            {/* Left Featured Image */}
            <Grid
              size={{ xs: 12, md: 3 }}
              sx={{ display: { xs: "none", md: "block" } }}
            >
              <Paper
                elevation={0}
                sx={{
                  position: "relative",
                  height: 500,
                  borderRadius: 4,
                  overflow: "hidden",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: `0 20px 60px ${alpha(
                      theme.palette.primary.main,
                      0.3
                    )}`,
                    "& .feature-image": {
                      transform: "scale(1.1)",
                    },
                  },
                }}
              >
                <Box
                  className="feature-image"
                  component="img"
                  src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=600&h=800&fit=crop&q=80"
                  alt="Paris"
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.4s ease",
                  }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: `linear-gradient(to top, ${alpha(
                      "#000000",
                      0.7
                    )} 0%, transparent 60%)`,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    p: 3,
                    color: "white",
                  }}
                >
                  <Typography variant="h4" fontWeight={700} sx={{ mb: 1 }}>
                    Paris
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 1, opacity: 0.9 }}>
                    France
                  </Typography>
                  <Box
                    sx={{
                      display: "inline-flex",
                      px: 2,
                      py: 0.75,
                      bgcolor: alpha("#ffffff", 0.2),
                      backdropFilter: "blur(10px)",
                      borderRadius: 10,
                      width: "fit-content",
                    }}
                  >
                    <Typography variant="caption" fontWeight={600}>
                      12 Tours Available
                    </Typography>
                  </Box>
                </Box>
              </Paper>
            </Grid>

            {/* Center Circle with Destinations */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                sx={{
                  position: "relative",
                  height: { xs: 400, md: 500 },
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {[
                  {
                    name: "Tokyo",
                    country: "Japan",
                    tours: "10 Tours",
                    image:
                      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600&h=600&fit=crop&q=80",
                    color: theme.palette.secondary.main,
                    rotation: 0,
                  },
                  {
                    name: "Rome",
                    country: "Italy",
                    tours: "8 Tours",
                    image:
                      "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=600&h=600&fit=crop&q=80",
                    color: "#2e7d32",
                    rotation: 90,
                  },
                  {
                    name: "London",
                    country: "UK",
                    tours: "9 Tours",
                    image:
                      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&h=600&fit=crop&q=80",
                    color: "#0288d1",
                    rotation: 180,
                  },
                  {
                    name: "Barcelona",
                    country: "Spain",
                    tours: "7 Tours",
                    image:
                      "https://images.unsplash.com/photo-1583422409516-2895a77efded?w=600&h=600&fit=crop&q=80",
                    color: "#d32f2f",
                    rotation: 270,
                  },
                ].map((destination, index) => {
                  const angle = (destination.rotation * Math.PI) / 180;
                  const radius = 140;
                  const x = Math.cos(angle) * radius;
                  const y = Math.sin(angle) * radius;

                  return (
                    <Box
                      key={index}
                      sx={{
                        position: "absolute",
                        left: `calc(50% + ${x}px)`,
                        top: `calc(50% + ${y}px)`,
                        transform: "translate(-50%, -50%)",
                        transition: "all 0.4s ease",
                        zIndex: 1,
                        "&:hover": {
                          zIndex: 10,
                          transform: `translate(-50%, -50%) scale(1.15)`,
                          "& .destination-card": {
                            boxShadow: `0 20px 60px ${alpha(
                              destination.color,
                              0.4
                            )}`,
                          },
                        },
                      }}
                    >
                      <Paper
                        className="destination-card"
                        elevation={0}
                        sx={{
                          width: { xs: 120, md: 160 },
                          height: { xs: 120, md: 160 },
                          borderRadius: "50%",
                          overflow: "hidden",
                          position: "relative",
                          cursor: "pointer",
                          border: `4px solid white`,
                          boxShadow: `0 12px 40px ${alpha(
                            destination.color,
                            0.2
                          )}`,
                          transition: "all 0.4s ease",
                        }}
                      >
                        <Box
                          component="img"
                          src={destination.image}
                          alt={destination.name}
                          sx={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                        />
                        <Box
                          sx={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            bgcolor: alpha(destination.color, 0.7),
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "white",
                            opacity: 0,
                            transition: "opacity 0.3s ease",
                            "&:hover": {
                              opacity: 1,
                            },
                          }}
                        >
                          <Typography
                            variant="h6"
                            fontWeight={700}
                            sx={{
                              mb: 0.5,
                              fontSize: { xs: "0.9rem", md: "1.1rem" },
                            }}
                          >
                            {destination.name}
                          </Typography>
                          <Typography
                            variant="caption"
                            sx={{
                              mb: 1,
                              fontSize: { xs: "0.65rem", md: "0.8rem" },
                            }}
                          >
                            {destination.country}
                          </Typography>
                          <Typography
                            variant="caption"
                            sx={{
                              px: 1.5,
                              py: 0.5,
                              bgcolor: alpha("#ffffff", 0.3),
                              borderRadius: 10,
                              fontSize: { xs: "0.6rem", md: "0.7rem" },
                            }}
                          >
                            {destination.tours}
                          </Typography>
                        </Box>
                      </Paper>
                    </Box>
                  );
                })}

                {/* Center Circle */}
                <Box
                  sx={{
                    position: "absolute",
                    left: "50%",
                    top: "50%",
                    transform: "translate(-50%, -50%)",
                    width: { xs: 120, md: 180 },
                    height: { xs: 120, md: 180 },
                    borderRadius: "50%",
                    background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    boxShadow: `0 12px 40px ${alpha(
                      theme.palette.primary.main,
                      0.3
                    )}`,
                    zIndex: 2,
                    border: "6px solid white",
                  }}
                >
                  <IconWorld size={40} stroke={2} />
                  <Typography
                    variant="h4"
                    fontWeight={800}
                    sx={{ mt: 1, fontSize: { xs: "1.5rem", md: "2rem" } }}
                  >
                    50+
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: { xs: "0.75rem", md: "0.875rem" },
                      fontWeight: 600,
                    }}
                  >
                    Countries
                  </Typography>
                </Box>
              </Box>
            </Grid>

            {/* Right Featured Image */}
            <Grid
              size={{ xs: 12, md: 3 }}
              sx={{ display: { xs: "none", md: "block" } }}
            >
              <Paper
                elevation={0}
                sx={{
                  position: "relative",
                  height: 500,
                  borderRadius: 4,
                  overflow: "hidden",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: `0 20px 60px ${alpha(
                      theme.palette.secondary.main,
                      0.3
                    )}`,
                    "& .feature-image": {
                      transform: "scale(1.1)",
                    },
                  },
                }}
              >
                <Box
                  className="feature-image"
                  component="img"
                  src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600&h=800&fit=crop&q=80"
                  alt="Tokyo"
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.4s ease",
                  }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: `linear-gradient(to top, ${alpha(
                      "#000000",
                      0.7
                    )} 0%, transparent 60%)`,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    p: 3,
                    color: "white",
                  }}
                >
                  <Typography variant="h4" fontWeight={700} sx={{ mb: 1 }}>
                    Tokyo
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 1, opacity: 0.9 }}>
                    Japan
                  </Typography>
                  <Box
                    sx={{
                      display: "inline-flex",
                      px: 2,
                      py: 0.75,
                      bgcolor: alpha("#ffffff", 0.2),
                      backdropFilter: "blur(10px)",
                      borderRadius: 10,
                      width: "fit-content",
                    }}
                  >
                    <Typography variant="caption" fontWeight={600}>
                      10 Tours Available
                    </Typography>
                  </Box>
                </Box>
              </Paper>
            </Grid>
          </Grid>

          {/* Bottom Cards Row */}
          <Grid container spacing={3}>
            {[
              {
                name: "Historical Tours",
                count: "25+ Tours",
                image:
                  "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400&h=300&fit=crop&q=80",
                icon: IconSchool,
              },
              {
                name: "Nature & Wildlife",
                count: "18+ Tours",
                image:
                  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop&q=80",
                icon: IconHeart,
              },
              {
                name: "Cultural Experience",
                count: "30+ Tours",
                image:
                  "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=400&h=300&fit=crop&q=80",
                icon: IconUsers,
              },
            ].map((category, index) => (
              <Grid size={{ xs: 12, sm: 4 }} key={index}>
                <Paper
                  elevation={0}
                  sx={{
                    position: "relative",
                    height: 280,
                    borderRadius: 3,
                    overflow: "hidden",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: `0 20px 60px ${alpha(
                        theme.palette.primary.main,
                        0.15
                      )}`,
                      "& .category-image": {
                        transform: "scale(1.1)",
                      },
                    },
                  }}
                >
                  <Box
                    className="category-image"
                    component="img"
                    src={category.image}
                    alt={category.name}
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform 0.4s ease",
                    }}
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: `linear-gradient(to top, ${alpha(
                        "#000000",
                        0.8
                      )} 0%, transparent 60%)`,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-end",
                      p: 3,
                      color: "white",
                    }}
                  >
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        borderRadius: 2,
                        bgcolor: alpha("#ffffff", 0.2),
                        backdropFilter: "blur(10px)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mb: 2,
                      }}
                    >
                      <category.icon size={24} />
                    </Box>
                    <Typography variant="h5" fontWeight={700} sx={{ mb: 0.5 }}>
                      {category.name}
                    </Typography>
                    <Typography variant="body2" sx={{ opacity: 0.9 }}>
                      {category.count}
                    </Typography>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>

          <Box sx={{ textAlign: "center", mt: 6 }}>
            <Button
              variant="contained"
              size="large"
              endIcon={<IconArrowRight size={20} />}
              sx={{
                px: 5,
                py: 2,
                fontSize: "1rem",
                fontWeight: 600,
                borderRadius: 2,
                textTransform: "none",
                boxShadow: `0 8px 24px ${alpha(
                  theme.palette.primary.main,
                  0.3
                )}`,
                "&:hover": {
                  transform: "translateY(-2px)",
                  boxShadow: `0 12px 32px ${alpha(
                    theme.palette.primary.main,
                    0.4
                  )}`,
                },
                transition: "all 0.3s ease",
              }}
            >
              Explore All Destinations
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Section 4: Featured Tours - Image-First Design */}
      <Box
        sx={{
          bgcolor: alpha(theme.palette.primary.main, 0.02),
          py: { xs: 8, md: 12 },
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", mb: 8 }}>
            <Typography
              variant="overline"
              sx={{
                color: theme.palette.primary.main,
                fontWeight: 700,
                letterSpacing: 2,
                mb: 2,
                display: "block",
              }}
            >
              Explore Destinations
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 800,
                mb: 2,
                fontSize: { xs: "2rem", md: "3rem" },
              }}
            >
              Featured Educational Tours
            </Typography>
            <Typography
              variant="h6"
              color="text.secondary"
              sx={{ maxWidth: 600, mx: "auto", fontWeight: 400 }}
            >
              Discover our most popular tours designed to inspire learning and
              create lasting memories
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {featuredTours.map((tour, index) => (
              <Grid size={{ xs: 12, md: index === 0 ? 12 : 6 }} key={tour.id}>
                <Box
                  sx={{
                    position: "relative",
                    height: index === 0 ? 500 : 400,
                    borderRadius: 3,
                    overflow: "hidden",
                    cursor: "pointer",
                    transition: "all 0.4s ease",
                    "&:hover": {
                      transform: "scale(1.02)",
                      "& .tour-overlay": {
                        opacity: 1,
                      },
                      "& .tour-image": {
                        transform: "scale(1.1)",
                      },
                    },
                  }}
                >
                  {/* Background Image */}
                  <Box
                    className="tour-image"
                    component="img"
                    src={tour.image}
                    alt={tour.title}
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform 0.4s ease",
                    }}
                  />

                  {/* Gradient Overlay */}
                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: `linear-gradient(to top, ${alpha(
                        "#000000",
                        0.8
                      )} 0%, ${alpha("#000000", 0.3)} 50%, ${alpha(
                        "#000000",
                        0.1
                      )} 100%)`,
                    }}
                  />

                  {/* Content */}
                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      p: 4,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      color: "white",
                      zIndex: 1,
                    }}
                  >
                    {/* Top badges */}
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                      }}
                    >
                      <Box
                        sx={{
                          px: 2,
                          py: 0.75,
                          bgcolor: alpha("#ffffff", 0.2),
                          backdropFilter: "blur(10px)",
                          borderRadius: 10,
                          fontSize: "0.875rem",
                          fontWeight: 600,
                        }}
                      >
                        {tour.category}
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 0.5,
                          px: 1.5,
                          py: 0.75,
                          bgcolor: alpha("#FFD700", 0.95),
                          color: "#000",
                          borderRadius: 10,
                          fontWeight: 600,
                          fontSize: "0.875rem",
                        }}
                      >
                        <IconStar size={16} fill="#000" />
                        {tour.rating}
                      </Box>
                    </Box>

                    {/* Bottom content */}
                    <Box>
                      <Typography
                        variant={index === 0 ? "h3" : "h4"}
                        sx={{
                          fontWeight: 700,
                          mb: 1.5,
                          fontSize:
                            index === 0
                              ? { xs: "2rem", md: "2.5rem" }
                              : { xs: "1.5rem", md: "2rem" },
                        }}
                      >
                        {tour.title}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{ mb: 2.5, opacity: 0.95, lineHeight: 1.6 }}
                      >
                        {tour.description}
                      </Typography>

                      {/* Info row */}
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          flexWrap: "wrap",
                          gap: 2,
                        }}
                      >
                        <Box sx={{ display: "flex", gap: 3 }}>
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              gap: 0.75,
                            }}
                          >
                            <IconClock size={20} />
                            <Typography variant="body2" fontWeight={500}>
                              {tour.duration}
                            </Typography>
                          </Box>
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              gap: 0.75,
                            }}
                          >
                            <IconMapPin size={20} />
                            <Typography variant="body2" fontWeight={500}>
                              Multiple Locations
                            </Typography>
                          </Box>
                        </Box>

                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 2,
                          }}
                        >
                          <Typography
                            variant="h5"
                            sx={{ fontWeight: 700, fontSize: "1.5rem" }}
                          >
                            {tour.price}
                          </Typography>
                          <Button
                            variant="contained"
                            size="small"
                            endIcon={<IconArrowRight size={18} />}
                            sx={{
                              bgcolor: "white",
                              color: theme.palette.primary.main,
                              px: 3,
                              py: 1,
                              fontWeight: 600,
                              "&:hover": {
                                bgcolor: alpha("#ffffff", 0.9),
                              },
                            }}
                          >
                            View Details
                          </Button>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>

          <Box sx={{ textAlign: "center", mt: 6 }}>
            <Button
              variant="outlined"
              size="large"
              endIcon={<IconArrowRight size={20} />}
              sx={{
                px: 5,
                py: 1.5,
                fontSize: "1rem",
                fontWeight: 600,
                borderWidth: 2,
                borderRadius: 2,
                "&:hover": {
                  borderWidth: 2,
                  transform: "translateY(-2px)",
                },
                transition: "all 0.3s ease",
              }}
            >
              View All Tours
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Section 5: Student Testimonials */}

      {/* Section 6: Why Choose Us - Bento Box Grid */}
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography
            variant="overline"
            sx={{
              color: theme.palette.primary.main,
              fontWeight: 700,
              letterSpacing: 2,
              mb: 2,
              display: "block",
            }}
          >
            Why Choose Us
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              mb: 2,
              fontSize: { xs: "2rem", md: "3rem" },
            }}
          >
            What Makes Us Different
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ maxWidth: 700, mx: "auto", fontWeight: 400 }}
          >
            We're committed to providing exceptional educational experiences
            that combine learning, adventure, and cultural immersion
          </Typography>
        </Box>

        {/* Bento Box Grid */}
        <Grid container spacing={3}>
          {/* Feature 1 - Large */}
          <Grid size={{ xs: 12, md: 8 }}>
            <Paper
              elevation={0}
              sx={{
                p: 5,
                height: "100%",
                minHeight: 280,
                background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
                color: "white",
                borderRadius: 4,
                position: "relative",
                overflow: "hidden",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: `0 16px 40px ${alpha(
                    theme.palette.primary.main,
                    0.3
                  )}`,
                },
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: -50,
                  right: -50,
                  width: 200,
                  height: 200,
                  borderRadius: "50%",
                  background: alpha("#ffffff", 0.1),
                }}
              />
              <Box sx={{ position: "relative", zIndex: 1 }}>
                <Box
                  sx={{
                    display: "inline-flex",
                    p: 2,
                    borderRadius: 2,
                    bgcolor: alpha("#ffffff", 0.2),
                    mb: 3,
                  }}
                >
                  <IconShield size={48} stroke={1.5} />
                </Box>
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 700,
                    mb: 2,
                    fontSize: { xs: "1.5rem", md: "2rem" },
                  }}
                >
                  Safety First
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ opacity: 0.95, lineHeight: 1.7, maxWidth: 500 }}
                >
                  Comprehensive safety protocols and 24/7 support for all
                  travelers. Your security and well-being are our top priorities
                  on every journey.
                </Typography>
              </Box>
            </Paper>
          </Grid>

          {/* Feature 2 - Medium */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Paper
              elevation={0}
              sx={{
                p: 4,
                height: "100%",
                minHeight: 280,
                background: alpha(theme.palette.secondary.main, 0.05),
                border: `2px solid ${alpha(theme.palette.secondary.main, 0.1)}`,
                borderRadius: 4,
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-4px)",
                  borderColor: theme.palette.secondary.main,
                  boxShadow: `0 8px 24px ${alpha(
                    theme.palette.secondary.main,
                    0.15
                  )}`,
                },
              }}
            >
              <Box
                sx={{
                  display: "inline-flex",
                  p: 2,
                  borderRadius: 2,
                  bgcolor: alpha(theme.palette.secondary.main, 0.1),
                  color: theme.palette.secondary.main,
                  mb: 3,
                }}
              >
                <IconSchool size={48} stroke={1.5} />
              </Box>
              <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                Expert Guides
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ lineHeight: 1.7 }}
              >
                Learn from certified educators and local experts passionate
                about sharing knowledge
              </Typography>
            </Paper>
          </Grid>

          {/* Feature 3 - Medium */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Paper
              elevation={0}
              sx={{
                p: 4,
                height: "100%",
                minHeight: 240,
                background: alpha("#2e7d32", 0.05),
                border: `2px solid ${alpha("#2e7d32", 0.1)}`,
                borderRadius: 4,
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-4px)",
                  borderColor: "#2e7d32",
                  boxShadow: `0 8px 24px ${alpha("#2e7d32", 0.15)}`,
                },
              }}
            >
              <Box
                sx={{
                  display: "inline-flex",
                  p: 2,
                  borderRadius: 2,
                  bgcolor: alpha("#2e7d32", 0.1),
                  color: "#2e7d32",
                  mb: 3,
                }}
              >
                <IconHeart size={48} stroke={1.5} />
              </Box>
              <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                Authentic Experiences
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ lineHeight: 1.7 }}
              >
                Immerse yourself in local culture with carefully curated
                educational activities
              </Typography>
            </Paper>
          </Grid>

          {/* Feature 4 - Large Horizontal */}
          <Grid size={{ xs: 12, md: 8 }}>
            <Paper
              elevation={0}
              sx={{
                p: 4,
                height: "100%",
                minHeight: 240,
                background: alpha("#0288d1", 0.05),
                border: `2px solid ${alpha("#0288d1", 0.1)}`,
                borderRadius: 4,
                display: "flex",
                alignItems: "center",
                gap: 4,
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-4px)",
                  borderColor: "#0288d1",
                  boxShadow: `0 8px 24px ${alpha("#0288d1", 0.15)}`,
                },
              }}
            >
              <Box
                sx={{
                  display: { xs: "none", sm: "inline-flex" },
                  p: 3,
                  borderRadius: 3,
                  bgcolor: alpha("#0288d1", 0.1),
                  color: "#0288d1",
                }}
              >
                <IconAward size={64} stroke={1.5} />
              </Box>
              <Box>
                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                  Certified Programs
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ lineHeight: 1.7 }}
                >
                  Earn certificates and recognition for your educational
                  journey. All our programs are accredited and recognized by
                  leading educational institutions worldwide.
                </Typography>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      <Box
        sx={{
          py: { xs: 8, md: 12 },
          background: `linear-gradient(180deg, ${alpha(
            theme.palette.primary.main,
            0.02
          )} 0%, transparent 100%)`,
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", mb: 6 }}>
            <Typography
              variant="overline"
              sx={{
                color: theme.palette.primary.main,
                fontWeight: 700,
                letterSpacing: 2,
                mb: 2,
                display: "block",
              }}
            >
              Testimonials
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 800,
                mb: 2,
                fontSize: { xs: "2rem", md: "2.75rem" },
              }}
            >
              What Our Students Say
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ maxWidth: 600, mx: "auto" }}
            >
              Real experiences from students who transformed their learning
              through our educational tours
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {[
              {
                name: "Sarah Johnson",
                role: "High School Student",
                image:
                  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&q=80",
                quote:
                  "The Paris history tour completely changed how I see the world. Learning about ancient civilizations while standing in front of them is unforgettable!",
                rating: 5,
                tour: "European History Tour",
              },
              {
                name: "Michael Chen",
                role: "University Student",
                image:
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&q=80",
                quote:
                  "An incredible educational experience! The guides were knowledgeable and made every moment engaging. Highly recommend to anyone looking to learn while traveling.",
                rating: 5,
                tour: "Asian Culture Tour",
              },
              {
                name: "Emma Williams",
                role: "Graduate Student",
                image:
                  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&q=80",
                quote:
                  "Best investment in my education! The hands-on learning approach and cultural immersion made this more valuable than any classroom experience.",
                rating: 5,
                tour: "Science & Nature Tour",
              },
            ].map((testimonial, index) => (
              <Grid size={{ xs: 12, md: 4 }} key={index}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    height: "100%",
                    borderRadius: 3,
                    border: `1px solid ${theme.palette.divider}`,
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: `0 12px 40px ${alpha(
                        theme.palette.primary.main,
                        0.12
                      )}`,
                    },
                  }}
                >
                  {/* Student Image & Info */}
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                      mb: 3,
                    }}
                  >
                    <Box
                      component="img"
                      src={testimonial.image}
                      alt={testimonial.name}
                      sx={{
                        width: 64,
                        height: 64,
                        borderRadius: "50%",
                        objectFit: "cover",
                        border: `3px solid ${alpha(
                          theme.palette.primary.main,
                          0.2
                        )}`,
                      }}
                    />
                    <Box>
                      <Typography
                        variant="h6"
                        fontWeight={700}
                        sx={{ lineHeight: 1.2, mb: 0.5 }}
                      >
                        {testimonial.name}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        {testimonial.role}
                      </Typography>
                    </Box>
                  </Box>

                  {/* Rating */}
                  <Box sx={{ display: "flex", gap: 0.5, mb: 2 }}>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <IconStar
                        key={i}
                        size={18}
                        fill={theme.palette.warning.main}
                        color={theme.palette.warning.main}
                      />
                    ))}
                  </Box>

                  {/* Quote */}
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{
                      mb: 3,
                      lineHeight: 1.7,
                      fontStyle: "italic",
                    }}
                  >
                    "{testimonial.quote}"
                  </Typography>

                  {/* Tour Badge */}
                  <Box
                    sx={{
                      display: "inline-flex",
                      px: 2,
                      py: 0.75,
                      bgcolor: alpha(theme.palette.primary.main, 0.08),
                      borderRadius: 10,
                      border: `1px solid ${alpha(
                        theme.palette.primary.main,
                        0.12
                      )}`,
                    }}
                  >
                    <Typography
                      variant="caption"
                      fontWeight={600}
                      color="primary"
                    >
                      {testimonial.tour}
                    </Typography>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>

          {/* Image Gallery Strip */}
          <Box sx={{ mt: 8 }}>
            <Grid container spacing={2}>
              {[
                "https://images.unsplash.com/photo-1761124739721-cfbb37231496?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&h=400&fit=crop&q=80",
                "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600&h=400&fit=crop&q=80",
                "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&h=400&fit=crop&q=80",
              ].map((image, index) => (
                <Grid size={{ xs: 6, md: 3 }} key={index}>
                  <Box
                    sx={{
                      position: "relative",
                      height: 200,
                      borderRadius: 2,
                      overflow: "hidden",
                      "&:hover": {
                        "& img": {
                          transform: "scale(1.1)",
                        },
                      },
                    }}
                  >
                    <Box
                      component="img"
                      src={image}
                      alt={`Student experience ${index + 1}`}
                      sx={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        border: `6px solid ${theme.palette.background.paper}`,
                        borderRadius: 3,
                        transition: "transform 0.3s ease",
                      }}
                    />
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>

      {/* Section 8: Modern Clean CTA */}
      <Box
        sx={{
          position: "relative",
          bgcolor: alpha(theme.palette.primary.main, 0.02),
          py: { xs: 6, md: 8 },
          overflow: "hidden",
        }}
      >
        {/* Background decoration */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "40%",
            height: "100%",
            background: `radial-gradient(circle at top right, ${alpha(
              theme.palette.primary.main,
              0.08
            )}, transparent 60%)`,
            pointerEvents: "none",
          }}
        />

        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          <Grid container spacing={4} alignItems="center">
            {/* Left side - Content */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Box>
                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: 800,
                    mb: 2.5,
                    fontSize: { xs: "2rem", md: "2.5rem" },
                    lineHeight: 1.2,
                  }}
                >
                  Ready to Start Your{" "}
                  <Box
                    component="span"
                    sx={{ color: theme.palette.primary.main }}
                  >
                    Learning Adventure?
                  </Box>
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{
                    mb: 4,
                    lineHeight: 1.7,
                    fontSize: "1.05rem",
                    maxWidth: 500,
                  }}
                >
                  Join thousands of learners exploring the world through our
                  educational tours. Discover new cultures, gain knowledge, and
                  create memories that last a lifetime.
                </Typography>

                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  spacing={2}
                  sx={{ mb: 4 }}
                >
                  <Button
                    variant="contained"
                    size="large"
                    endIcon={<IconArrowRight size={20} />}
                    sx={{
                      px: 4,
                      py: 1.8,
                      fontSize: "1rem",
                      fontWeight: 600,
                      borderRadius: 2,
                      textTransform: "none",
                      boxShadow: `0 4px 14px ${alpha(
                        theme.palette.primary.main,
                        0.3
                      )}`,
                      "&:hover": {
                        transform: "translateY(-2px)",
                        boxShadow: `0 6px 20px ${alpha(
                          theme.palette.primary.main,
                          0.4
                        )}`,
                      },
                      transition: "all 0.3s ease",
                    }}
                  >
                    Browse All Tours
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    sx={{
                      px: 4,
                      py: 1.8,
                      fontSize: "1rem",
                      fontWeight: 600,
                      borderWidth: 2,
                      borderRadius: 2,
                      textTransform: "none",
                      "&:hover": {
                        borderWidth: 2,
                        transform: "translateY(-2px)",
                      },
                      transition: "all 0.3s ease",
                    }}
                  >
                    Contact Us
                  </Button>
                </Stack>

                {/* Quick stats */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 3,
                    flexWrap: "wrap",
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Box
                      sx={{
                        width: 40,
                        height: 40,
                        borderRadius: 2,
                        bgcolor: alpha(theme.palette.primary.main, 0.1),
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: theme.palette.primary.main,
                      }}
                    >
                      <IconCheckbox size={20} />
                    </Box>
                    <Typography variant="body2" fontWeight={600}>
                      Flexible Booking
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Box
                      sx={{
                        width: 40,
                        height: 40,
                        borderRadius: 2,
                        bgcolor: alpha(theme.palette.primary.main, 0.1),
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: theme.palette.primary.main,
                      }}
                    >
                      <IconShield size={20} />
                    </Box>
                    <Typography variant="body2" fontWeight={600}>
                      24/7 Support
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Box
                      sx={{
                        width: 40,
                        height: 40,
                        borderRadius: 2,
                        bgcolor: alpha(theme.palette.primary.main, 0.1),
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: theme.palette.primary.main,
                      }}
                    >
                      <IconAward size={20} />
                    </Box>
                    <Typography variant="body2" fontWeight={600}>
                      Best Price
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>

            {/* Right side - Image */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                sx={{
                  position: "relative",
                  borderRadius: 3,
                  overflow: "hidden",
                  height: { xs: 300, md: 400 },
                }}
              >
                <Box
                  component="img"
                  src="https://images.unsplash.com/photo-1724398915427-edc535c546fe?q=80&w=1330&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Students on educational tour"
                  sx={{
                    width: "100%",
                    height: "100%",
                    border: `6px solid ${theme.palette.background.paper}`,
                    borderRadius: 3,
                    objectFit: "cover",
                  }}
                />

                {/* Overlay gradient */}
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: `linear-gradient(135deg, ${alpha(
                      theme.palette.primary.main,
                      0.15
                    )}, ${alpha(theme.palette.secondary.main, 0.15)})`,
                  }}
                />

                {/* Floating badge */}
                <Paper
                  elevation={0}
                  sx={{
                    position: "absolute",
                    top: 20,
                    right: 20,
                    px: 3,
                    py: 1.5,
                    bgcolor: "white",
                    borderRadius: 2,
                    boxShadow: `0 8px 24px ${alpha("#000000", 0.15)}`,
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                  }}
                >
                  <IconStar
                    size={20}
                    fill={theme.palette.warning.main}
                    color={theme.palette.warning.main}
                  />
                  <Box>
                    <Typography
                      variant="body2"
                      fontWeight={700}
                      sx={{ lineHeight: 1 }}
                    >
                      4.9/5.0
                    </Typography>
                    <Typography
                      variant="caption"
                      color="text.secondary"
                      sx={{ fontSize: "0.7rem" }}
                    >
                      2,500+ Reviews
                    </Typography>
                  </Box>
                </Paper>

                {/* Bottom stats bar */}
                <Paper
                  elevation={0}
                  sx={{
                    position: "absolute",
                    bottom: 20,
                    left: 20,
                    right: 20,
                    bgcolor: "white",
                    borderRadius: 2,
                    p: 2,
                    boxShadow: `0 8px 24px ${alpha("#000000", 0.15)}`,
                  }}
                >
                  <Grid container spacing={2}>
                    <Grid size={4}>
                      <Typography
                        variant="h5"
                        fontWeight={800}
                        color="primary"
                        sx={{ lineHeight: 1 }}
                      >
                        50+
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        Countries
                      </Typography>
                    </Grid>
                    <Grid size={4}>
                      <Typography
                        variant="h5"
                        fontWeight={800}
                        color="primary"
                        sx={{ lineHeight: 1 }}
                      >
                        15K+
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        Happy Travelers
                      </Typography>
                    </Grid>
                    <Grid size={4}>
                      <Typography
                        variant="h5"
                        fontWeight={800}
                        color="primary"
                        sx={{ lineHeight: 1 }}
                      >
                        15K+
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        Happy Travelers
                      </Typography>
                    </Grid>
                  </Grid>
                </Paper>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
});

Home.displayName = "Home";

export default Home;
