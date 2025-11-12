import { memo } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  Stack,
  Chip,
  useTheme,
  alpha,
  Paper,
  Button,
  IconButton,
} from "@mui/material";
import {
  IconTarget,
  IconEye,
  IconHeart,
  IconUsers,
  IconAward,
  IconTrophy,
  IconWorld,
  IconSchool,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconMail,
} from "@tabler/icons-react";

/**
 * Team member interface
 */
interface TeamMember {
  name: string;
  role: string;
  bio: string;
  avatar?: string;
  social?: {
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
}

/**
 * Company value interface
 */
interface CompanyValue {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

/**
 * About Us Page Component
 *
 * @component
 * @description Professional about us page featuring:
 * - Hero section with company overview
 * - Mission, Vision, Values sections
 * - Statistics showcase
 * - Team members section
 * - Company timeline/milestones
 * - Call to action
 */
const About = memo(() => {
  const theme = useTheme();

  // Company values
  const values: CompanyValue[] = [
    {
      icon: <IconHeart size={32} />,
      title: "Passion for Learning",
      description: "We believe education through travel creates unforgettable experiences and lasting knowledge.",
      color: theme.palette.primary.main,
    },
    {
      icon: <IconUsers size={32} />,
      title: "Community First",
      description: "Building connections between travelers, educators, and local communities worldwide.",
      color: theme.palette.secondary.main,
    },
    {
      icon: <IconAward size={32} />,
      title: "Excellence",
      description: "Committed to providing high-quality, safe, and enriching educational tours.",
      color: "#2e7d32",
    },
    {
      icon: <IconWorld size={32} />,
      title: "Sustainability",
      description: "Promoting responsible travel that respects cultures and protects our planet.",
      color: "#0288d1",
    },
  ];

  // Statistics
  const stats = [
    { label: "Countries Covered", value: "50+", icon: <IconWorld size={24} /> },
    { label: "Tours Organized", value: "2,000+", icon: <IconTrophy size={24} /> },
    { label: "Happy Travelers", value: "15,000+", icon: <IconUsers size={24} /> },
    { label: "Expert Guides", value: "200+", icon: <IconSchool size={24} /> },
  ];

  // Team members
  const teamMembers: TeamMember[] = [
    {
      name: "Sarah Johnson",
      role: "Founder & CEO",
      bio: "15+ years in educational travel. Passionate about making learning adventures accessible to all.",
      social: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        email: "sarah@roamlearn.com",
      },
    },
    {
      name: "Michael Chen",
      role: "Head of Operations",
      bio: "Expert in logistics and tour management. Ensures every journey runs smoothly and safely.",
      social: {
        linkedin: "https://linkedin.com",
        email: "michael@roamlearn.com",
      },
    },
    {
      name: "Emily Rodriguez",
      role: "Educational Director",
      bio: "Former educator with a passion for experiential learning and curriculum development.",
      social: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        email: "emily@roamlearn.com",
      },
    },
    {
      name: "David Thompson",
      role: "Head of Partnerships",
      bio: "Building relationships with local communities, schools, and cultural institutions worldwide.",
      social: {
        linkedin: "https://linkedin.com",
        email: "david@roamlearn.com",
      },
    },
  ];

  return (
    <Box sx={{ minHeight: "100vh" }}>
      {/* Hero Section */}
      <Box
        sx={{
          background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.95)} 0%, ${alpha(theme.palette.secondary.main, 0.95)} 100%)`,
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
            background: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
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
              We connect curious minds with the world's most fascinating destinations,
              creating unforgettable learning experiences that inspire and educate.
            </Typography>
          </Stack>
        </Container>
      </Box>

      {/* Statistics Section */}
      <Container maxWidth="lg" sx={{ mt: -6, mb: 8, position: "relative", zIndex: 2 }}>
        <Grid container spacing={3}>
          {stats.map((stat, index) => (
            <Grid size={{ xs: 6, sm: 6, md: 3 }} key={index}>
              <Card
                sx={{
                  textAlign: "center",
                  py: 4,
                  height: "100%",
                  transition: theme.transitions.create(["transform", "box-shadow"], {
                    duration: theme.transitions.duration.short,
                  }),
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: `0 12px 24px ${alpha(theme.palette.primary.main, 0.15)}`,
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
                  variant="h3"
                  sx={{
                    fontWeight: 700,
                    color: "primary.main",
                    fontSize: { xs: "1.75rem", md: "2.5rem" },
                    mb: 1,
                  }}
                >
                  {stat.value}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 500 }}>
                  {stat.label}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Mission & Vision Section */}
      <Box sx={{ backgroundColor: "background.default", py: 8 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {/* Mission */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  height: "100%",
                  borderLeft: `4px solid ${theme.palette.primary.main}`,
                  transition: theme.transitions.create(["transform"], {
                    duration: theme.transitions.duration.short,
                  }),
                  "&:hover": {
                    transform: "translateX(8px)",
                  },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    mb: 3,
                  }}
                >
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: 2,
                      backgroundColor: alpha(theme.palette.primary.main, 0.1),
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "primary.main",
                    }}
                  >
                    <IconTarget size={28} />
                  </Box>
                  <Typography variant="h4" sx={{ fontWeight: 700 }}>
                    Our Mission
                  </Typography>
                </Box>
                <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8 }}>
                  To make educational travel accessible, meaningful, and transformative.
                  We design tours that combine adventure with learning, creating experiences
                  that broaden perspectives and foster lifelong curiosity about our world.
                </Typography>
              </Paper>
            </Grid>

            {/* Vision */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  height: "100%",
                  borderLeft: `4px solid ${theme.palette.secondary.main}`,
                  transition: theme.transitions.create(["transform"], {
                    duration: theme.transitions.duration.short,
                  }),
                  "&:hover": {
                    transform: "translateX(8px)",
                  },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    mb: 3,
                  }}
                >
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: 2,
                      backgroundColor: alpha(theme.palette.secondary.main, 0.1),
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "secondary.main",
                    }}
                  >
                    <IconEye size={28} />
                  </Box>
                  <Typography variant="h4" sx={{ fontWeight: 700 }}>
                    Our Vision
                  </Typography>
                </Box>
                <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8 }}>
                  A world where every learner has the opportunity to explore, discover, and
                  grow through travel. We envision educational tours as bridges between
                  cultures, catalysts for understanding, and foundations for global citizenship.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Values Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Stack spacing={2} alignItems="center" textAlign="center" sx={{ mb: 6 }}>
          <Typography variant="h3" sx={{ fontWeight: 700 }}>
            Our Core Values
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 600 }}>
            These principles guide everything we do, from designing tours to
            supporting our travelers and partners.
          </Typography>
        </Stack>

        <Grid container spacing={4}>
          {values.map((value, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
              <Card
                sx={{
                  height: "100%",
                  p: 3,
                  textAlign: "center",
                  transition: theme.transitions.create(["transform", "box-shadow"], {
                    duration: theme.transitions.duration.short,
                  }),
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: `0 12px 24px ${alpha(value.color, 0.15)}`,
                    "& .value-icon": {
                      transform: "scale(1.1)",
                      backgroundColor: value.color,
                      color: "white",
                    },
                  },
                }}
              >
                <Box
                  className="value-icon"
                  sx={{
                    width: 72,
                    height: 72,
                    borderRadius: 3,
                    backgroundColor: alpha(value.color, 0.1),
                    color: value.color,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto",
                    mb: 3,
                    transition: theme.transitions.create(["transform", "background-color", "color"], {
                      duration: theme.transitions.duration.short,
                    }),
                  }}
                >
                  {value.icon}
                </Box>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                  {value.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                  {value.description}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Team Section */}
      <Box sx={{ backgroundColor: "background.default", py: 8 }}>
        <Container maxWidth="lg">
          <Stack spacing={2} alignItems="center" textAlign="center" sx={{ mb: 6 }}>
            <Typography variant="h3" sx={{ fontWeight: 700 }}>
              Meet Our Team
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 600 }}>
              Passionate professionals dedicated to creating exceptional educational
              travel experiences.
            </Typography>
          </Stack>

          <Grid container spacing={4}>
            {teamMembers.map((member, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                <Card
                  sx={{
                    height: "100%",
                    transition: theme.transitions.create(["transform", "box-shadow"], {
                      duration: theme.transitions.duration.short,
                    }),
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: `0 12px 24px ${alpha(theme.palette.primary.main, 0.15)}`,
                      "& .team-avatar": {
                        transform: "scale(1.05)",
                      },
                    },
                  }}
                >
                  <CardContent sx={{ p: 3, textAlign: "center" }}>
                    <Avatar
                      className="team-avatar"
                      src={member.avatar}
                      alt={member.name}
                      sx={{
                        width: 100,
                        height: 100,
                        margin: "0 auto",
                        mb: 2,
                        backgroundColor: "primary.main",
                        fontSize: "2rem",
                        fontWeight: 700,
                        transition: theme.transitions.create(["transform"], {
                          duration: theme.transitions.duration.short,
                        }),
                      }}
                    >
                      {member.name.charAt(0)}
                    </Avatar>
                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 0.5 }}>
                      {member.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="primary.main"
                      sx={{ fontWeight: 600, mb: 2 }}
                    >
                      {member.role}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ lineHeight: 1.6, mb: 3 }}
                    >
                      {member.bio}
                    </Typography>
                    <Stack direction="row" spacing={1} justifyContent="center">
                      {member.social?.linkedin && (
                        <IconButton
                          size="small"
                          href={member.social.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{
                            color: "text.secondary",
                            "&:hover": {
                              color: "primary.main",
                              backgroundColor: alpha(theme.palette.primary.main, 0.1),
                            },
                          }}
                        >
                          <IconBrandLinkedin size={20} />
                        </IconButton>
                      )}
                      {member.social?.twitter && (
                        <IconButton
                          size="small"
                          href={member.social.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{
                            color: "text.secondary",
                            "&:hover": {
                              color: "primary.main",
                              backgroundColor: alpha(theme.palette.primary.main, 0.1),
                            },
                          }}
                        >
                          <IconBrandTwitter size={20} />
                        </IconButton>
                      )}
                      {member.social?.email && (
                        <IconButton
                          size="small"
                          href={`mailto:${member.social.email}`}
                          sx={{
                            color: "text.secondary",
                            "&:hover": {
                              color: "primary.main",
                              backgroundColor: alpha(theme.palette.primary.main, 0.1),
                            },
                          }}
                        >
                          <IconMail size={20} />
                        </IconButton>
                      )}
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Call to Action */}
      <Box
        sx={{
          background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.08)} 0%, ${alpha(theme.palette.secondary.main, 0.08)} 100%)`,
          py: 8,
        }}
      >
        <Container maxWidth="md">
          <Stack spacing={3} alignItems="center" textAlign="center">
            <Typography variant="h3" sx={{ fontWeight: 700 }}>
              Ready to Start Your Journey?
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 600 }}>
              Join thousands of travelers who have discovered the joy of learning
              through exploration. Let's create your next adventure together.
            </Typography>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <Button
                variant="contained"
                size="large"
                href="/destinations"
                sx={{
                  px: 4,
                  py: 1.5,
                  borderRadius: 2,
                  fontWeight: 600,
                  textTransform: "none",
                  boxShadow: "none",
                  "&:hover": {
                    boxShadow: `0 8px 24px ${alpha(theme.palette.primary.main, 0.3)}`,
                  },
                }}
              >
                Explore Tours
              </Button>
              <Button
                variant="outlined"
                size="large"
                href="/contact"
                sx={{
                  px: 4,
                  py: 1.5,
                  borderRadius: 2,
                  fontWeight: 600,
                  textTransform: "none",
                  borderWidth: 2,
                  "&:hover": {
                    borderWidth: 2,
                    backgroundColor: alpha(theme.palette.primary.main, 0.08),
                  },
                }}
              >
                Contact Us
              </Button>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
});

// Display name for debugging
About.displayName = "About";

export default About;
