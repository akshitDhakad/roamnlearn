import { memo } from "react";
import {
  Box,
  Container,
  Typography,
  Paper,
  Grid,
  Button,
  Chip,
  Card,
  CardContent,
  CardActions,
  useTheme,
  alpha,
  Stack,
  Divider,
} from "@mui/material";
import {
  IconBriefcase,
  IconMapPin,
  IconClock,
  IconCurrencyDollar,
  IconUsers,
  IconHeart,
  IconTrophy,
  IconRocket,
  IconBulb,
  IconWorld,
  IconSchool,
  IconDevices,
  IconArrowRight,
  IconCheck,
} from "@tabler/icons-react";

/**
 * Job listing interface
 */
interface JobListing {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  requirements: string[];
}

/**
 * Career page component
 *
 * @component
 * @description Careers and job opportunities at RoamnLearn
 */
const Career = memo(() => {
  const theme = useTheme();

  const jobListings: JobListing[] = [
    {
      id: "1",
      title: "Tour Coordinator",
      department: "Operations",
      location: "New York, NY",
      type: "Full-time",
      experience: "2-4 years",
      description:
        "Plan and coordinate educational tours, manage logistics, and ensure exceptional experiences for students and educators.",
      requirements: [
        "Bachelor's degree in Tourism, Education, or related field",
        "2+ years experience in tour coordination or event planning",
        "Excellent organizational and communication skills",
        "Passion for education and cultural exchange",
      ],
    },
    {
      id: "2",
      title: "Educational Content Developer",
      department: "Education",
      location: "Remote",
      type: "Full-time",
      experience: "3-5 years",
      description:
        "Develop engaging educational content, learning materials, and curriculum for our educational tours and programs.",
      requirements: [
        "Master's degree in Education or related field",
        "Experience in curriculum development",
        "Strong writing and research skills",
        "Knowledge of experiential learning methodologies",
      ],
    },
    {
      id: "3",
      title: "Full Stack Developer",
      department: "Technology",
      location: "Remote / Hybrid",
      type: "Full-time",
      experience: "3-6 years",
      description:
        "Build and maintain our web platform, implement new features, and enhance user experience for students, educators, and administrators.",
      requirements: [
        "Bachelor's degree in Computer Science or equivalent experience",
        "Proficiency in React, Node.js, and TypeScript",
        "Experience with cloud platforms (AWS/Azure)",
        "Strong problem-solving and collaboration skills",
      ],
    },
    {
      id: "4",
      title: "Marketing Manager",
      department: "Marketing",
      location: "New York, NY",
      type: "Full-time",
      experience: "4-6 years",
      description:
        "Lead marketing initiatives, develop strategies to reach educational institutions, and grow our brand presence in the education sector.",
      requirements: [
        "Bachelor's degree in Marketing or related field",
        "Proven experience in B2B marketing, preferably in education",
        "Strong digital marketing and analytics skills",
        "Excellent leadership and creative thinking abilities",
      ],
    },
    {
      id: "5",
      title: "Customer Success Specialist",
      department: "Customer Support",
      location: "Remote",
      type: "Full-time",
      experience: "1-3 years",
      description:
        "Provide exceptional support to schools, educators, and students. Help resolve issues and ensure successful tour experiences.",
      requirements: [
        "Bachelor's degree or equivalent experience",
        "Excellent communication and problem-solving skills",
        "Experience in customer service or support role",
        "Empathetic, patient, and detail-oriented",
      ],
    },
    {
      id: "6",
      title: "International Relations Coordinator",
      department: "Operations",
      location: "New York, NY",
      type: "Full-time",
      experience: "3-5 years",
      description:
        "Establish and maintain relationships with international partners, vendors, and educational institutions across the globe.",
      requirements: [
        "Bachelor's degree in International Relations or related field",
        "Fluency in multiple languages preferred",
        "Experience in international business or education",
        "Strong negotiation and relationship-building skills",
      ],
    },
  ];

  const benefits = [
    {
      icon: <IconHeart size={28} />,
      title: "Health & Wellness",
      description: "Comprehensive health, dental, and vision insurance",
    },
    {
      icon: <IconClock size={28} />,
      title: "Flexible Schedule",
      description: "Work-life balance with flexible hours and remote options",
    },
    {
      icon: <IconWorld size={28} />,
      title: "Travel Opportunities",
      description: "Experience our tours firsthand with travel allowances",
    },
    {
      icon: <IconTrophy size={28} />,
      title: "Professional Growth",
      description: "Learning stipends and career development programs",
    },
    {
      icon: <IconUsers size={28} />,
      title: "Collaborative Culture",
      description: "Work with passionate, diverse, and talented teams",
    },
    {
      icon: <IconSchool size={28} />,
      title: "Learning Budget",
      description: "$2,000 annual budget for courses and conferences",
    },
  ];

  const values = [
    {
      icon: <IconBulb size={32} />,
      title: "Innovation",
      description:
        "We constantly explore new ways to enhance educational experiences through technology and creativity.",
    },
    {
      icon: <IconHeart size={32} />,
      title: "Passion for Education",
      description:
        "We believe in the transformative power of experiential learning and cultural immersion.",
    },
    {
      icon: <IconUsers size={32} />,
      title: "Collaboration",
      description:
        "We work together across teams and borders to create exceptional experiences for students.",
    },
    {
      icon: <IconRocket size={32} />,
      title: "Excellence",
      description:
        "We strive for excellence in everything we do, from tour planning to customer support.",
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
      {/* Hero Section */}
      <Box
        sx={{
          background: `linear-gradient(135deg, ${alpha(
            theme.palette.primary.main,
            0.1
          )} 0%, ${alpha(theme.palette.secondary.main, 0.1)} 100%)`,
          py: { xs: 8, md: 12 },
          mb: 8,
          position: "relative",
          overflow: "hidden",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            right: 0,
            width: "50%",
            height: "100%",
            background: `radial-gradient(circle at top right, ${alpha(
              theme.palette.primary.main,
              0.15
            )}, transparent 70%)`,
          },
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", position: "relative", zIndex: 1 }}>
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
              <IconBriefcase size={40} color={theme.palette.primary.main} />
            </Box>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 800,
                mb: 2,
                fontSize: { xs: "2rem", md: "3.5rem" },
              }}
            >
              Join Our Team
            </Typography>
            <Typography
              variant="h5"
              color="text.secondary"
              sx={{ maxWidth: 800, mx: "auto", mb: 4, lineHeight: 1.6 }}
            >
              Help us transform education through meaningful travel experiences.
              Join a team that's passionate about inspiring the next generation
              of global citizens.
            </Typography>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              sx={{ justifyContent: "center" }}
            >
              <Button
                variant="contained"
                size="large"
                endIcon={<IconArrowRight />}
                sx={{
                  px: 4,
                  py: 1.5,
                  borderRadius: 2,
                  textTransform: "none",
                  fontSize: "1rem",
                  fontWeight: 600,
                }}
                onClick={() => {
                  document
                    .getElementById("open-positions")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                View Open Positions
              </Button>
            </Stack>
          </Box>
        </Container>
      </Box>

      <Container maxWidth="lg">
        {/* Why Work With Us */}
        <Box sx={{ mb: 10 }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              mb: 2,
              textAlign: "center",
              fontSize: { xs: "1.75rem", md: "2.5rem" },
            }}
          >
            Why RoamnLearn?
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ textAlign: "center", mb: 6, maxWidth: 700, mx: "auto" }}
          >
            We're building the future of educational travel. Join us in creating
            transformative experiences that inspire curiosity, foster cultural
            understanding, and shape future leaders.
          </Typography>

          <Grid container spacing={4}>
            {values.map((value, index) => (
              <Grid size={{ xs: 12, sm: 6 }} key={index}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    height: "100%",
                    border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
                    borderRadius: 3,
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-4px)",
                      boxShadow: `0 12px 24px ${alpha(
                        theme.palette.primary.main,
                        0.1
                      )}`,
                      borderColor: alpha(theme.palette.primary.main, 0.3),
                    },
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: 60,
                      height: 60,
                      borderRadius: 2,
                      bgcolor: alpha(theme.palette.primary.main, 0.1),
                      color: theme.palette.primary.main,
                      mb: 3,
                    }}
                  >
                    {value.icon}
                  </Box>
                  <Typography variant="h6" fontWeight={700} sx={{ mb: 2 }}>
                    {value.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {value.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Benefits Section */}
        <Box sx={{ mb: 10 }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              mb: 2,
              textAlign: "center",
              fontSize: { xs: "1.75rem", md: "2.5rem" },
            }}
          >
            Benefits & Perks
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ textAlign: "center", mb: 6, maxWidth: 700, mx: "auto" }}
          >
            We invest in our team's wellbeing, growth, and happiness. Here's
            what you can expect when you join RoamnLearn.
          </Typography>

          <Grid container spacing={3}>
            {benefits.map((benefit, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                <Card
                  elevation={0}
                  sx={{
                    height: "100%",
                    border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
                    borderRadius: 3,
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-4px)",
                      boxShadow: `0 8px 16px ${alpha(
                        theme.palette.primary.main,
                        0.08
                      )}`,
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
                      {benefit.icon}
                    </Box>
                    <Typography
                      variant="h6"
                      fontWeight={600}
                      sx={{ mb: 1 }}
                    >
                      {benefit.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {benefit.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Open Positions */}
        <Box id="open-positions" sx={{ mb: 8 }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              mb: 2,
              textAlign: "center",
              fontSize: { xs: "1.75rem", md: "2.5rem" },
            }}
          >
            Open Positions
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ textAlign: "center", mb: 6, maxWidth: 700, mx: "auto" }}
          >
            Explore current opportunities to join our team. Don't see a perfect
            fit? Send us your resume anyway – we're always looking for talented
            people!
          </Typography>

          <Grid container spacing={3}>
            {jobListings.map((job) => (
              <Grid size={{ xs: 12 }} key={job.id}>
                <Card
                  elevation={0}
                  sx={{
                    border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
                    borderRadius: 3,
                    transition: "all 0.3s ease",
                    "&:hover": {
                      boxShadow: `0 8px 24px ${alpha(
                        theme.palette.primary.main,
                        0.1
                      )}`,
                      borderColor: alpha(theme.palette.primary.main, 0.3),
                    },
                  }}
                >
                  <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: { xs: "column", md: "row" },
                        justifyContent: "space-between",
                        alignItems: { xs: "flex-start", md: "center" },
                        mb: 3,
                      }}
                    >
                      <Box sx={{ mb: { xs: 2, md: 0 } }}>
                        <Typography
                          variant="h5"
                          fontWeight={700}
                          sx={{ mb: 1 }}
                        >
                          {job.title}
                        </Typography>
                        <Stack direction="row" spacing={2} flexWrap="wrap">
                          <Chip
                            icon={<IconBriefcase size={16} />}
                            label={job.department}
                            size="small"
                            sx={{
                              bgcolor: alpha(theme.palette.primary.main, 0.1),
                              color: theme.palette.primary.main,
                              fontWeight: 600,
                            }}
                          />
                          <Chip
                            icon={<IconMapPin size={16} />}
                            label={job.location}
                            size="small"
                            variant="outlined"
                          />
                          <Chip
                            icon={<IconClock size={16} />}
                            label={job.type}
                            size="small"
                            variant="outlined"
                          />
                        </Stack>
                      </Box>
                      <Button
                        variant="contained"
                        endIcon={<IconArrowRight />}
                        sx={{
                          px: 3,
                          py: 1,
                          borderRadius: 2,
                          textTransform: "none",
                          fontWeight: 600,
                        }}
                      >
                        Apply Now
                      </Button>
                    </Box>

                    <Typography
                      variant="body1"
                      paragraph
                      sx={{ mb: 3, lineHeight: 1.7 }}
                    >
                      {job.description}
                    </Typography>

                    <Divider sx={{ my: 3 }} />

                    <Typography
                      variant="subtitle2"
                      fontWeight={700}
                      sx={{ mb: 2 }}
                    >
                      Requirements:
                    </Typography>
                    <Stack spacing={1}>
                      {job.requirements.map((req, index) => (
                        <Box
                          key={index}
                          sx={{ display: "flex", alignItems: "flex-start" }}
                        >
                          <IconCheck
                            size={20}
                            color={theme.palette.primary.main}
                            style={{ marginRight: 8, marginTop: 2 }}
                          />
                          <Typography variant="body2" sx={{ flex: 1 }}>
                            {req}
                          </Typography>
                        </Box>
                      ))}
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* CTA Section */}
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
            Don't See Your Role?
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ mb: 4, maxWidth: 600, mx: "auto" }}
          >
            We're always interested in meeting talented individuals who share our
            passion for education and travel. Send us your resume and let's start
            a conversation!
          </Typography>
          <Button
            variant="contained"
            size="large"
            href="mailto:careers@roamnlearn.com"
            sx={{
              px: 4,
              py: 1.5,
              borderRadius: 2,
              textTransform: "none",
              fontSize: "1rem",
              fontWeight: 600,
            }}
          >
            Send Your Resume
          </Button>
        </Paper>
      </Container>
    </Box>
  );
});

// Display name for debugging
Career.displayName = "Career";

export default Career;
