import { useState } from "react";
import {
  Box,
  Tabs,
  Tab,
  alpha,
  useTheme,
  Stack,
  Typography,
} from "@mui/material";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import { IconRocket } from "@tabler/icons-react";

/**
 * Main authentication page component
 * Fullscreen split-screen design with image badge sidebar
 * No navbar/footer - completely isolated auth experience
 */
const Auth = () => {
  const theme = useTheme();
  const [activeTab, setActiveTab] = useState<"signin" | "signup">("signup");

  // Single hero image
  const heroImage =
    "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&auto=format&fit=crop&q=80";

  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        overflow: "hidden",
        display: "grid",
        gridTemplateColumns: { xs: "1fr", lg: "42% 58%" },
        background: theme.palette.background.default,
      }}
    >
      {/* Left Side - Image Badge Design */}
      <Box
        sx={{
          display: { xs: "none", lg: "flex" },
          position: "relative",
          background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.dark} 100%)`,
          overflow: "hidden",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          p: 8,
        }}
      >
        {/* Animated background patterns */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            overflow: "hidden",
            zIndex: 0,
          }}
        >
          {/* Large gradient orb */}
          <Box
            sx={{
              position: "absolute",
              top: "-20%",
              left: "-15%",
              width: "70%",
              height: "70%",
              borderRadius: "50%",
              background: `radial-gradient(circle, ${alpha(
                theme.palette.common.white,
                0.12
              )} 0%, transparent 70%)`,
              animation: "float 8s ease-in-out infinite",
              "@keyframes float": {
                "0%, 100%": { transform: "translate(0, 0)" },
                "50%": { transform: "translate(30px, -30px)" },
              },
            }}
          />
          <Box
            sx={{
              position: "absolute",
              bottom: "-20%",
              right: "-15%",
              width: "70%",
              height: "70%",
              borderRadius: "50%",
              background: `radial-gradient(circle, ${alpha(
                theme.palette.secondary.light,
                0.12
              )} 0%, transparent 70%)`,
              animation: "float 10s ease-in-out infinite",
              animationDelay: "2s",
            }}
          />
        </Box>

        {/* Content Container */}
        <Box
          sx={{
            position: "relative",
            zIndex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "100%",
            width: "100%",
            p: 6,
          }}
        >
          {/* Logo/Brand Section */}
          <Box sx={{ textAlign: "center" }}>
            <Box
              sx={{
                width: 80,
                height: 80,
                borderRadius: "20px",
                background: `linear-gradient(135deg, ${alpha(
                  theme.palette.common.white,
                  0.25
                )} 0%, ${alpha(theme.palette.common.white, 0.1)} 100%)`,
                backdropFilter: "blur(20px)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mx: "auto",
                mb: 3,
                boxShadow: `0 20px 50px ${alpha(
                  theme.palette.common.black,
                  0.25
                )}`,
                border: `1px solid ${alpha(theme.palette.common.white, 0.2)}`,
              }}
            >
              <IconRocket size={42} color="white" strokeWidth={2} />
            </Box>
            <Typography
              sx={{
                fontSize: "3rem",
                fontWeight: 900,
                color: "white",
                mb: 1.5,
                textShadow: `0 4px 30px ${alpha(
                  theme.palette.common.black,
                  0.3
                )}`,
                letterSpacing: "-0.02em",
              }}
            >
              RoamLearn
            </Typography>
            <Typography
              sx={{
                fontSize: "1.15rem",
                fontWeight: 500,
                color: alpha(theme.palette.common.white, 0.95),
                lineHeight: 1.5,
                mb: 0.5,
              }}
            >
              Transform Your Learning Journey
            </Typography>
            <Typography
              sx={{
                fontSize: "0.95rem",
                fontWeight: 400,
                color: alpha(theme.palette.common.white, 0.75),
                lineHeight: 1.5,
              }}
            >
              Explore, Learn, and Grow
            </Typography>
          </Box>

          {/* Hero Image */}
          <Box
            sx={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              my: 4,
            }}
          >
            <Box
              sx={{
                width: "100%",
                maxWidth: 500,
                borderRadius: 4,
                overflow: "hidden",
                boxShadow: `0 30px 60px ${alpha(
                  theme.palette.common.black,
                  0.4
                )}`,
                border: `2px solid ${alpha(theme.palette.common.white, 0.2)}`,
                position: "relative",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  inset: 0,
                  background: `linear-gradient(135deg, ${alpha(
                    theme.palette.primary.light,
                    0.15
                  )} 0%, transparent 50%, ${alpha(
                    theme.palette.secondary.main,
                    0.15
                  )} 100%)`,
                  zIndex: 1,
                  pointerEvents: "none",
                },
              }}
            >
              <Box
                component="img"
                src={heroImage}
                alt="Students learning"
                sx={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                }}
              />
            </Box>
          </Box>

          {/* Bottom Info */}
          <Box sx={{ textAlign: "center" }}>
            <Stack
              direction="row"
              spacing={4}
              sx={{ justifyContent: "center", mb: 2 }}
            >
              <Box>
                <Typography
                  sx={{
                    fontSize: "1.75rem",
                    fontWeight: 800,
                    color: "white",
                  }}
                >
                  10K+
                </Typography>
                <Typography
                  sx={{
                    fontSize: "0.85rem",
                    color: alpha(theme.palette.common.white, 0.8),
                  }}
                >
                  Students
                </Typography>
              </Box>
              <Box>
                <Typography
                  sx={{
                    fontSize: "1.75rem",
                    fontWeight: 800,
                    color: "white",
                  }}
                >
                  50+
                </Typography>
                <Typography
                  sx={{
                    fontSize: "0.85rem",
                    color: alpha(theme.palette.common.white, 0.8),
                  }}
                >
                  Destinations
                </Typography>
              </Box>
              <Box>
                <Typography
                  sx={{
                    fontSize: "1.75rem",
                    fontWeight: 800,
                    color: "white",
                  }}
                >
                  95%
                </Typography>
                <Typography
                  sx={{
                    fontSize: "0.85rem",
                    color: alpha(theme.palette.common.white, 0.8),
                  }}
                >
                  Satisfaction
                </Typography>
              </Box>
            </Stack>
            <Typography
              sx={{
                fontSize: "0.9rem",
                color: alpha(theme.palette.common.white, 0.7),
                fontWeight: 500,
              }}
            >
              Trusted worldwide
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Right Side - Authentication Forms (Fullscreen) */}
      <Box
        sx={{
          height: "100vh",
          overflowY: "auto",
          display: "flex",
          flexDirection: "column",
          background: theme.palette.background.paper,
        }}
      >
        <Box
          sx={{
            p: { xs: 3, sm: 4, md: 5, lg: 6 },
            maxWidth: 700,
            mx: "auto",
            width: "100%",
            flex: 1,
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Mobile Logo (Only on mobile) */}
          <Box
            sx={{
              display: { xs: "block", lg: "none" },
              textAlign: "center",
              mb: 4,
            }}
          >
            <Box
              sx={{
                fontSize: "2rem",
                fontWeight: 800,
                color: theme.palette.primary.main,
                mb: 1,
              }}
            >
              RoamLearn
            </Box>
            <Box
              sx={{
                fontSize: "0.9rem",
                color: theme.palette.text.secondary,
              }}
            >
              Educational tours for curious minds
            </Box>
          </Box>

          {/* Tab Navigation */}
          <Tabs
            value={activeTab}
            onChange={(_, val) => setActiveTab(val)}
            variant="fullWidth"
            sx={{
              mb: 4,
              "& .MuiTabs-indicator": {
                height: 3,
                borderRadius: "3px 3px 0 0",
              },
              "& .MuiTab-root": {
                fontSize: "1.1rem",
                fontWeight: 600,
                textTransform: "none",
                py: 2,
                transition: "all 0.3s",
                "&:hover": {
                  color: theme.palette.primary.main,
                  background: alpha(theme.palette.primary.main, 0.05),
                },
              },
            }}
          >
            <Tab label="Create Account" value="signup" />
            <Tab label="Sign In" value="signin" />
          </Tabs>

          {/* Form Content */}
          <Box sx={{ flex: 1 }}>
            {activeTab === "signin" && <SignIn />}
            {activeTab === "signup" && <SignUp />}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Auth;
