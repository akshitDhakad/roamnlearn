import { memo } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  Paper,
  Stack,
  useTheme,
  alpha,
  Fade,
} from "@mui/material";
import {
  IconBuildingMonument,
  IconMountain,
  IconPlant,
  IconBallFootball,
  IconToolsKitchen2,
  IconYoga,
  IconChevronRight,
} from "@tabler/icons-react";

/**
 * Icon mapping for tour categories
 */
const CATEGORY_ICONS = {
  "building-monument": IconBuildingMonument,
  mountain: IconMountain,
  plant: IconPlant,
  "ball-football": IconBallFootball,
  "tools-kitchen-2": IconToolsKitchen2,
  yoga: IconYoga,
} as const;

/**
 * Tour category interface
 */
interface TourCategory {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  tours: {
    label: string;
    path: string;
  }[];
}

/**
 * Props interface for MegaMenu component
 */
interface MegaMenuProps {
  /** Categories to display in the mega menu */
  categories: TourCategory[];
  /** Whether the menu is open */
  open: boolean;
  /** Callback when a link is clicked */
  onLinkClick?: (path: string) => void;
}

/**
 * MegaMenu component - Large dropdown menu with multiple categories
 *
 * @component
 * @description Beautiful mega menu dropdown that displays tour categories
 * with icons, descriptions, and multiple links per category.
 *
 * Features:
 * - Responsive grid layout
 * - Hover effects on categories and links
 * - Icon-based visual hierarchy
 * - Color-coded categories
 * - Smooth animations
 *
 * @example
 * ```tsx
 * <MegaMenu
 *   categories={TOUR_CATEGORIES}
 *   open={isOpen}
 *   onLinkClick={handleLinkClick}
 * />
 * ```
 */
const MegaMenu = memo(({ categories, open, onLinkClick }: MegaMenuProps) => {
  const theme = useTheme();

  if (!open) return null;

  /**
   * Handle link click
   */
  const handleLinkClick = (path: string) => (event: React.MouseEvent) => {
    event.preventDefault();
    onLinkClick?.(path);
  };

  return (
    <Fade in={open} timeout={300}>
      <Paper
        elevation={0}
        sx={{
          position: "absolute",
          top: "100%",
          left: 0,
          right: 0,
          mt: 0,
          py: 4,
          borderRadius: 0,
          borderTop: `3px solid ${theme.palette.primary.main}`,
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.12)",
          backgroundColor: "background.paper",
          zIndex: theme.zIndex.appBar + 1,
        }}
      >
        <Container maxWidth="xl">
          <Grid container spacing={3}>
            {categories.map((category) => {
              const IconComponent =
                CATEGORY_ICONS[category.icon as keyof typeof CATEGORY_ICONS];

              return (
                <Grid
                  size={{ xs: 12, sm: 6, md: 4, lg: 2 }}
                  key={category.id}
                >
                  <Box
                    sx={{
                      p: 2.5,
                      borderRadius: 2,
                      height: "100%",
                      transition: theme.transitions.create(
                        ["background-color", "transform", "box-shadow"],
                        { duration: theme.transitions.duration.short }
                      ),
                      "&:hover": {
                        backgroundColor: alpha(category.color, 0.04),
                        transform: "translateY(-2px)",
                        boxShadow: `0 4px 12px ${alpha(category.color, 0.15)}`,
                      },
                    }}
                  >
                    {/* Category Header */}
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1.5,
                        mb: 1.5,
                      }}
                    >
                      <Box
                        sx={{
                          width: 40,
                          height: 40,
                          borderRadius: 2,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          backgroundColor: alpha(category.color, 0.1),
                          color: category.color,
                          transition: theme.transitions.create(
                            ["background-color", "transform"],
                            { duration: theme.transitions.duration.short }
                          ),
                          "&:hover": {
                            backgroundColor: alpha(category.color, 0.2),
                            transform: "scale(1.1)",
                          },
                        }}
                      >
                        {IconComponent && <IconComponent size={22} />}
                      </Box>
                      <Box sx={{ flex: 1 }}>
                        <Typography
                          variant="subtitle2"
                          sx={{
                            fontWeight: 700,
                            color: "text.primary",
                            fontSize: "0.95rem",
                            mb: 0.25,
                          }}
                        >
                          {category.title}
                        </Typography>
                        <Typography
                          variant="caption"
                          sx={{
                            color: "text.secondary",
                            fontSize: "0.75rem",
                            lineHeight: 1.3,
                          }}
                        >
                          {category.description}
                        </Typography>
                      </Box>
                    </Box>

                    {/* Category Links */}
                    <Stack spacing={0.5} sx={{ mt: 2 }}>
                      {category.tours.map((tour) => (
                        <Link
                          key={tour.path}
                          href={tour.path}
                          onClick={handleLinkClick(tour.path)}
                          underline="none"
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            py: 1,
                            px: 1.5,
                            borderRadius: 1,
                            color: "text.secondary",
                            fontSize: "0.875rem",
                            transition: theme.transitions.create(
                              ["background-color", "color", "padding-left"],
                              { duration: theme.transitions.duration.shorter }
                            ),
                            "&:hover": {
                              backgroundColor: alpha(category.color, 0.08),
                              color: category.color,
                              pl: 2,
                              "& .chevron-icon": {
                                opacity: 1,
                                transform: "translateX(2px)",
                              },
                            },
                            "&:focus-visible": {
                              outline: `2px solid ${category.color}`,
                              outlineOffset: 2,
                            },
                          }}
                        >
                          <span>{tour.label}</span>
                          <IconChevronRight
                            size={16}
                            className="chevron-icon"
                            style={{
                              opacity: 0,
                              transition: theme.transitions.create(
                                ["opacity", "transform"],
                                { duration: theme.transitions.duration.shorter }
                              ),
                            }}
                          />
                        </Link>
                      ))}
                    </Stack>

                    {/* View All Link */}
                    <Link
                      href={`/destinations/${category.id}`}
                      onClick={handleLinkClick(`/destinations/${category.id}`)}
                      underline="none"
                      sx={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 0.5,
                        mt: 2,
                        pt: 2,
                        borderTop: `1px solid ${theme.palette.divider}`,
                        color: category.color,
                        fontSize: "0.875rem",
                        fontWeight: 600,
                        transition: theme.transitions.create(["gap"], {
                          duration: theme.transitions.duration.shorter,
                        }),
                        "&:hover": {
                          gap: 1,
                        },
                        "&:focus-visible": {
                          outline: `2px solid ${category.color}`,
                          outlineOffset: 2,
                          borderRadius: 0.5,
                        },
                      }}
                    >
                      View All
                      <IconChevronRight size={16} />
                    </Link>
                  </Box>
                </Grid>
              );
            })}
          </Grid>

          {/* Featured Tours Section (Optional) */}
          <Box
            sx={{
              mt: 4,
              pt: 3,
              borderTop: `1px solid ${theme.palette.divider}`,
              textAlign: "center",
            }}
          >
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ mb: 2 }}
            >
              Need help choosing? Contact our tour specialists
            </Typography>
            <Stack
              direction="row"
              spacing={2}
              justifyContent="center"
              flexWrap="wrap"
              sx={{ gap: 1 }}
            >
              <Link
                href="/tours/popular"
                onClick={handleLinkClick("/tours/popular")}
                sx={{
                  px: 3,
                  py: 1,
                  borderRadius: 1.5,
                  backgroundColor: alpha(theme.palette.primary.main, 0.08),
                  color: "primary.main",
                  fontWeight: 600,
                  fontSize: "0.875rem",
                  textDecoration: "none",
                  transition: theme.transitions.create(
                    ["background-color", "transform"],
                    { duration: theme.transitions.duration.short }
                  ),
                  "&:hover": {
                    backgroundColor: alpha(theme.palette.primary.main, 0.15),
                    transform: "translateY(-2px)",
                  },
                }}
              >
                Popular Tours
              </Link>
              <Link
                href="/tours/deals"
                onClick={handleLinkClick("/tours/deals")}
                sx={{
                  px: 3,
                  py: 1,
                  borderRadius: 1.5,
                  backgroundColor: alpha(theme.palette.secondary.main, 0.08),
                  color: "secondary.main",
                  fontWeight: 600,
                  fontSize: "0.875rem",
                  textDecoration: "none",
                  transition: theme.transitions.create(
                    ["background-color", "transform"],
                    { duration: theme.transitions.duration.short }
                  ),
                  "&:hover": {
                    backgroundColor: alpha(theme.palette.secondary.main, 0.15),
                    transform: "translateY(-2px)",
                  },
                }}
              >
                Special Deals
              </Link>
              <Link
                href="/contact"
                onClick={handleLinkClick("/contact")}
                sx={{
                  px: 3,
                  py: 1,
                  borderRadius: 1.5,
                  backgroundColor: alpha(theme.palette.text.primary, 0.06),
                  color: "text.primary",
                  fontWeight: 600,
                  fontSize: "0.875rem",
                  textDecoration: "none",
                  transition: theme.transitions.create(
                    ["background-color", "transform"],
                    { duration: theme.transitions.duration.short }
                  ),
                  "&:hover": {
                    backgroundColor: alpha(theme.palette.text.primary, 0.12),
                    transform: "translateY(-2px)",
                  },
                }}
              >
                Contact Us
              </Link>
            </Stack>
          </Box>
        </Container>
      </Paper>
    </Fade>
  );
});

// Display name for debugging
MegaMenu.displayName = "MegaMenu";

export default MegaMenu;
