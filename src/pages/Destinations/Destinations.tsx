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
  IconClock,
  IconUsers,
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
        bgcolor: "background.default",
        pt: { xs: 10, md: 8 },
        pb: 8,
      }}
    >
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: "background.paper",
          borderBottom: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
          py: { xs: 6, md: 8 },
          mb: 6,
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", mb: 4 }}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 700,
                mb: 2,
                fontSize: { xs: "2rem", md: "2.75rem" },
                color: "text.primary",
              }}
            >
              Discover Your Next Adventure
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ maxWidth: 600, mx: "auto", mb: 4, fontSize: "1.1rem" }}
            >
              Explore our curated collection of educational tours across the
              globe. Find the perfect experience for your students.
            </Typography>

            {/* Search Bar */}
            <Box
              sx={{
                maxWidth: 700,
                mx: "auto",
                display: "flex",
                gap: 2,
                flexDirection: { xs: "column", sm: "row" },
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
                      <IconSearch
                        size={20}
                        color={theme.palette.text.secondary}
                      />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  bgcolor: "background.paper",
                  borderRadius: 2,
                  "& .MuiOutlinedInput-root": {
                    borderRadius: 2,
                    border: `1px solid ${alpha(theme.palette.divider, 0.2)}`,
                    "&:hover": {
                      borderColor: theme.palette.primary.main,
                    },
                    "&.Mui-focused": {
                      borderColor: theme.palette.primary.main,
                    },
                  },
                }}
              />
              <Button
                variant="outlined"
                startIcon={<IconFilter size={18} />}
                onClick={() => setFilterDrawerOpen(true)}
                sx={{
                  display: { md: "none" },
                  minWidth: 120,
                  borderRadius: 2,
                  textTransform: "none",
                  fontWeight: 600,
                  borderColor: alpha(theme.palette.divider, 0.2),
                }}
              >
                Filters
              </Button>
            </Box>
          </Box>

          {/* Stats */}
          <Grid container spacing={3} sx={{ maxWidth: 900, mx: "auto" }}>
            {[
              { label: "Countries", value: "50+" },
              { label: "Tours Available", value: "200+" },
              { label: "Happy Students", value: "15K+" },
              { label: "Expert Guides", value: "200+" },
            ].map((stat, index) => (
              <Grid size={{ xs: 6, sm: 3 }} key={index}>
                <Box
                  sx={{
                    textAlign: "center",
                    p: 2,
                  }}
                >
                  <Typography
                    variant="h4"
                    fontWeight={700}
                    color="primary"
                    sx={{ mb: 0.5 }}
                  >
                    {stat.value}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {stat.label}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
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
                border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
                borderRadius: 2,
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
                mb: 4,
                flexWrap: "wrap",
                gap: 2,
              }}
            >
              <Typography
                variant="body1"
                color="text.secondary"
                fontWeight={500}
              >
                Showing {filteredTours.length} tours
              </Typography>
              <FormControl size="small" sx={{ minWidth: 200 }}>
                <InputLabel>Sort By</InputLabel>
                <Select
                  value={sortBy}
                  label="Sort By"
                  onChange={(e) => setSortBy(e.target.value)}
                  sx={{ borderRadius: 1.5 }}
                >
                  <MenuItem value="popular">Most Popular</MenuItem>
                  <MenuItem value="price-low">Price: Low to High</MenuItem>
                  <MenuItem value="price-high">Price: High to Low</MenuItem>
                  <MenuItem value="rating">Highest Rated</MenuItem>
                  <MenuItem value="duration">Duration</MenuItem>
                </Select>
              </FormControl>
            </Box>

            {/* Tour Cards */}
            <Grid container spacing={3}>
              {filteredTours.map((tour) => (
                <Grid size={{ xs: 12, sm: 6, lg: 4 }} key={tour.id}>
                  <Card
                    elevation={0}
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      border: `1px solid ${alpha(theme.palette.divider, 0.08)}`,
                      borderRadius: 3,
                      overflow: "hidden",
                      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                      position: "relative",
                      bgcolor: "background.paper",
                      boxShadow: `0 2px 8px ${alpha(
                        theme.palette.common.black,
                        0.04
                      )}`,
                      "&:hover": {
                        transform: "translateY(-8px)",
                        boxShadow: `0 12px 32px ${alpha(
                          theme.palette.common.black,
                          0.12
                        )}`,
                        borderColor: alpha(theme.palette.primary.main, 0.2),
                      },
                    }}
                  >
                    {/* Image Container */}
                    <Box
                      sx={{
                        position: "relative",
                        width: "100%",
                        paddingTop: "65%",
                        overflow: "hidden",
                        bgcolor: alpha(theme.palette.grey[300], 0.2),
                      }}
                    >
                      <CardMedia
                        component="img"
                        image={tour.image}
                        alt={tour.title}
                        sx={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          transition:
                            "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                        }}
                      />
                      {/* Dark Overlay at Bottom */}
                      <Box
                        sx={{
                          position: "absolute",
                          bottom: 0,
                          left: 0,
                          right: 0,
                          height: "50%",
                          background: `linear-gradient(to top, ${alpha(
                            theme.palette.common.black,
                            0.7
                          )} 0%, ${alpha(
                            theme.palette.common.black,
                            0.4
                          )} 50%, transparent 100%)`,
                        }}
                      />

                      {/* Featured Badge - Top Left */}
                      {tour.featured && (
                        <Chip
                          label="Featured"
                          size="small"
                          sx={{
                            position: "absolute",
                            top: 16,
                            left: 16,
                            bgcolor: theme.palette.primary.main,
                            color: "white",
                            fontWeight: 700,
                            fontSize: "0.75rem",
                            height: 28,
                            px: 1,
                            boxShadow: `0 2px 8px ${alpha(
                              theme.palette.primary.main,
                              0.4
                            )}`,
                          }}
                        />
                      )}

                      {/* Favorite Button - Top Right */}
                      <IconButton
                        size="small"
                        onClick={() => handleToggleFavorite(tour.id)}
                        sx={{
                          position: "absolute",
                          top: 16,
                          right: 16,
                          bgcolor: "rgba(255, 255, 255, 0.98)",
                          backdropFilter: "blur(10px)",
                          boxShadow: `0 2px 12px ${alpha("#000000", 0.15)}`,
                          width: 36,
                          height: 36,
                          "&:hover": {
                            bgcolor: "white",
                            transform: "scale(1.1)",
                            boxShadow: `0 4px 16px ${alpha("#000000", 0.2)}`,
                          },
                          transition: "all 0.2s ease",
                        }}
                      >
                        {favorites.includes(tour.id) ? (
                          <IconHeartFilled
                            size={20}
                            color={theme.palette.error.main}
                          />
                        ) : (
                          <IconHeart
                            size={20}
                            color={theme.palette.text.secondary}
                            strokeWidth={2}
                          />
                        )}
                      </IconButton>

                      {/* Location Badge - Bottom Left on Image */}
                      <Box
                        sx={{
                          position: "absolute",
                          bottom: 16,
                          left: 16,
                          display: "flex",
                          alignItems: "center",
                          gap: 0.75,
                        }}
                      >
                        <IconMapPin size={18} color="white" strokeWidth={2} />
                        <Typography
                          variant="body2"
                          sx={{
                            color: "white",
                            fontWeight: 600,
                            fontSize: "0.875rem",
                            textShadow: `0 2px 4px ${alpha("#000000", 0.4)}`,
                            letterSpacing: "0.02em",
                          }}
                        >
                          {tour.destination}
                        </Typography>
                      </Box>
                    </Box>

                    <CardContent
                      sx={{
                        flexGrow: 1,
                        p: 3.5,
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
                          mb: 2,
                          bgcolor: alpha(theme.palette.primary.main, 0.1),
                          color: theme.palette.primary.dark,
                          fontWeight: 600,
                          fontSize: "0.75rem",
                          height: 26,
                          textTransform: "none",
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
                          fontSize: "1.25rem",
                          color: "text.primary",
                          minHeight: "3.25rem",
                        }}
                      >
                        {tour.title}
                      </Typography>

                      {/* Description */}
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{
                          mb: 2.5,
                          lineHeight: 1.6,
                          fontSize: "0.9375rem",
                          display: "-webkit-box",
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                          flexGrow: 1,
                        }}
                      >
                        {tour.description}
                      </Typography>

                      {/* Info Icons Row */}
                      <Stack direction="row" spacing={2.5} sx={{ mb: 3 }}>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 0.75,
                          }}
                        >
                          <IconClock
                            size={18}
                            color={theme.palette.text.secondary}
                          />
                          <Typography
                            variant="body2"
                            color="text.secondary"
                            fontWeight={500}
                            sx={{ fontSize: "0.875rem" }}
                          >
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
                          <IconUsers
                            size={18}
                            color={theme.palette.text.secondary}
                          />
                          <Typography
                            variant="body2"
                            color="text.secondary"
                            fontWeight={500}
                            sx={{ fontSize: "0.875rem" }}
                          >
                            {tour.participants}
                          </Typography>
                        </Box>
                      </Stack>

                      {/* Divider */}
                      <Divider
                        sx={{
                          mb: 2.5,
                          borderColor: alpha(theme.palette.divider, 0.1),
                        }}
                      />

                      {/* Rating and Price Section */}
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "flex-start",
                          mb: 2.5,
                        }}
                      >
                        {/* Rating */}
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 1,
                            flexWrap: "wrap",
                          }}
                        >
                          <Rating
                            value={tour.rating}
                            precision={0.1}
                            size="small"
                            readOnly
                            sx={{
                              "& .MuiRating-iconFilled": {
                                color: theme.palette.warning.main,
                              },
                              "& .MuiRating-iconEmpty": {
                                color: alpha(theme.palette.warning.main, 0.2),
                              },
                            }}
                          />
                          <Typography
                            variant="body2"
                            fontWeight={700}
                            color="text.primary"
                            sx={{ fontSize: "0.9375rem" }}
                          >
                            {tour.rating}
                          </Typography>
                          <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{ fontSize: "0.875rem" }}
                          >
                            ({tour.reviews})
                          </Typography>
                        </Box>

                        {/* Price */}
                        <Box sx={{ textAlign: "right" }}>
                          <Typography
                            variant="h5"
                            fontWeight={700}
                            color="primary"
                            sx={{
                              fontSize: "1.5rem",
                              lineHeight: 1.2,
                              mb: 0.25,
                            }}
                          >
                            ${tour.price.toLocaleString()}
                          </Typography>
                          <Typography
                            variant="caption"
                            color="text.secondary"
                            sx={{ fontSize: "0.75rem", fontWeight: 500 }}
                          >
                            per person
                          </Typography>
                        </Box>
                      </Box>

                      {/* CTA Button */}
                      <Button
                        variant="contained"
                        fullWidth
                        endIcon={<IconArrowRight size={20} />}
                        sx={{
                          borderRadius: 2,
                          textTransform: "none",
                          fontWeight: 600,
                          py: 1.5,
                          fontSize: "0.9375rem",
                          boxShadow: `0 4px 12px ${alpha(
                            theme.palette.primary.main,
                            0.3
                          )}`,
                          "&:hover": {
                            boxShadow: `0 6px 16px ${alpha(
                              theme.palette.primary.main,
                              0.4
                            )}`,
                            transform: "translateY(-1px)",
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
                  p: 8,
                  textAlign: "center",
                  border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
                  borderRadius: 2,
                  bgcolor: "background.paper",
                }}
              >
                <Typography variant="h6" fontWeight={600} sx={{ mb: 1 }}>
                  No tours found
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Try adjusting your filters or search query
                </Typography>
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
