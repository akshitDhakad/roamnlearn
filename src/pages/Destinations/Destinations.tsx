import { memo, useState } from "react";
import {
  Box,
  Container,
  Typography,
  Paper,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Chip,
  TextField,
  InputAdornment,
  useTheme,
  alpha,
  Stack,
  Drawer,
  IconButton,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Checkbox,
  FormGroup,
  FormControlLabel,
  Slider,
  Divider,
  Rating,
} from "@mui/material";
import {
  IconSearch,
  IconMapPin,
  IconFilter,
  IconX,
  IconArrowRight,
  IconHeart,
  IconHeartFilled,
} from "@tabler/icons-react";

/**
 * Tour interface
 */
interface Tour {
  id: string;
  title: string;
  destination: string;
  category: string;
  image: string;
  duration: string;
  price: number;
  rating: number;
  reviews: number;
  participants: string;
  description: string;
  highlights: string[];
  featured?: boolean;
}

/**
 * Category interface
 */
interface Category {
  id: string;
  name: string;
  count: number;
}

/**
 * Professional Destinations page component
 *
 * @component
 * @description Browse and filter educational tours with modern, professional design
 */
const Destinations = memo(() => {
  const theme = useTheme();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [priceRange, setPriceRange] = useState<number[]>([0, 5000]);
  const [durationFilter, setDurationFilter] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("popular");
  const [filterDrawerOpen, setFilterDrawerOpen] = useState(false);
  const [favorites, setFavorites] = useState<string[]>([]);

  const categories: Category[] = [
    { id: "all", name: "All Tours", count: 45 },
    { id: "culture", name: "Culture & History", count: 12 },
    { id: "technology", name: "Technology & Innovation", count: 8 },
    { id: "adventure", name: "Adventure & Nature", count: 10 },
    { id: "arts", name: "Arts & Creative", count: 7 },
    { id: "science", name: "Science & Research", count: 8 },
  ];

  const tours: Tour[] = [
    {
      id: "1",
      title: "Renaissance Art & Architecture Tour",
      destination: "Florence, Italy",
      category: "culture",
      image:
        "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&h=600&fit=crop&q=80",
      duration: "7 Days",
      price: 2499,
      rating: 4.9,
      reviews: 124,
      participants: "15-25 students",
      description:
        "Explore the birthplace of the Renaissance with expert art historians.",
      highlights: [
        "Uffizi Gallery guided tour",
        "Florence Cathedral visit",
        "Michelangelo's David",
      ],
      featured: true,
    },
    {
      id: "2",
      title: "Silicon Valley Tech Innovation Tour",
      destination: "San Francisco, USA",
      category: "technology",
      image:
        "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&h=600&fit=crop&q=80",
      duration: "5 Days",
      price: 3299,
      rating: 4.8,
      reviews: 98,
      participants: "12-20 students",
      description:
        "Visit leading tech companies and learn from industry innovators.",
      highlights: [
        "Tech company visits",
        "Stanford University tour",
        "Innovation workshops",
      ],
      featured: true,
    },
    {
      id: "3",
      title: "Ancient Civilizations Study Tour",
      destination: "Athens, Greece",
      category: "culture",
      image:
        "https://images.unsplash.com/photo-1555993539-1732b0258235?w=800&h=600&fit=crop&q=80",
      duration: "8 Days",
      price: 2799,
      rating: 4.9,
      reviews: 156,
      participants: "18-30 students",
      description:
        "Walk through ancient history at the birthplace of democracy.",
      highlights: [
        "Acropolis & Parthenon",
        "Ancient Agora exploration",
        "Archaeological Museum",
      ],
    },
    {
      id: "4",
      title: "Alpine Ecology & Conservation",
      destination: "Swiss Alps, Switzerland",
      category: "adventure",
      image:
        "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800&h=600&fit=crop&q=80",
      duration: "6 Days",
      price: 3499,
      rating: 4.7,
      reviews: 87,
      participants: "10-18 students",
      description: "Study alpine ecosystems and sustainable mountain tourism.",
      highlights: [
        "Glacier research station",
        "Wildlife tracking",
        "Conservation workshops",
      ],
    },
    {
      id: "5",
      title: "Contemporary Art & Design Week",
      destination: "Barcelona, Spain",
      category: "arts",
      image:
        "https://images.unsplash.com/photo-1583422409516-2895a77efded?w=800&h=600&fit=crop&q=80",
      duration: "5 Days",
      price: 2199,
      rating: 4.8,
      reviews: 142,
      participants: "12-22 students",
      description: "Immerse in Gaudí's masterpieces and modern Spanish art.",
      highlights: [
        "Sagrada Familia tour",
        "Park Güell visit",
        "Design museum workshops",
      ],
    },
    {
      id: "6",
      title: "Space & Astronomy Program",
      destination: "Houston, USA",
      category: "science",
      image:
        "https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?w=800&h=600&fit=crop&q=80",
      duration: "4 Days",
      price: 1899,
      rating: 4.9,
      reviews: 203,
      participants: "15-30 students",
      description: "Explore space exploration at NASA's Johnson Space Center.",
      highlights: [
        "Mission Control tour",
        "Astronaut training simulator",
        "Space science workshops",
      ],
      featured: true,
    },
    {
      id: "7",
      title: "Tokyo Tech & Culture Experience",
      destination: "Tokyo, Japan",
      category: "technology",
      image:
        "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&h=600&fit=crop&q=80",
      duration: "9 Days",
      price: 3899,
      rating: 4.9,
      reviews: 167,
      participants: "12-20 students",
      description:
        "Blend traditional culture with cutting-edge technology in Tokyo.",
      highlights: [
        "Robotics lab visits",
        "Traditional tea ceremony",
        "Tech startup tours",
      ],
    },
    {
      id: "8",
      title: "Amazon Rainforest Expedition",
      destination: "Amazon Basin, Peru",
      category: "adventure",
      image:
        "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800&h=600&fit=crop&q=80",
      duration: "10 Days",
      price: 3699,
      rating: 4.8,
      reviews: 94,
      participants: "10-16 students",
      description: "Study biodiversity in the world's largest rainforest.",
      highlights: [
        "Jungle trekking",
        "Indigenous community visit",
        "Wildlife observation",
      ],
    },
    {
      id: "9",
      title: "Impressionist Art Trail",
      destination: "Paris, France",
      category: "arts",
      image:
        "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800&h=600&fit=crop&q=80",
      duration: "6 Days",
      price: 2899,
      rating: 4.9,
      reviews: 189,
      participants: "15-25 students",
      description: "Follow the footsteps of great Impressionist painters.",
      highlights: [
        "Musée d'Orsay tour",
        "Giverny gardens visit",
        "Art history lectures",
      ],
    },
    {
      id: "10",
      title: "Marine Biology Research Tour",
      destination: "Great Barrier Reef, Australia",
      category: "science",
      image:
        "https://images.unsplash.com/photo-1583900985737-6d0495555783?w=800&h=600&fit=crop&q=80",
      duration: "8 Days",
      price: 4299,
      rating: 4.9,
      reviews: 112,
      participants: "12-18 students",
      description: "Study coral ecosystems and marine conservation.",
      highlights: [
        "Reef diving & snorkeling",
        "Marine research station",
        "Conservation projects",
      ],
    },
    {
      id: "11",
      title: "Ancient Egypt Archaeology Program",
      destination: "Cairo & Luxor, Egypt",
      category: "culture",
      image:
        "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?w=800&h=600&fit=crop&q=80",
      duration: "9 Days",
      price: 3199,
      rating: 4.8,
      reviews: 134,
      participants: "15-25 students",
      description: "Uncover the mysteries of ancient Egyptian civilization.",
      highlights: [
        "Pyramids of Giza",
        "Valley of the Kings",
        "Egyptian Museum tour",
      ],
    },
    {
      id: "12",
      title: "Renewable Energy Innovation Tour",
      destination: "Copenhagen, Denmark",
      category: "technology",
      image:
        "https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?w=800&h=600&fit=crop&q=80",
      duration: "5 Days",
      price: 2699,
      rating: 4.7,
      reviews: 76,
      participants: "12-20 students",
      description: "Explore sustainable energy solutions in green Copenhagen.",
      highlights: [
        "Wind farm visits",
        "Green architecture tour",
        "Sustainability workshops",
      ],
    },
  ];

  const handleToggleFavorite = (tourId: string) => {
    setFavorites((prev) =>
      prev.includes(tourId)
        ? prev.filter((id) => id !== tourId)
        : [...prev, tourId]
    );
  };

  const filteredTours = tours
    .filter((tour) => {
      const matchesSearch =
        tour.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tour.destination.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory =
        selectedCategory === "all" || tour.category === selectedCategory;
      const matchesPrice =
        tour.price >= priceRange[0] && tour.price <= priceRange[1];
      const matchesDuration =
        durationFilter === "all" ||
        (durationFilter === "short" && parseInt(tour.duration) <= 5) ||
        (durationFilter === "medium" &&
          parseInt(tour.duration) > 5 &&
          parseInt(tour.duration) <= 7) ||
        (durationFilter === "long" && parseInt(tour.duration) > 7);

      return (
        matchesSearch && matchesCategory && matchesPrice && matchesDuration
      );
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "rating":
          return b.rating - a.rating;
        case "duration":
          return parseInt(a.duration) - parseInt(b.duration);
        case "popular":
        default:
          if (a.featured && !b.featured) return -1;
          if (!a.featured && b.featured) return 1;
          return b.rating - a.rating;
      }
    });

  const FilterSection = () => (
    <Box sx={{ p: 3 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 3,
        }}
      >
        <Typography variant="h6" fontWeight={600}>
          Filters
        </Typography>
        <IconButton
          size="small"
          onClick={() => setFilterDrawerOpen(false)}
          sx={{ display: { md: "none" } }}
        >
          <IconX size={20} />
        </IconButton>
      </Box>

      {/* Category Filter */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="subtitle2" fontWeight={600} sx={{ mb: 2 }}>
          Category
        </Typography>
        <Stack spacing={1}>
          {categories.map((category) => (
            <Paper
              key={category.id}
              elevation={0}
              onClick={() => setSelectedCategory(category.id)}
              sx={{
                p: 2,
                cursor: "pointer",
                border: `1px solid ${
                  selectedCategory === category.id
                    ? theme.palette.primary.main
                    : alpha(theme.palette.divider, 0.5)
                }`,
                borderRadius: 1.5,
                bgcolor:
                  selectedCategory === category.id
                    ? alpha(theme.palette.primary.main, 0.04)
                    : "transparent",
                transition: "all 0.2s ease",
                "&:hover": {
                  borderColor: theme.palette.primary.main,
                  bgcolor: alpha(theme.palette.primary.main, 0.04),
                },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography
                  variant="body2"
                  fontWeight={selectedCategory === category.id ? 600 : 500}
                >
                  {category.name}
                </Typography>
                <Chip
                  label={category.count}
                  size="small"
                  sx={{
                    bgcolor: alpha(theme.palette.primary.main, 0.1),
                    color: theme.palette.primary.main,
                    fontWeight: 600,
                    height: 24,
                    fontSize: "0.7rem",
                  }}
                />
              </Box>
            </Paper>
          ))}
        </Stack>
      </Box>

      <Divider sx={{ my: 3 }} />

      {/* Price Range */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="subtitle2" fontWeight={600} sx={{ mb: 2 }}>
          Price Range
        </Typography>
        <Slider
          value={priceRange}
          onChange={(_, newValue) => setPriceRange(newValue as number[])}
          valueLabelDisplay="auto"
          min={0}
          max={5000}
          step={100}
          valueLabelFormat={(value) => `$${value}`}
          sx={{
            color: theme.palette.primary.main,
          }}
        />
        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 1 }}>
          <Typography variant="caption" color="text.secondary">
            ${priceRange[0]}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            ${priceRange[1]}
          </Typography>
        </Box>
      </Box>

      <Divider sx={{ my: 3 }} />

      {/* Duration Filter */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="subtitle2" fontWeight={600} sx={{ mb: 2 }}>
          Duration
        </Typography>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={durationFilter === "all"}
                onChange={() => setDurationFilter("all")}
                size="small"
              />
            }
            label="All Durations"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={durationFilter === "short"}
                onChange={() => setDurationFilter("short")}
                size="small"
              />
            }
            label="1-5 Days"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={durationFilter === "medium"}
                onChange={() => setDurationFilter("medium")}
                size="small"
              />
            }
            label="6-7 Days"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={durationFilter === "long"}
                onChange={() => setDurationFilter("long")}
                size="small"
              />
            }
            label="8+ Days"
          />
        </FormGroup>
      </Box>

      {/* Reset Filters */}
      <Button
        variant="outlined"
        fullWidth
        onClick={() => {
          setSelectedCategory("all");
          setPriceRange([0, 5000]);
          setDurationFilter("all");
          setSearchQuery("");
        }}
        sx={{
          borderRadius: 1.5,
          textTransform: "none",
          fontWeight: 600,
          py: 1.2,
        }}
      >
        Reset All Filters
      </Button>
    </Box>
  );

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: alpha(theme.palette.background.default, 0.98),
        pt: { xs: 10, md: 8 },
        pb: 10,
      }}
    >
      {/* Hero Section with Background Image */}
      <Box
        sx={{
          position: "relative",
          minHeight: { xs: "600px", md: "700px" },
          display: "flex",
          alignItems: "center",
          mb: 8,
          overflow: "hidden",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage:
              "url(https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1920&h=1080&fit=crop&q=80)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: { xs: "scroll", md: "fixed" },
            zIndex: 0,
          },
          "&::after": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `linear-gradient(135deg,
              ${alpha(theme.palette.primary.dark, 0.85)} 0%,
              ${alpha(theme.palette.primary.main, 0.75)} 50%,
              ${alpha(theme.palette.secondary.main, 0.7)} 100%)`,
            zIndex: 1,
          },
        }}
      >
        <Container
          maxWidth="lg"
          sx={{ position: "relative", zIndex: 2, py: { xs: 8, md: 10 } }}
        >
          <Box sx={{ textAlign: "center", mb: 6 }}>
            {/* Animated Badge */}
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1,
                px: 2.5,
                py: 1,
                mb: 3,
                borderRadius: "50px",
                bgcolor: "rgba(255, 255, 255, 0.15)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                animation: "fadeInDown 0.8s ease-out",
                "@keyframes fadeInDown": {
                  from: { opacity: 0, transform: "translateY(-20px)" },
                  to: { opacity: 1, transform: "translateY(0)" },
                },
              }}
            >
              <Box
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  bgcolor: "#4ade80",
                  animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
                  "@keyframes pulse": {
                    "0%, 100%": { opacity: 1 },
                    "50%": { opacity: 0.5 },
                  },
                }}
              />
              <Typography
                variant="caption"
                sx={{
                  color: "white",
                  fontWeight: 600,
                  fontSize: "0.875rem",
                  letterSpacing: "0.5px",
                }}
              >
                200+ Educational Tours Worldwide
              </Typography>
            </Box>

            {/* Main Heading */}
            <Typography
              variant="h1"
              sx={{
                fontWeight: 800,
                mb: 3,
                fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4.5rem" },
                color: "white",
                lineHeight: 1.1,
                textShadow: "0 4px 20px rgba(0,0,0,0.3)",
                animation: "fadeInUp 1s ease-out",
                "@keyframes fadeInUp": {
                  from: { opacity: 0, transform: "translateY(30px)" },
                  to: { opacity: 1, transform: "translateY(0)" },
                },
              }}
            >
              Discover Your Next
              <br />
              <Box
                component="span"
                sx={{
                  background: "linear-gradient(90deg, #fff 0%, #e0e7ff 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Adventure
              </Box>
            </Typography>

            <Typography
              variant="h5"
              sx={{
                maxWidth: 700,
                mx: "auto",
                mb: 5,
                fontSize: { xs: "1.1rem", md: "1.35rem" },
                color: "rgba(255, 255, 255, 0.95)",
                lineHeight: 1.6,
                fontWeight: 400,
                textShadow: "0 2px 10px rgba(0,0,0,0.2)",
                animation: "fadeInUp 1s ease-out 0.2s both",
              }}
            >
              Explore our curated collection of educational tours across the
              globe. Create unforgettable learning experiences for your
              students.
            </Typography>

            {/* Modern Search Bar */}
            <Box
              sx={{
                maxWidth: 750,
                mx: "auto",
                display: "flex",
                gap: 2,
                flexDirection: { xs: "column", sm: "row" },
                animation: "fadeInUp 1s ease-out 0.4s both",
              }}
            >
              <TextField
                fullWidth
                placeholder="Search destinations, tours, or experiences..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <IconSearch size={22} color="rgba(0,0,0,0.6)" />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    bgcolor: "rgba(255, 255, 255, 0.98)",
                    backdropFilter: "blur(20px)",
                    borderRadius: 3,
                    border: "2px solid transparent",
                    fontSize: "1rem",
                    py: 0.5,
                    boxShadow: "0 8px 32px rgba(0,0,0,0.15)",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      bgcolor: "white",
                      borderColor: "rgba(255,255,255,0.5)",
                      boxShadow: "0 12px 40px rgba(0,0,0,0.2)",
                    },
                    "&.Mui-focused": {
                      bgcolor: "white",
                      borderColor: "white",
                      boxShadow: "0 12px 48px rgba(0,0,0,0.25)",
                    },
                    "& fieldset": {
                      border: "none",
                    },
                  },
                }}
              />
              <Button
                variant="contained"
                startIcon={<IconFilter size={20} />}
                onClick={() => setFilterDrawerOpen(true)}
                sx={{
                  display: { md: "none" },
                  minWidth: 140,
                  borderRadius: 3,
                  textTransform: "none",
                  fontWeight: 700,
                  fontSize: "1rem",
                  py: 1.75,
                  bgcolor: "white",
                  color: theme.palette.primary.main,
                  boxShadow: "0 8px 32px rgba(0,0,0,0.15)",
                  "&:hover": {
                    bgcolor: "white",
                    boxShadow: "0 12px 40px rgba(0,0,0,0.25)",
                    transform: "translateY(-2px)",
                  },
                }}
              >
                Filters
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>

      <Container maxWidth="xl">
        <Grid container spacing={4}>
          {/* Filter Sidebar - Desktop */}
          <Grid
            size={{ xs: 12, md: 3 }}
            sx={{ display: { xs: "none", md: "block" } }}
          >
            <Paper
              elevation={0}
              sx={{
                position: "sticky",
                top: 100,
                border: `1px solid ${alpha(theme.palette.divider, 0.08)}`,
                borderRadius: 4,
                boxShadow: `0 4px 20px ${alpha(
                  theme.palette.common.black,
                  0.06
                )}`,
                overflow: "hidden",
              }}
            >
              <FilterSection />
            </Paper>
          </Grid>

          {/* Tours Grid */}
          <Grid size={{ xs: 12, md: 9 }}>
            {/* Sort and Results Count */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 5,
                flexWrap: "wrap",
                gap: 2,
                p: 3,
                bgcolor: "background.paper",
                borderRadius: 3,
                border: `1px solid ${alpha(theme.palette.divider, 0.08)}`,
                boxShadow: `0 2px 12px ${alpha(
                  theme.palette.common.black,
                  0.04
                )}`,
              }}
            >
              <Box>
                <Typography
                  variant="h6"
                  fontWeight={700}
                  color="text.primary"
                  sx={{ mb: 0.5 }}
                >
                  {filteredTours.length} Tours Found
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  fontWeight={500}
                >
                  Explore amazing destinations
                </Typography>
              </Box>
              <FormControl size="medium" sx={{ minWidth: 220 }}>
                <InputLabel sx={{ fontWeight: 600 }}>Sort By</InputLabel>
                <Select
                  value={sortBy}
                  label="Sort By"
                  onChange={(e) => setSortBy(e.target.value)}
                  sx={{
                    borderRadius: 2,
                    fontWeight: 600,
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: alpha(theme.palette.divider, 0.2),
                    },
                  }}
                >
                  <MenuItem value="popular">Most Popular</MenuItem>
                  <MenuItem value="price-low">Price: Low to High</MenuItem>
                  <MenuItem value="price-high">Price: High to Low</MenuItem>
                  <MenuItem value="rating">Highest Rated</MenuItem>
                  <MenuItem value="duration">Duration</MenuItem>
                </Select>
              </FormControl>
            </Box>

            {/* Tour Cards - Compact Modern Design */}
            <Grid container spacing={3}>
              {filteredTours.map((tour) => (
                <Grid size={{ xs: 12, sm: 6, lg: 4 }} key={tour.id}>
                  <Card
                    elevation={0}
                    onClick={() => {
                      window.location.hash = `destinations/${tour.id}`;
                    }}
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      borderRadius: 3,
                      overflow: "hidden",
                      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                      position: "relative",
                      bgcolor: "background.paper",
                      border: `1px solid ${alpha(theme.palette.divider, 0.08)}`,
                      boxShadow: `0 2px 12px ${alpha(
                        theme.palette.common.black,
                        0.04
                      )}`,
                      cursor: "pointer",
                      "&:hover": {
                        transform: "translateY(-6px)",
                        boxShadow: `0 12px 36px ${alpha(
                          theme.palette.common.black,
                          0.1
                        )}`,
                        border: `1px solid ${alpha(
                          theme.palette.primary.main,
                          0.25
                        )}`,
                        "& .card-image": {
                          transform: "scale(1.06)",
                        },
                        "& .cta-button": {
                          bgcolor: theme.palette.primary.dark,
                        },
                      },
                    }}
                  >
                    {/* Image Container - Compact */}
                    <Box
                      sx={{
                        position: "relative",
                        width: "100%",
                        paddingTop: "56%",
                        overflow: "hidden",
                        bgcolor: alpha(theme.palette.grey[200], 0.3),
                      }}
                    >
                      <CardMedia
                        component="img"
                        image={tour.image}
                        alt={tour.title}
                        className="card-image"
                        sx={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          transition:
                            "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                        }}
                      />
                      {/* Subtle Gradient Overlay */}
                      <Box
                        sx={{
                          position: "absolute",
                          bottom: 0,
                          left: 0,
                          right: 0,
                          height: "40%",
                          background: `linear-gradient(to top,
                            ${alpha(theme.palette.common.black, 0.6)} 0%,
                            transparent 100%)`,
                        }}
                      />

                      {/* Featured Badge */}
                      {tour.featured && (
                        <Chip
                          label="Featured"
                          size="small"
                          sx={{
                            position: "absolute",
                            top: 12,
                            left: 12,
                            bgcolor: theme.palette.warning.main,
                            color: "#000",
                            fontWeight: 700,
                            fontSize: "0.75rem",
                            height: 26,
                            px: 1.25,
                            zIndex: 2,
                          }}
                        />
                      )}

                      {/* Favorite Button */}
                      <IconButton
                        size="small"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleToggleFavorite(tour.id);
                        }}
                        sx={{
                          position: "absolute",
                          top: 12,
                          right: 12,
                          bgcolor: "rgba(255, 255, 255, 0.9)",
                          backdropFilter: "blur(8px)",
                          boxShadow: `0 2px 8px ${alpha("#000000", 0.1)}`,
                          width: 36,
                          height: 36,
                          zIndex: 2,
                          "&:hover": {
                            bgcolor: "white",
                            transform: "scale(1.1)",
                            boxShadow: `0 4px 12px ${alpha("#000000", 0.15)}`,
                          },
                          transition: "all 0.2s ease",
                        }}
                      >
                        {favorites.includes(tour.id) ? (
                          <IconHeartFilled
                            size={18}
                            color={theme.palette.error.main}
                          />
                        ) : (
                          <IconHeart
                            size={18}
                            color={theme.palette.text.secondary}
                            strokeWidth={2}
                          />
                        )}
                      </IconButton>

                      {/* Location Badge */}
                      <Box
                        sx={{
                          position: "absolute",
                          bottom: 12,
                          left: 12,
                          display: "flex",
                          alignItems: "center",
                          gap: 0.75,
                          bgcolor: "rgba(255, 255, 255, 0.95)",
                          backdropFilter: "blur(10px)",
                          px: 1.5,
                          py: 0.75,
                          borderRadius: 2,
                          zIndex: 2,
                        }}
                      >
                        <IconMapPin
                          size={14}
                          color={theme.palette.text.secondary}
                          strokeWidth={2}
                        />
                        <Typography
                          variant="body2"
                          sx={{
                            color: "text.primary",
                            fontWeight: 600,
                            fontSize: "0.8rem",
                          }}
                        >
                          {tour.destination}
                        </Typography>
                      </Box>
                    </Box>

                    <CardContent
                      sx={{
                        flexGrow: 1,
                        p: 2.5,
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      {/* Category Chip */}
                      <Chip
                        label={
                          categories.find((c) => c.id === tour.category)
                            ?.name || tour.category
                        }
                        size="small"
                        sx={{
                          mb: 1.5,
                          bgcolor: alpha(theme.palette.primary.main, 0.1),
                          color: theme.palette.primary.main,
                          fontWeight: 600,
                          fontSize: "0.7rem",
                          height: 24,
                          px: 1,
                          textTransform: "capitalize",
                          alignSelf: "flex-start",
                        }}
                      />

                      {/* Title */}
                      <Typography
                        variant="h6"
                        fontWeight={700}
                        sx={{
                          mb: 1.5,
                          lineHeight: 1.3,
                          fontSize: "1.15rem",
                          color: "text.primary",
                          display: "-webkit-box",
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                          minHeight: "3rem",
                        }}
                      >
                        {tour.title}
                      </Typography>

                      {/* Rating and Price Section */}
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          mb: 2,
                        }}
                      >
                        {/* Rating */}
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 0.75,
                          }}
                        >
                          <Rating
                            value={tour.rating}
                            precision={0.1}
                            size="small"
                            readOnly
                            sx={{
                              "& .MuiRating-iconFilled": {
                                color: "#FFB800",
                              },
                              "& .MuiRating-iconEmpty": {
                                color: alpha("#FFB800", 0.15),
                              },
                            }}
                          />
                          <Typography
                            variant="body2"
                            fontWeight={700}
                            color="text.primary"
                            sx={{ fontSize: "0.9rem" }}
                          >
                            {tour.rating}
                          </Typography>
                          <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{ fontSize: "0.8rem" }}
                          >
                            ({tour.reviews})
                          </Typography>
                        </Box>

                        {/* Price */}
                        <Box sx={{ textAlign: "right" }}>
                          <Typography
                            variant="h6"
                            fontWeight={700}
                            color="primary"
                            sx={{
                              fontSize: "1.4rem",
                              lineHeight: 1,
                            }}
                          >
                            ${tour.price.toLocaleString()}
                          </Typography>
                          <Typography
                            variant="caption"
                            color="text.secondary"
                            sx={{ fontSize: "0.7rem" }}
                          >
                            per person
                          </Typography>
                        </Box>
                      </Box>

                      {/* CTA Button */}
                      <Button
                        variant="contained"
                        fullWidth
                        endIcon={<IconArrowRight size={18} strokeWidth={2} />}
                        className="cta-button"
                        sx={{
                          borderRadius: 2,
                          textTransform: "none",
                          fontWeight: 600,
                          py: 1.25,
                          fontSize: "0.9rem",
                          bgcolor: theme.palette.primary.main,
                          boxShadow: "none",
                          "&:hover": {
                            bgcolor: theme.palette.primary.dark,
                            boxShadow: `0 4px 12px ${alpha(
                              theme.palette.primary.main,
                              0.3
                            )}`,
                          },
                          transition: "all 0.2s ease",
                        }}
                      >
                        View Details
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>

            {/* No Results */}
            {filteredTours.length === 0 && (
              <Paper
                elevation={0}
                sx={{
                  p: 10,
                  textAlign: "center",
                  border: `1px solid ${alpha(theme.palette.divider, 0.08)}`,
                  borderRadius: 4,
                  bgcolor: "background.paper",
                  boxShadow: `0 4px 20px ${alpha(
                    theme.palette.common.black,
                    0.04
                  )}`,
                }}
              >
                <Typography
                  variant="h3"
                  sx={{ mb: 2, fontSize: "3rem", opacity: 0.3 }}
                >
                  🔍
                </Typography>
                <Typography
                  variant="h5"
                  fontWeight={700}
                  sx={{ mb: 2, color: "text.primary" }}
                >
                  No tours found
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ mb: 3 }}
                >
                  Try adjusting your filters or search query to find more
                  destinations
                </Typography>
                <Button
                  variant="outlined"
                  onClick={() => {
                    setSelectedCategory("all");
                    setPriceRange([0, 5000]);
                    setDurationFilter("all");
                    setSearchQuery("");
                  }}
                  sx={{
                    borderRadius: 2,
                    textTransform: "none",
                    fontWeight: 600,
                    px: 4,
                    py: 1.25,
                  }}
                >
                  Reset Filters
                </Button>
              </Paper>
            )}
          </Grid>
        </Grid>
      </Container>

      {/* Mobile Filter Drawer */}
      <Drawer
        anchor="left"
        open={filterDrawerOpen}
        onClose={() => setFilterDrawerOpen(false)}
        sx={{ display: { md: "none" } }}
      >
        <Box sx={{ width: 300 }}>
          <FilterSection />
        </Box>
      </Drawer>
    </Box>
  );
});

// Display name for debugging
Destinations.displayName = "Destinations";

export default Destinations;
