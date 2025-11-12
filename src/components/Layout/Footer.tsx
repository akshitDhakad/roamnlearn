import { memo, useCallback } from "react";
import {
  Container,
  Grid,
  Typography,
  Link,
  Box,
  Divider,
  IconButton,
  TextField,
  Button,
  Stack,
  useTheme,
  alpha,
} from "@mui/material";
import {
  IconBrandFacebook,
  IconBrandTwitter,
  IconBrandLinkedin,
  IconBrandYoutube,
  IconMail,
  IconPhone,
  IconMapPin,
  IconSend,
} from "@tabler/icons-react";
import { FOOTER_LINKS, APP_NAME, APP_DESCRIPTION } from "../../constants/constants";

/**
 * Social media icon mapping
 */
const SOCIAL_ICONS = {
  "brand-facebook": IconBrandFacebook,
  "brand-twitter": IconBrandTwitter,
  "brand-linkedin": IconBrandLinkedin,
  "brand-youtube": IconBrandYoutube,
} as const;

/**
 * Props interface for Footer component
 */
interface FooterProps {
  /** Show newsletter subscription section */
  showNewsletter?: boolean;
  /** Show contact information */
  showContactInfo?: boolean;
  /** Custom year for copyright (defaults to current year) */
  copyrightYear?: number;
}

/**
 * Enhanced Footer component with links, social media, newsletter, and contact info
 *
 * @component
 * @description Comprehensive footer with:
 * - Responsive grid layout
 * - Company information and branding
 * - Navigation link sections (Company, Resources)
 * - Social media links with hover effects
 * - Newsletter subscription form
 * - Contact information
 * - Copyright and legal links
 * - Full accessibility support
 * - SEO optimization
 *
 * @example
 * ```tsx
 * <Footer
 *   showNewsletter={true}
 *   showContactInfo={true}
 *   copyrightYear={2025}
 * />
 * ```
 */
const Footer = memo(({
  showNewsletter = true,
  showContactInfo = true,
  copyrightYear,
}: FooterProps = {}) => {
  const theme = useTheme();
  const currentYear = copyrightYear || new Date().getFullYear();

  /**
   * Handle newsletter subscription
   */
  const handleNewsletterSubmit = useCallback((event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email");
    // TODO: Implement newsletter subscription
    console.log("Newsletter subscription:", email);
  }, []);

  /**
   * Handle link navigation
   */
  const handleLinkClick = useCallback((path: string) => (event: React.MouseEvent) => {
    event.preventDefault();
    // Simple hash-based navigation (temporary until React Router is implemented)
    if (path === "/about") {
      window.location.hash = "about";
    } else if (path === "/contact") {
      window.location.hash = "contact";
    } else if (path === "/") {
      window.location.hash = "home";
    }
  }, []);

  return (
    <Box
      component="footer"
      role="contentinfo"
      sx={{
        backgroundColor: "background.paper",
        borderTop: `1px solid ${theme.palette.divider}`,
        mt: "auto",
        pt: { xs: 6, md: 8 },
        pb: 3,
      }}
    >
      <Container maxWidth="xl">
        {/* Main Footer Content */}
        <Grid container spacing={{ xs: 4, md: 6 }}>
          {/* Company Info Section */}
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography
              variant="h6"
              component="h2"
              sx={{
                fontWeight: 700,
                mb: 2,
                color: "primary.main",
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              {APP_NAME}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ mb: 3, lineHeight: 1.7 }}
            >
              {APP_DESCRIPTION}. Learn, grow, and achieve your goals with our
              comprehensive courses and expert instructors.
            </Typography>

            {/* Social Media Links */}
            <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
              {FOOTER_LINKS.social.map((social) => {
                const IconComponent = SOCIAL_ICONS[social.icon as keyof typeof SOCIAL_ICONS];
                return (
                  <IconButton
                    key={social.label}
                    href={social.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit our ${social.label} page`}
                    size="small"
                    sx={{
                      color: "text.secondary",
                      border: `1px solid ${theme.palette.divider}`,
                      borderRadius: 1.5,
                      transition: theme.transitions.create(
                        ["color", "background-color", "border-color", "transform"],
                        { duration: theme.transitions.duration.short }
                      ),
                      "&:hover": {
                        color: "primary.main",
                        backgroundColor: alpha(theme.palette.primary.main, 0.08),
                        borderColor: "primary.main",
                        transform: "translateY(-2px)",
                      },
                      "&:focus-visible": {
                        outline: `2px solid ${theme.palette.primary.main}`,
                        outlineOffset: 2,
                      },
                    }}
                  >
                    {IconComponent && <IconComponent size={20} />}
                  </IconButton>
                );
              })}
            </Box>
          </Grid>

          {/* Company Links Section */}
          <Grid size={{ xs: 12, sm: 6, md: 2 }}>
            <Typography
              variant="subtitle1"
              component="h3"
              sx={{ fontWeight: 600, mb: 2, color: "text.primary" }}
            >
              Company
            </Typography>
            <Stack spacing={1.5} component="nav" aria-label="Company links">
              {FOOTER_LINKS.company.map((link) => (
                <Link
                  key={link.label}
                  href={link.path}
                  onClick={handleLinkClick(link.path)}
                  color="text.secondary"
                  underline="none"
                  sx={{
                    fontSize: "0.875rem",
                    display: "block",
                    transition: theme.transitions.create(["color", "transform"], {
                      duration: theme.transitions.duration.short,
                    }),
                    "&:hover": {
                      color: "primary.main",
                      transform: "translateX(4px)",
                    },
                    "&:focus-visible": {
                      outline: `2px solid ${theme.palette.primary.main}`,
                      outlineOffset: 2,
                      borderRadius: 0.5,
                    },
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </Stack>
          </Grid>

          {/* Resources Links Section */}
          <Grid size={{ xs: 12, sm: 6, md: 2 }}>
            <Typography
              variant="subtitle1"
              component="h3"
              sx={{ fontWeight: 600, mb: 2, color: "text.primary" }}
            >
              Resources
            </Typography>
            <Stack spacing={1.5} component="nav" aria-label="Resource links">
              {FOOTER_LINKS.resources.map((link) => (
                <Link
                  key={link.label}
                  href={link.path}
                  onClick={handleLinkClick(link.path)}
                  color="text.secondary"
                  underline="none"
                  sx={{
                    fontSize: "0.875rem",
                    display: "block",
                    transition: theme.transitions.create(["color", "transform"], {
                      duration: theme.transitions.duration.short,
                    }),
                    "&:hover": {
                      color: "primary.main",
                      transform: "translateX(4px)",
                    },
                    "&:focus-visible": {
                      outline: `2px solid ${theme.palette.primary.main}`,
                      outlineOffset: 2,
                      borderRadius: 0.5,
                    },
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </Stack>
          </Grid>

          {/* Contact Info Section */}
          {showContactInfo && (
            <Grid size={{ xs: 12, sm: 6, md: 2 }}>
              <Typography
                variant="subtitle1"
                component="h3"
                sx={{ fontWeight: 600, mb: 2, color: "text.primary" }}
              >
                Contact Us
              </Typography>
              <Stack spacing={2}>
                <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1.5 }}>
                  <IconMail
                    size={18}
                    style={{ marginTop: 2, color: theme.palette.text.secondary }}
                  />
                  <Link
                    href="mailto:info@roamlearn.com"
                    color="text.secondary"
                    underline="hover"
                    sx={{
                      fontSize: "0.875rem",
                      "&:hover": { color: "primary.main" },
                    }}
                  >
                    info@roamlearn.com
                  </Link>
                </Box>
                <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1.5 }}>
                  <IconPhone
                    size={18}
                    style={{ marginTop: 2, color: theme.palette.text.secondary }}
                  />
                  <Link
                    href="tel:+1234567890"
                    color="text.secondary"
                    underline="hover"
                    sx={{
                      fontSize: "0.875rem",
                      "&:hover": { color: "primary.main" },
                    }}
                  >
                    +1 (234) 567-890
                  </Link>
                </Box>
                <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1.5 }}>
                  <IconMapPin
                    size={18}
                    style={{ marginTop: 2, color: theme.palette.text.secondary }}
                  />
                  <Typography variant="body2" color="text.secondary">
                    123 Education Street
                    <br />
                    New York, NY 10001
                  </Typography>
                </Box>
              </Stack>
            </Grid>
          )}

          {/* Newsletter Section */}
          {showNewsletter && (
            <Grid size={{ xs: 12, md: 3 }}>
              <Typography
                variant="subtitle1"
                component="h3"
                sx={{ fontWeight: 600, mb: 2, color: "text.primary" }}
              >
                Stay Updated
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                Subscribe to our newsletter for the latest courses and updates.
              </Typography>
              <Box
                component="form"
                onSubmit={handleNewsletterSubmit}
                sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}
              >
                <TextField
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  required
                  size="small"
                  fullWidth
                  inputProps={{
                    "aria-label": "Email address for newsletter",
                  }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 1.5,
                      backgroundColor: alpha(theme.palette.background.default, 0.5),
                      transition: theme.transitions.create(["background-color", "border-color"], {
                        duration: theme.transitions.duration.short,
                      }),
                      "&:hover": {
                        backgroundColor: theme.palette.background.default,
                      },
                      "&.Mui-focused": {
                        backgroundColor: theme.palette.background.default,
                      },
                    },
                  }}
                />
                <Button
                  type="submit"
                  variant="contained"
                  endIcon={<IconSend size={18} />}
                  fullWidth
                  sx={{
                    borderRadius: 1.5,
                    textTransform: "none",
                    fontWeight: 600,
                    py: 1,
                    boxShadow: "none",
                    "&:hover": {
                      boxShadow: `0 4px 12px ${alpha(theme.palette.primary.main, 0.3)}`,
                    },
                  }}
                >
                  Subscribe
                </Button>
              </Box>
            </Grid>
          )}
        </Grid>

        <Divider sx={{ my: 4 }} />

        {/* Bottom Footer Section */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            alignItems: { xs: "flex-start", sm: "center" },
            gap: 2,
          }}
        >
          {/* Copyright */}
          <Typography variant="body2" color="text.secondary">
            © {currentYear} {APP_NAME}. All rights reserved.
          </Typography>

          {/* Legal Links */}
          <Box
            component="nav"
            aria-label="Legal links"
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: { xs: 2, sm: 3 },
            }}
          >
            <Link
              href="/privacy"
              onClick={handleLinkClick("/privacy")}
              color="text.secondary"
              underline="hover"
              sx={{
                fontSize: "0.875rem",
                transition: theme.transitions.create(["color"], {
                  duration: theme.transitions.duration.short,
                }),
                "&:hover": {
                  color: "primary.main",
                },
                "&:focus-visible": {
                  outline: `2px solid ${theme.palette.primary.main}`,
                  outlineOffset: 2,
                  borderRadius: 0.5,
                },
              }}
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              onClick={handleLinkClick("/terms")}
              color="text.secondary"
              underline="hover"
              sx={{
                fontSize: "0.875rem",
                transition: theme.transitions.create(["color"], {
                  duration: theme.transitions.duration.short,
                }),
                "&:hover": {
                  color: "primary.main",
                },
                "&:focus-visible": {
                  outline: `2px solid ${theme.palette.primary.main}`,
                  outlineOffset: 2,
                  borderRadius: 0.5,
                },
              }}
            >
              Terms of Service
            </Link>
            <Link
              href="/cookies"
              onClick={handleLinkClick("/cookies")}
              color="text.secondary"
              underline="hover"
              sx={{
                fontSize: "0.875rem",
                transition: theme.transitions.create(["color"], {
                  duration: theme.transitions.duration.short,
                }),
                "&:hover": {
                  color: "primary.main",
                },
                "&:focus-visible": {
                  outline: `2px solid ${theme.palette.primary.main}`,
                  outlineOffset: 2,
                  borderRadius: 0.5,
                },
              }}
            >
              Cookie Policy
            </Link>
          </Box>
        </Box>

        {/* Optional: Back to Top Button */}
        <Box sx={{ textAlign: "center", mt: 3 }}>
          <Button
            variant="text"
            size="small"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            sx={{
              textTransform: "none",
              color: "text.secondary",
              "&:hover": {
                color: "primary.main",
                backgroundColor: alpha(theme.palette.primary.main, 0.08),
              },
            }}
          >
            Back to Top ↑
          </Button>
        </Box>
      </Container>
    </Box>
  );
});

// Display name for debugging
Footer.displayName = "Footer";

export default Footer;
