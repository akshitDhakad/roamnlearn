import { Container, Grid, Typography, Link, Box, Divider } from "@mui/material";
import {
  IconBrandFacebook,
  IconBrandTwitter,
  IconBrandLinkedin,
  IconBrandYoutube,
} from "@tabler/icons-react";
import { FOOTER_LINKS } from "../../utils/constants";

/**
 * Footer component with links and social media
 * Responsive grid layout with company and resource links
 */
const Footer = () => {
  const socialIcons = {
    "brand-facebook": IconBrandFacebook,
    "brand-twitter": IconBrandTwitter,
    "brand-linkedin": IconBrandLinkedin,
    "brand-youtube": IconBrandYoutube,
  };

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "background.paper",
        borderTop: (theme) => `1px solid ${theme.palette.divider}`,
        mt: "auto",
        py: 4,
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          {/* Company Info */}
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography
              variant="h6"
              sx={{ fontWeight: 700, mb: 2, color: "primary.main" }}
            >
              RomanLearn
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Your Gateway to Quality Education. Learn, grow, and achieve your
              goals with our comprehensive courses.
            </Typography>
          </Grid>

          {/* Company Links */}
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 2 }}>
              Company
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              {FOOTER_LINKS.company.map((link) => (
                <Link
                  key={link.label}
                  href={link.path}
                  color="text.secondary"
                  underline="hover"
                  sx={{
                    fontSize: "0.875rem",
                    "&:hover": {
                      color: "primary.main",
                    },
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </Box>
          </Grid>

          {/* Resources Links */}
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 2 }}>
              Resources
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              {FOOTER_LINKS.resources.map((link) => (
                <Link
                  key={link.label}
                  href={link.path}
                  color="text.secondary"
                  underline="hover"
                  sx={{
                    fontSize: "0.875rem",
                    "&:hover": {
                      color: "primary.main",
                    },
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </Box>
          </Grid>

          {/* Social Media */}
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 2 }}>
              Follow Us
            </Typography>
            <Box sx={{ display: "flex", gap: 2 }}>
              {FOOTER_LINKS.social.map((social) => {
                const IconComponent =
                  socialIcons[social.icon as keyof typeof socialIcons];
                return (
                  <Link
                    key={social.label}
                    href={social.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      color: "text.secondary",
                      "&:hover": {
                        color: "primary.main",
                      },
                    }}
                  >
                    {IconComponent && <IconComponent size={24} />}
                  </Link>
                );
              })}
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4 }} />

        {/* Copyright */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} RomanLearn. All rights reserved.
          </Typography>
          <Box sx={{ display: "flex", gap: 3 }}>
            <Link
              href="/privacy"
              color="text.secondary"
              underline="hover"
              sx={{ fontSize: "0.875rem" }}
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              color="text.secondary"
              underline="hover"
              sx={{ fontSize: "0.875rem" }}
            >
              Terms of Service
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
