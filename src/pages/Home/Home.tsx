import {
  Box,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import {
  IconBook,
  IconUsers,
  IconCertificate,
  IconTrendingUp,
  IconPlayerPlay,
  IconClock,
} from "@tabler/icons-react";

/**
 * Home page component
 * Displays hero section, featured courses, and key statistics
 */
const Home = () => {
  const featuredCourses = [
    {
      id: 1,
      title: "Introduction to Web Development",
      instructor: "John Doe",
      duration: "12 hours",
      students: 1250,
      image: "https://via.placeholder.com/300x200?text=Web+Development",
    },
    {
      id: 2,
      title: "Advanced React Patterns",
      instructor: "Jane Smith",
      duration: "18 hours",
      students: 890,
      image: "https://via.placeholder.com/300x200?text=React",
    },
    {
      id: 3,
      title: "Full Stack Development",
      instructor: "Mike Johnson",
      duration: "24 hours",
      students: 2100,
      image: "https://via.placeholder.com/300x200?text=Full+Stack",
    },
  ];

  const stats = [
    { icon: IconBook, label: "Courses", value: "500+" },
    { icon: IconUsers, label: "Students", value: "50K+" },
    { icon: IconCertificate, label: "Certificates", value: "10K+" },
    { icon: IconTrendingUp, label: "Success Rate", value: "95%" },
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          borderRadius: 3,
          p: { xs: 4, md: 8 },
          mb: 6,
          color: "white",
          textAlign: "center",
        }}
      >
        <Typography variant="h2" sx={{ fontWeight: 700, mb: 2 }}>
          Learn Without Limits
        </Typography>
        <Typography
          variant="h6"
          sx={{ mb: 4, opacity: 0.9, maxWidth: 600, mx: "auto" }}
        >
          Start your journey to success with our comprehensive courses designed
          by industry experts.
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: 2,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <Button
            variant="contained"
            size="large"
            sx={{
              bgcolor: "white",
              color: "primary.main",
              "&:hover": {
                bgcolor: "rgba(255, 255, 255, 0.9)",
              },
            }}
          >
            Explore Courses
          </Button>
          <Button
            variant="outlined"
            size="large"
            sx={{
              borderColor: "white",
              color: "white",
              "&:hover": {
                borderColor: "white",
                bgcolor: "rgba(255, 255, 255, 0.1)",
              },
            }}
          >
            <IconPlayerPlay size={20} style={{ marginRight: 8 }} />
            Watch Demo
          </Button>
        </Box>
      </Box>

      {/* Statistics */}
      <Grid container spacing={4} sx={{ mb: 6 }}>
        {stats.map((stat, index) => (
          <Grid size={{ xs: 6, md: 3 }} key={index}>
            <Card
              sx={{
                textAlign: "center",
                p: 3,
                height: "100%",
                "&:hover": {
                  boxShadow: 6,
                  transform: "translateY(-4px)",
                  transition: "all 0.3s ease",
                },
              }}
            >
              <CardContent>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    mb: 2,
                    color: "primary.main",
                  }}
                >
                  <stat.icon size={40} />
                </Box>
                <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
                  {stat.value}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {stat.label}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Featured Courses */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" sx={{ fontWeight: 600, mb: 1 }}>
          Featured Courses
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          Discover our most popular courses and start learning today
        </Typography>
        <Grid container spacing={3}>
          {featuredCourses.map((course) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={course.id}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  "&:hover": {
                    boxShadow: 6,
                    transform: "translateY(-4px)",
                    transition: "all 0.3s ease",
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={course.image}
                  alt={course.title}
                  sx={{ objectFit: "cover" }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                    {course.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 2 }}
                  >
                    By {course.instructor}
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      gap: 2,
                      alignItems: "center",
                      mb: 2,
                    }}
                  >
                    <Box
                      sx={{ display: "flex", alignItems: "center", gap: 0.5 }}
                    >
                      <IconClock size={16} />
                      <Typography variant="caption" color="text.secondary">
                        {course.duration}
                      </Typography>
                    </Box>
                    <Box
                      sx={{ display: "flex", alignItems: "center", gap: 0.5 }}
                    >
                      <IconUsers size={16} />
                      <Typography variant="caption" color="text.secondary">
                        {course.students} students
                      </Typography>
                    </Box>
                  </Box>
                  <Button variant="contained" fullWidth>
                    Enroll Now
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Home;
