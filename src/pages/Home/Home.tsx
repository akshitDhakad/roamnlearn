import { memo } from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Container,
  Stack,
  useTheme,
  alpha,
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
} from "@tabler/icons-react";
import { APP_NAME, APP_DESCRIPTION } from "../../constants/constants";

/**
 * Home page component for educational tour website
 * Features 6 comprehensive sections with professional design
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
        "https://images.unsplash.com/photo-1539650116574-75c0c6d73a6e?w=600&h=400&fit=crop",
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

  // Statistics data
  const stats = [
    {
      icon: IconWorld,
      value: "50+",
      label: "Countries Covered",
      color: theme.palette.primary.main,
    },
    {
      icon: IconUsers,
      value: "15K+",
      label: "Happy Travelers",
      color: theme.palette.secondary.main,
    },
    {
      icon: IconAward,
      value: "2K+",
      label: "Tours Organized",
      color: "#2e7d32",
    },
    {
      icon: IconSchool,
      value: "200+",
      label: "Expert Guides",
      color: "#0288d1",
    },
  ];

  // Why choose us features
  const features = [
    {
      icon: IconShield,
      title: "Safety First",
      description:
        "Comprehensive safety protocols and 24/7 support for all travelers",
      color: theme.palette.primary.main,
    },
    {
      icon: IconSchool,
      title: "Expert Guides",
      description:
        "Learn from certified educators and local experts passionate about sharing knowledge",
      color: theme.palette.secondary.main,
    },
    {
      icon: IconHeart,
      title: "Authentic Experiences",
      description:
        "Immerse yourself in local culture with carefully curated educational activities",
      color: "#2e7d32",
    },
    {
      icon: IconAward,
      title: "Certified Programs",
      description:
        "Earn certificates and recognition for your educational journey",
      color: "#0288d1",
    },
  ];

  return (
    <Box>
      {/* Section 1: Hero Section */}
      <Box
        sx={{
          background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
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
            background: `radial-gradient(circle at 20% 50%, ${alpha(
              "#ffffff",
              0.1
            )} 0%, transparent 50%)`,
          },
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              position: "relative",
              zIndex: 1,
              textAlign: "center",
              maxWidth: 800,
              mx: "auto",
            }}
          >
            <Typography
              variant="h1"
              sx={{
                fontWeight: 700,
                mb: 3,
                fontSize: { xs: "2.5rem", md: "3.5rem" },
                textShadow: `0 2px 8px ${alpha("#000000", 0.2)}`,
              }}
            >
              {APP_DESCRIPTION}
            </Typography>
            <Typography
              variant="h5"
              sx={{
                mb: 4,
                opacity: 0.95,
                fontWeight: 400,
                lineHeight: 1.6,
              }}
            >
              Transform your learning journey through immersive educational
              tours that combine adventure, culture, and knowledge in
              unforgettable experiences.
            </Typography>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              justifyContent="center"
              sx={{ mt: 4 }}
            >
              <Button
                variant="contained"
                size="large"
                sx={{
                  bgcolor: "white",
                  color: theme.palette.primary.main,
                  px: 4,
                  py: 1.5,
                  fontSize: "1.1rem",
                  fontWeight: 600,
                  boxShadow: `0 4px 16px ${alpha("#000000", 0.2)}`,
                  "&:hover": {
                    bgcolor: alpha("#ffffff", 0.95),
                    transform: "translateY(-2px)",
                    boxShadow: `0 6px 20px ${alpha("#000000", 0.3)}`,
                  },
                  transition: "all 0.3s ease",
                }}
              >
                Explore Tours
              </Button>
              <Button
                variant="outlined"
                size="large"
                startIcon={<IconPlayerPlay size={24} />}
                sx={{
                  borderColor: "white",
                  color: "white",
                  px: 4,
                  py: 1.5,
                  fontSize: "1.1rem",
                  fontWeight: 600,
                  borderWidth: 2,
                  "&:hover": {
                    borderColor: "white",
                    bgcolor: alpha("#ffffff", 0.1),
                    borderWidth: 2,
                  },
                  transition: "all 0.3s ease",
                }}
              >
                Watch Video
              </Button>
            </Stack>
          </Box>
        </Container>
      </Box>

      {/* Section 2: Statistics */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
        <Grid container spacing={3}>
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Grid size={{ xs: 6, md: 3 }} key={index}>
                <Card
                  sx={{
                    textAlign: "center",
                    p: 3,
                    height: "100%",
                    border: `2px solid transparent`,
                    background: `linear-gradient(white, white) padding-box, linear-gradient(135deg, ${alpha(
                      stat.color,
                      0.2
                    )}, ${alpha(stat.color, 0.05)}) border-box`,
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: `0 8px 24px ${alpha(stat.color, 0.2)}`,
                      borderColor: stat.color,
                    },
                  }}
                >
                  <CardContent>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        mb: 2,
                        color: stat.color,
                      }}
                    >
                      <IconComponent size={48} stroke={1.5} />
                    </Box>
                    <Typography
                      variant="h3"
                      sx={{
                        fontWeight: 700,
                        mb: 1,
                        color: stat.color,
                      }}
                    >
                      {stat.value}
                    </Typography>
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      fontWeight={500}
                    >
                      {stat.label}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>

      {/* Section 3: About/Introduction */}
      <Box
        sx={{
          background: `linear-gradient(180deg, ${alpha(
            theme.palette.primary.main,
            0.05
          )} 0%, ${alpha(theme.palette.secondary.main, 0.05)} 100%)`,
          py: { xs: 6, md: 10 },
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 700,
                  mb: 3,
                  color: theme.palette.primary.main,
                }}
              >
                Learn Through Adventure
              </Typography>
              <Typography
                variant="h6"
                color="text.secondary"
                sx={{ mb: 3, lineHeight: 1.8 }}
              >
                At {APP_NAME}, we believe that the best education happens when
                you step outside the classroom. Our carefully designed tours
                combine hands-on learning with cultural immersion, creating
                experiences that inspire, educate, and transform.
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ mb: 4, lineHeight: 1.8 }}
              >
                Whether you're exploring ancient civilizations, discovering
                natural wonders, or diving into cutting-edge science, our expert
                guides ensure every moment is both educational and engaging.
                Join thousands of learners who have transformed their
                understanding of the world through our programs.
              </Typography>
              <Button
                variant="contained"
                size="large"
                endIcon={<IconArrowRight size={20} />}
                sx={{
                  px: 4,
                  py: 1.5,
                  fontSize: "1rem",
                  fontWeight: 600,
                }}
              >
                Learn More About Us
              </Button>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                sx={{
                  position: "relative",
                  borderRadius: 3,
                  overflow: "hidden",
                  boxShadow: `0 12px 40px ${alpha(
                    theme.palette.primary.main,
                    0.2
                  )}`,
                }}
              >
                <Box
                  component="img"
                  src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop"
                  alt="Educational tour experience"
                  sx={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                  }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    background: `linear-gradient(to top, ${alpha(
                      "#000000",
                      0.7
                    )}, transparent)`,
                    p: 3,
                    color: "white",
                  }}
                >
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                    Real Learning, Real Experiences
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.9 }}>
                    Join our community of curious learners
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Section 4: Featured Tours */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              mb: 2,
              color: theme.palette.primary.main,
            }}
          >
            Featured Educational Tours
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ maxWidth: 600, mx: "auto" }}
          >
            Discover our most popular tours designed to inspire learning and
            create lasting memories
          </Typography>
        </Box>
        <Grid container spacing={4}>
          {featuredTours.map((tour) => (
            <Grid size={{ xs: 12, md: 4 }} key={tour.id}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  overflow: "hidden",
                  transition: "all 0.3s ease",
                  border: `1px solid ${theme.palette.divider}`,
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: `0 12px 32px ${alpha(
                      theme.palette.primary.main,
                      0.2
                    )}`,
                  },
                }}
              >
                <Box sx={{ position: "relative" }}>
                  <CardMedia
                    component="img"
                    height="240"
                    image={tour.image}
                    alt={tour.title}
                    sx={{ objectFit: "cover" }}
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      top: 16,
                      right: 16,
                      bgcolor: alpha(theme.palette.primary.main, 0.9),
                      color: "white",
                      px: 2,
                      py: 0.5,
                      borderRadius: 2,
                      fontWeight: 600,
                      fontSize: "0.875rem",
                    }}
                  >
                    {tour.price}
                  </Box>
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: 16,
                      left: 16,
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      bgcolor: alpha("#000000", 0.6),
                      color: "white",
                      px: 1.5,
                      py: 0.5,
                      borderRadius: 2,
                    }}
                  >
                    <IconStar size={16} fill="white" />
                    <Typography variant="caption" fontWeight={600}>
                      {tour.rating} ({tour.reviews})
                    </Typography>
                  </Box>
                </Box>
                <CardContent
                  sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}
                >
                  <Typography
                    variant="caption"
                    sx={{
                      color: theme.palette.primary.main,
                      fontWeight: 600,
                      mb: 1,
                      textTransform: "uppercase",
                      letterSpacing: 1,
                    }}
                  >
                    {tour.category}
                  </Typography>
                  <Typography variant="h5" sx={{ fontWeight: 600, mb: 1.5 }}>
                    {tour.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 2, flexGrow: 1 }}
                  >
                    {tour.description}
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                      mb: 2,
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 0.5,
                        color: "text.secondary",
                      }}
                    >
                      <IconClock size={18} />
                      <Typography variant="caption">{tour.duration}</Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 0.5,
                        color: "text.secondary",
                      }}
                    >
                      <IconMapPin size={18} />
                      <Typography variant="caption">
                        Multiple Locations
                      </Typography>
                    </Box>
                  </Box>
                  <Button
                    variant="contained"
                    fullWidth
                    endIcon={<IconArrowRight size={18} />}
                    sx={{
                      mt: "auto",
                      py: 1.5,
                      fontWeight: 600,
                    }}
                  >
                    View Details
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Box sx={{ textAlign: "center", mt: 6 }}>
          <Button
            variant="outlined"
            size="large"
            endIcon={<IconArrowRight size={20} />}
            sx={{
              px: 4,
              py: 1.5,
              fontSize: "1rem",
              fontWeight: 600,
              borderWidth: 2,
              "&:hover": {
                borderWidth: 2,
              },
            }}
          >
            View All Tours
          </Button>
        </Box>
      </Container>

      {/* Section 5: Why Choose Us */}
      <Box
        sx={{
          background: `linear-gradient(135deg, ${alpha(
            theme.palette.primary.main,
            0.08
          )} 0%, ${alpha(theme.palette.secondary.main, 0.08)} 100%)`,
          py: { xs: 6, md: 10 },
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", mb: 6 }}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 700,
                mb: 2,
                color: theme.palette.primary.main,
              }}
            >
              Why Choose {APP_NAME}?
            </Typography>
            <Typography
              variant="h6"
              color="text.secondary"
              sx={{ maxWidth: 700, mx: "auto" }}
            >
              We're committed to providing exceptional educational experiences
              that combine learning, adventure, and cultural immersion
            </Typography>
          </Box>
          <Grid container spacing={4}>
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                  <Card
                    sx={{
                      height: "100%",
                      p: 3,
                      textAlign: "center",
                      border: `2px solid transparent`,
                      background: `linear-gradient(white, white) padding-box, linear-gradient(135deg, ${alpha(
                        feature.color,
                        0.1
                      )}, transparent) border-box`,
                      transition: "all 0.3s ease",
                      "&:hover": {
                        transform: "translateY(-8px)",
                        boxShadow: `0 12px 32px ${alpha(feature.color, 0.15)}`,
                        borderColor: feature.color,
                      },
                    }}
                  >
                    <Box
                      sx={{
                        display: "inline-flex",
                        p: 2,
                        borderRadius: 2,
                        bgcolor: alpha(feature.color, 0.1),
                        color: feature.color,
                        mb: 2,
                      }}
                    >
                      <IconComponent size={40} stroke={1.5} />
                    </Box>
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 1.5 }}>
                      {feature.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ lineHeight: 1.7 }}
                    >
                      {feature.description}
                    </Typography>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Box>

      {/* Section 6: Call to Action */}
      <Box
        sx={{
          background: `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.secondary.dark} 100%)`,
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
            background: `radial-gradient(circle at 80% 20%, ${alpha(
              "#ffffff",
              0.1
            )} 0%, transparent 50%)`,
          },
        }}
      >
        <Container maxWidth="md">
          <Box
            sx={{
              position: "relative",
              zIndex: 1,
              textAlign: "center",
            }}
          >
            <Typography
              variant="h2"
              sx={{
                fontWeight: 700,
                mb: 3,
                fontSize: { xs: "2rem", md: "2.5rem" },
                textShadow: `0 2px 8px ${alpha("#000000", 0.2)}`,
              }}
            >
              Ready to Start Your Learning Adventure?
            </Typography>
            <Typography
              variant="h6"
              sx={{
                mb: 5,
                opacity: 0.95,
                fontWeight: 400,
                lineHeight: 1.7,
              }}
            >
              Join thousands of learners exploring the world through our
              educational tours. Discover new cultures, gain knowledge, and
              create memories that last a lifetime.
            </Typography>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              justifyContent="center"
            >
              <Button
                variant="contained"
                size="large"
                sx={{
                  bgcolor: "white",
                  color: theme.palette.primary.main,
                  px: 5,
                  py: 1.5,
                  fontSize: "1.1rem",
                  fontWeight: 600,
                  boxShadow: `0 4px 16px ${alpha("#000000", 0.2)}`,
                  "&:hover": {
                    bgcolor: alpha("#ffffff", 0.95),
                    transform: "translateY(-2px)",
                    boxShadow: `0 6px 20px ${alpha("#000000", 0.3)}`,
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
                  borderColor: "white",
                  color: "white",
                  px: 5,
                  py: 1.5,
                  fontSize: "1.1rem",
                  fontWeight: 600,
                  borderWidth: 2,
                  "&:hover": {
                    borderColor: "white",
                    bgcolor: alpha("#ffffff", 0.1),
                    borderWidth: 2,
                  },
                  transition: "all 0.3s ease",
                }}
              >
                Contact Us
              </Button>
            </Stack>
          </Box>
        </Container>
      </Box>
    </Box>
  );
});

Home.displayName = "Home";

export default Home;
