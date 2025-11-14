import { useState, useMemo } from "react";
import {
  Box,
  Container,
  Paper,
  Stack,
  Typography,
  Button,
  Avatar,
  Chip,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  LinearProgress,
  IconButton,
  alpha,
  useTheme,
  Tabs,
  Tab,
  Switch,
  Badge,
  ListItemAvatar,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import {
  IconUser,
  IconSchool,
  IconHeart,
  IconBell,
  IconWallet,
  IconHistory,
  IconLogout,
  IconMapPin,
  IconCalendar,
  IconTrophy,
  IconCoin,
  IconCheck,
  IconEdit,
  IconPhone,
  IconMail,
  IconHome,
  IconFileText,
  IconUsers,
  IconDownload,
  IconUpload,
  IconArrowUp,
  IconArrowDown,
  IconGift,
  IconCreditCard,
  IconBuildingBank,
  IconClock,
  IconStar,
  IconCertificate,
  IconAlertCircle,
  IconCircleCheck,
  IconHourglassEmpty,
  IconX,
  IconCamera,
  IconShare,
  IconCopy,
} from "@tabler/icons-react";
import { getCurrentUser, logout } from "../../services/auth";

/**
 * Comprehensive Student Profile Page - Redesigned
 * Modern, feature-rich design with enhanced sections
 */
const Profile = () => {
  const theme = useTheme();
  const user = useMemo(() => getCurrentUser(), []);
  const [activeTab, setActiveTab] = useState(0);

  // Mock referral code for user
  const userReferralCode =
    "ROAM" + user?.name?.substring(0, 4).toUpperCase() + "2025";

  const handleLogout = () => {
    logout();
    window.location.hash = "home";
  };

  const handleCopyReferralCode = () => {
    navigator.clipboard.writeText(userReferralCode);
    // You can add a toast notification here
  };

  if (!user) {
    return (
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "background.default",
        }}
      >
        <Paper
          sx={{
            p: 6,
            textAlign: "center",
            maxWidth: 400,
            borderRadius: 3,
          }}
        >
          <Typography variant="h5" gutterBottom fontWeight={700}>
            Not Logged In
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
            Please sign in to view your profile
          </Typography>
          <Button
            variant="contained"
            size="large"
            onClick={() => (window.location.hash = "auth")}
            sx={{ borderRadius: 2 }}
          >
            Go to Sign In
          </Button>
        </Paper>
      </Box>
    );
  }

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "background.default", pb: 6 }}>
      {/* Cover Photo Header */}
      <Box
        sx={{
          position: "relative",
          height: 280,
          background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
          overflow: "hidden",
        }}
      >
        {/* Background Pattern */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              'url("https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1600&auto=format&fit=crop&q=80")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.2,
          }}
        />

        {/* Animated Gradient Orbs */}
        <Box
          sx={{
            position: "absolute",
            top: "-20%",
            right: "-10%",
            width: "50%",
            height: "150%",
            borderRadius: "50%",
            background: `radial-gradient(circle, ${alpha(
              theme.palette.common.white,
              0.15
            )} 0%, transparent 70%)`,
            animation: "float 8s ease-in-out infinite",
            "@keyframes float": {
              "0%, 100%": { transform: "translate(0, 0)" },
              "50%": { transform: "translate(-30px, 30px)" },
            },
          }}
        />

        {/* Edit Cover Button */}
        <IconButton
          sx={{
            position: "absolute",
            top: 20,
            right: 20,
            bgcolor: alpha(theme.palette.common.white, 0.2),
            backdropFilter: "blur(10px)",
            color: "white",
            "&:hover": {
              bgcolor: alpha(theme.palette.common.white, 0.3),
            },
          }}
        >
          <IconCamera size={20} />
        </IconButton>

        {/* Logout Button */}
        <IconButton
          onClick={handleLogout}
          sx={{
            position: "absolute",
            top: 20,
            right: 70,
            bgcolor: alpha(theme.palette.common.white, 0.2),
            backdropFilter: "blur(10px)",
            color: "white",
            "&:hover": {
              bgcolor: alpha(theme.palette.common.white, 0.3),
            },
          }}
        >
          <IconLogout size={20} />
        </IconButton>
      </Box>

      <Container maxWidth="xl">
        {/* Profile Info Card - Overlapping Cover */}
        <Paper
          elevation={3}
          sx={{
            mt: -8,
            mb: 4,
            p: 3,
            borderRadius: 3,
            position: "relative",
            zIndex: 1,
          }}
        >
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={3}
            alignItems={{ xs: "center", md: "flex-start" }}
          >
            {/* Avatar with Badge */}
            <Badge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              badgeContent={
                <Box
                  sx={{
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    bgcolor: theme.palette.success.main,
                    border: `3px solid ${theme.palette.background.paper}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <IconCheck size={20} color="white" />
                </Box>
              }
            >
              <Avatar
                sx={{
                  width: 140,
                  height: 140,
                  bgcolor: theme.palette.primary.main,
                  fontSize: "3.5rem",
                  fontWeight: 900,
                  border: `5px solid ${theme.palette.background.paper}`,
                  boxShadow: `0 8px 24px ${alpha(
                    theme.palette.common.black,
                    0.2
                  )}`,
                }}
              >
                {user.name.charAt(0).toUpperCase()}
              </Avatar>
            </Badge>

            {/* User Info */}
            <Box sx={{ flex: 1, textAlign: { xs: "center", md: "left" } }}>
              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={2}
                alignItems={{ xs: "center", sm: "center" }}
                mb={1}
              >
                <Typography variant="h4" fontWeight={900}>
                  {user.name}
                </Typography>
                <Chip
                  icon={<IconCertificate size={16} />}
                  label="Verified Student"
                  color="success"
                  sx={{ fontWeight: 600 }}
                />
              </Stack>

              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={2}
                sx={{ mb: 2 }}
                flexWrap="wrap"
              >
                <Chip
                  icon={<IconMail size={16} />}
                  label={user.email}
                  variant="outlined"
                  sx={{ fontWeight: 500 }}
                />
                <Chip
                  icon={<IconPhone size={16} />}
                  label={user.phone}
                  variant="outlined"
                  sx={{ fontWeight: 500 }}
                />
                <Chip
                  icon={<IconSchool size={16} />}
                  label={user.profile?.grade || "Student"}
                  variant="outlined"
                  color="primary"
                  sx={{ fontWeight: 500 }}
                />
              </Stack>

              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ maxWidth: 600 }}
              >
                Passionate learner exploring the world through educational
                tours. Member since January 2025.
              </Typography>
            </Box>

            {/* Quick Actions */}
            <Stack spacing={2} sx={{ minWidth: { md: 200 } }}>
              <Button
                variant="contained"
                startIcon={<IconEdit size={18} />}
                fullWidth
                sx={{
                  borderRadius: 2,
                  textTransform: "none",
                  fontWeight: 600,
                }}
              >
                Edit Profile
              </Button>
              <Button
                variant="outlined"
                startIcon={<IconShare size={18} />}
                fullWidth
                sx={{
                  borderRadius: 2,
                  textTransform: "none",
                  fontWeight: 600,
                }}
              >
                Share Profile
              </Button>
            </Stack>
          </Stack>
        </Paper>

        {/* Enhanced Dashboard Stats */}
        <Grid container spacing={3} sx={{ mb: 4 }}>
          <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
            <Card
              sx={{
                background: `linear-gradient(135deg, ${theme.palette.primary.light} 0%, ${theme.palette.primary.main} 100%)`,
                color: "white",
                borderRadius: 3,
                transition: "transform 0.3s, box-shadow 0.3s",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: `0 12px 24px ${alpha(
                    theme.palette.primary.main,
                    0.3
                  )}`,
                },
              }}
            >
              <CardContent>
                <Stack spacing={2}>
                  <Box
                    sx={{
                      width: 64,
                      height: 64,
                      borderRadius: 3,
                      bgcolor: alpha(theme.palette.common.white, 0.25),
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <IconMapPin size={32} strokeWidth={2} />
                  </Box>
                  <Box>
                    <Typography variant="h3" fontWeight={900}>
                      5
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ opacity: 0.9, fontWeight: 500 }}
                    >
                      Tours Completed
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 0.5,
                      fontSize: "0.875rem",
                    }}
                  >
                    <IconArrowUp size={16} />
                    <Typography variant="caption" fontWeight={600}>
                      +2 this month
                    </Typography>
                  </Box>
                </Stack>
              </CardContent>
            </Card>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
            <Card
              sx={{
                background: `linear-gradient(135deg, ${theme.palette.success.light} 0%, ${theme.palette.success.main} 100%)`,
                color: "white",
                borderRadius: 3,
                transition: "transform 0.3s, box-shadow 0.3s",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: `0 12px 24px ${alpha(
                    theme.palette.success.main,
                    0.3
                  )}`,
                },
              }}
            >
              <CardContent>
                <Stack spacing={2}>
                  <Box
                    sx={{
                      width: 64,
                      height: 64,
                      borderRadius: 3,
                      bgcolor: alpha(theme.palette.common.white, 0.25),
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <IconTrophy size={32} strokeWidth={2} />
                  </Box>
                  <Box>
                    <Typography variant="h3" fontWeight={900}>
                      3
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ opacity: 0.9, fontWeight: 500 }}
                    >
                      Certificates Earned
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 0.5,
                      fontSize: "0.875rem",
                    }}
                  >
                    <IconStar size={16} />
                    <Typography variant="caption" fontWeight={600}>
                      Top 10% achiever
                    </Typography>
                  </Box>
                </Stack>
              </CardContent>
            </Card>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
            <Card
              sx={{
                background: `linear-gradient(135deg, ${theme.palette.warning.light} 0%, ${theme.palette.warning.main} 100%)`,
                color: "white",
                borderRadius: 3,
                transition: "transform 0.3s, box-shadow 0.3s",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: `0 12px 24px ${alpha(
                    theme.palette.warning.main,
                    0.3
                  )}`,
                },
              }}
            >
              <CardContent>
                <Stack spacing={2}>
                  <Box
                    sx={{
                      width: 64,
                      height: 64,
                      borderRadius: 3,
                      bgcolor: alpha(theme.palette.common.white, 0.25),
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <IconWallet size={32} strokeWidth={2} />
                  </Box>
                  <Box>
                    <Typography variant="h3" fontWeight={900}>
                      $250
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ opacity: 0.9, fontWeight: 500 }}
                    >
                      Wallet Balance
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 0.5,
                      fontSize: "0.875rem",
                    }}
                  >
                    <IconArrowDown size={16} />
                    <Typography variant="caption" fontWeight={600}>
                      -$150 last transaction
                    </Typography>
                  </Box>
                </Stack>
              </CardContent>
            </Card>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
            <Card
              sx={{
                background: `linear-gradient(135deg, ${theme.palette.info.light} 0%, ${theme.palette.info.main} 100%)`,
                color: "white",
                borderRadius: 3,
                transition: "transform 0.3s, box-shadow 0.3s",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: `0 12px 24px ${alpha(
                    theme.palette.info.main,
                    0.3
                  )}`,
                },
              }}
            >
              <CardContent>
                <Stack spacing={2}>
                  <Box
                    sx={{
                      width: 64,
                      height: 64,
                      borderRadius: 3,
                      bgcolor: alpha(theme.palette.common.white, 0.25),
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <IconCoin size={32} strokeWidth={2} />
                  </Box>
                  <Box>
                    <Typography variant="h3" fontWeight={900}>
                      450
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ opacity: 0.9, fontWeight: 500 }}
                    >
                      Reward Points
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 0.5,
                      fontSize: "0.875rem",
                    }}
                  >
                    <IconGift size={16} />
                    <Typography variant="caption" fontWeight={600}>
                      50 points to redeem
                    </Typography>
                  </Box>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Enhanced Tabs Navigation */}
        <Paper sx={{ mb: 3, borderRadius: 3, overflow: "hidden" }}>
          <Tabs
            value={activeTab}
            onChange={(_, newValue) => setActiveTab(newValue)}
            variant="scrollable"
            scrollButtons="auto"
            sx={{
              "& .MuiTab-root": {
                textTransform: "none",
                fontWeight: 600,
                fontSize: "1rem",
                minHeight: 72,
                px: 3,
                transition: "all 0.3s",
                "&:hover": {
                  bgcolor: alpha(theme.palette.primary.main, 0.05),
                },
              },
              "& .Mui-selected": {
                color: theme.palette.primary.main,
              },
              "& .MuiTabs-indicator": {
                height: 3,
                borderRadius: "3px 3px 0 0",
              },
            }}
          >
            <Tab
              icon={<IconUser size={22} />}
              iconPosition="start"
              label="Personal Info"
            />
            <Tab
              icon={<IconSchool size={22} />}
              iconPosition="start"
              label="Institute"
            />
            <Tab
              icon={<IconHeart size={22} />}
              iconPosition="start"
              label="Medical"
            />
            <Tab
              icon={<IconFileText size={22} />}
              iconPosition="start"
              label="Documents"
            />
            <Tab
              icon={<IconWallet size={22} />}
              iconPosition="start"
              label="Wallet"
            />
            <Tab
              icon={<IconUsers size={22} />}
              iconPosition="start"
              label="Referrals"
            />
            <Tab
              icon={<IconBell size={22} />}
              iconPosition="start"
              label="Notifications"
            />
            <Tab
              icon={<IconHistory size={22} />}
              iconPosition="start"
              label="Tour History"
            />
          </Tabs>
        </Paper>

        {/* Tab Content */}
        <Box>
          {/* Personal Information Tab - Enhanced */}
          {activeTab === 0 && (
            <Grid container spacing={3}>
              {/* Basic Info Card */}
              <Grid size={{ xs: 12, md: 6 }}>
                <Paper sx={{ p: 4, borderRadius: 3, height: "100%" }}>
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    mb={3}
                  >
                    <Typography variant="h6" fontWeight={800}>
                      Basic Information
                    </Typography>
                    <IconButton size="small" color="primary">
                      <IconEdit size={20} />
                    </IconButton>
                  </Stack>

                  <Stack spacing={3}>
                    <Box>
                      <Typography
                        variant="caption"
                        color="text.secondary"
                        fontWeight={600}
                      >
                        FULL NAME
                      </Typography>
                      <Typography
                        variant="body1"
                        fontWeight={600}
                        sx={{ mt: 0.5 }}
                      >
                        {user.name}
                      </Typography>
                    </Box>

                    <Divider />

                    <Box>
                      <Typography
                        variant="caption"
                        color="text.secondary"
                        fontWeight={600}
                      >
                        DATE OF BIRTH
                      </Typography>
                      <Typography
                        variant="body1"
                        fontWeight={600}
                        sx={{ mt: 0.5 }}
                      >
                        {user.profile?.dateOfBirth || "Not provided"}
                      </Typography>
                    </Box>

                    <Divider />

                    <Box>
                      <Typography
                        variant="caption"
                        color="text.secondary"
                        fontWeight={600}
                      >
                        GENDER
                      </Typography>
                      <Typography
                        variant="body1"
                        fontWeight={600}
                        sx={{ mt: 0.5 }}
                      >
                        {user.profile?.gender || "Not provided"}
                      </Typography>
                    </Box>
                  </Stack>
                </Paper>
              </Grid>

              {/* Contact Info Card */}
              <Grid size={{ xs: 12, md: 6 }}>
                <Paper sx={{ p: 4, borderRadius: 3, height: "100%" }}>
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    mb={3}
                  >
                    <Typography variant="h6" fontWeight={800}>
                      Contact Information
                    </Typography>
                    <IconButton size="small" color="primary">
                      <IconEdit size={20} />
                    </IconButton>
                  </Stack>

                  <Stack spacing={3}>
                    <Box>
                      <Typography
                        variant="caption"
                        color="text.secondary"
                        fontWeight={600}
                      >
                        EMAIL ADDRESS
                      </Typography>
                      <Stack
                        direction="row"
                        spacing={1}
                        alignItems="center"
                        sx={{ mt: 0.5 }}
                      >
                        <IconMail
                          size={18}
                          color={theme.palette.primary.main}
                        />
                        <Typography variant="body1" fontWeight={600}>
                          {user.email}
                        </Typography>
                      </Stack>
                    </Box>

                    <Divider />

                    <Box>
                      <Typography
                        variant="caption"
                        color="text.secondary"
                        fontWeight={600}
                      >
                        PHONE NUMBER
                      </Typography>
                      <Stack
                        direction="row"
                        spacing={1}
                        alignItems="center"
                        sx={{ mt: 0.5 }}
                      >
                        <IconPhone
                          size={18}
                          color={theme.palette.primary.main}
                        />
                        <Typography variant="body1" fontWeight={600}>
                          {user.phone}
                        </Typography>
                      </Stack>
                    </Box>
                  </Stack>
                </Paper>
              </Grid>

              {/* Address Card */}
              <Grid size={{ xs: 12 }}>
                <Paper sx={{ p: 4, borderRadius: 3 }}>
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    mb={3}
                  >
                    <Typography variant="h6" fontWeight={800}>
                      Address Details
                    </Typography>
                    <IconButton size="small" color="primary">
                      <IconEdit size={20} />
                    </IconButton>
                  </Stack>

                  <Box
                    sx={{
                      p: 3,
                      borderRadius: 2,
                      bgcolor: alpha(theme.palette.primary.main, 0.05),
                      border: `1px solid ${alpha(
                        theme.palette.primary.main,
                        0.1
                      )}`,
                    }}
                  >
                    <Stack direction="row" spacing={2} alignItems="flex-start">
                      <Box
                        sx={{
                          width: 48,
                          height: 48,
                          borderRadius: 2,
                          bgcolor: theme.palette.primary.main,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                        }}
                      >
                        <IconHome size={24} color="white" />
                      </Box>
                      <Box>
                        <Typography
                          variant="body1"
                          fontWeight={600}
                          gutterBottom
                        >
                          {user.profile?.houseNumber && user.profile?.street
                            ? `${user.profile.houseNumber}, ${user.profile.street}`
                            : "Street address not provided"}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {user.profile?.city &&
                          user.profile?.state &&
                          user.profile?.country
                            ? `${user.profile.city}, ${user.profile.state}, ${user.profile.country}`
                            : "City, State, Country not provided"}
                        </Typography>
                      </Box>
                    </Stack>
                  </Box>
                </Paper>
              </Grid>

              {/* Guardian Info Card */}
              <Grid size={{ xs: 12 }}>
                <Paper sx={{ p: 4, borderRadius: 3 }}>
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    mb={3}
                  >
                    <Typography variant="h6" fontWeight={800}>
                      Guardian / Parent Information
                    </Typography>
                    <IconButton size="small" color="primary">
                      <IconEdit size={20} />
                    </IconButton>
                  </Stack>

                  <Grid container spacing={3}>
                    <Grid size={{ xs: 12, md: 6 }}>
                      <Box>
                        <Typography
                          variant="caption"
                          color="text.secondary"
                          fontWeight={600}
                        >
                          GUARDIAN NAME
                        </Typography>
                        <Typography
                          variant="body1"
                          fontWeight={600}
                          sx={{ mt: 0.5 }}
                        >
                          {user.profile?.parentName || "Not provided"}
                        </Typography>
                      </Box>
                    </Grid>

                    <Grid size={{ xs: 12, md: 6 }}>
                      <Box>
                        <Typography
                          variant="caption"
                          color="text.secondary"
                          fontWeight={600}
                        >
                          RELATIONSHIP
                        </Typography>
                        <Typography
                          variant="body1"
                          fontWeight={600}
                          sx={{ mt: 0.5 }}
                        >
                          {user.profile?.guardianRelation || "Not provided"}
                        </Typography>
                      </Box>
                    </Grid>

                    <Grid size={{ xs: 12, md: 6 }}>
                      <Box>
                        <Typography
                          variant="caption"
                          color="text.secondary"
                          fontWeight={600}
                        >
                          GUARDIAN EMAIL
                        </Typography>
                        <Typography
                          variant="body1"
                          fontWeight={600}
                          sx={{ mt: 0.5 }}
                        >
                          {user.profile?.guardianEmail || "Not provided"}
                        </Typography>
                      </Box>
                    </Grid>

                    <Grid size={{ xs: 12, md: 6 }}>
                      <Box>
                        <Typography
                          variant="caption"
                          color="text.secondary"
                          fontWeight={600}
                        >
                          GUARDIAN PHONE
                        </Typography>
                        <Typography
                          variant="body1"
                          fontWeight={600}
                          sx={{ mt: 0.5 }}
                        >
                          {user.profile?.guardianPhone || "Not provided"}
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
            </Grid>
          )}

          {/* Institute Information Tab - Enhanced */}
          {activeTab === 1 && (
            <Grid container spacing={3}>
              <Grid size={{ xs: 12, md: 6 }}>
                <Paper sx={{ p: 4, borderRadius: 3, height: "100%" }}>
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    mb={3}
                  >
                    <Typography variant="h6" fontWeight={800}>
                      Education Details
                    </Typography>
                    <IconButton size="small" color="primary">
                      <IconEdit size={20} />
                    </IconButton>
                  </Stack>

                  <Stack spacing={3}>
                    <Box>
                      <Typography
                        variant="caption"
                        color="text.secondary"
                        fontWeight={600}
                      >
                        GRADE / LEVEL
                      </Typography>
                      <Chip
                        label={user.profile?.grade || "Not specified"}
                        color="primary"
                        sx={{ mt: 1, fontWeight: 600 }}
                      />
                    </Box>

                    <Divider />

                    <Box>
                      <Typography
                        variant="caption"
                        color="text.secondary"
                        fontWeight={600}
                      >
                        INSTITUTION NAME
                      </Typography>
                      <Stack
                        direction="row"
                        spacing={1}
                        alignItems="center"
                        sx={{ mt: 1 }}
                      >
                        <IconSchool
                          size={20}
                          color={theme.palette.primary.main}
                        />
                        <Typography variant="body1" fontWeight={600}>
                          {user.profile?.college || "Not provided"}
                        </Typography>
                      </Stack>
                    </Box>
                  </Stack>
                </Paper>
              </Grid>

              <Grid size={{ xs: 12, md: 6 }}>
                <Paper sx={{ p: 4, borderRadius: 3, height: "100%" }}>
                  <Typography variant="h6" fontWeight={800} mb={3}>
                    Profile Completion
                  </Typography>

                  <Box>
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      mb={2}
                    >
                      <Typography variant="body2" fontWeight={600}>
                        Overall Progress
                      </Typography>
                      <Typography variant="h6" fontWeight={800} color="primary">
                        85%
                      </Typography>
                    </Stack>
                    <LinearProgress
                      variant="determinate"
                      value={85}
                      sx={{
                        height: 12,
                        borderRadius: 6,
                        bgcolor: alpha(theme.palette.primary.main, 0.1),
                        "& .MuiLinearProgress-bar": {
                          borderRadius: 6,
                          background: `linear-gradient(90deg, ${theme.palette.primary.light} 0%, ${theme.palette.primary.main} 100%)`,
                        },
                      }}
                    />
                    <Typography
                      variant="caption"
                      color="text.secondary"
                      sx={{ mt: 1, display: "block" }}
                    >
                      Complete your profile to unlock all features
                    </Typography>
                  </Box>
                </Paper>
              </Grid>

              <Grid size={{ xs: 12 }}>
                <Paper sx={{ p: 4, borderRadius: 3 }}>
                  <Typography variant="h6" fontWeight={800} mb={3}>
                    Interests & Hobbies
                  </Typography>

                  <Stack direction="row" spacing={1} flexWrap="wrap" gap={1}>
                    {user.profile?.interests &&
                    user.profile.interests.length > 0 ? (
                      user.profile.interests.map((interest, idx) => (
                        <Chip
                          key={idx}
                          label={interest}
                          color="primary"
                          variant="outlined"
                          sx={{ fontWeight: 600, fontSize: "0.9rem" }}
                        />
                      ))
                    ) : (
                      <Box
                        sx={{
                          p: 3,
                          textAlign: "center",
                          width: "100%",
                          borderRadius: 2,
                          bgcolor: alpha(theme.palette.info.main, 0.05),
                        }}
                      >
                        <Typography variant="body2" color="text.secondary">
                          No interests added yet. Add your interests to
                          personalize your experience!
                        </Typography>
                      </Box>
                    )}
                  </Stack>
                </Paper>
              </Grid>
            </Grid>
          )}

          {/* Medical Information Tab - Enhanced */}
          {activeTab === 2 && (
            <Grid container spacing={3}>
              <Grid size={{ xs: 12, md: 6 }}>
                <Paper sx={{ p: 4, borderRadius: 3, height: "100%" }}>
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    mb={3}
                  >
                    <Typography variant="h6" fontWeight={800}>
                      Health Information
                    </Typography>
                    <IconButton size="small" color="primary">
                      <IconEdit size={20} />
                    </IconButton>
                  </Stack>

                  <Stack spacing={3}>
                    <Box>
                      <Typography
                        variant="caption"
                        color="text.secondary"
                        fontWeight={600}
                      >
                        BLOOD GROUP
                      </Typography>
                      <Box
                        sx={{
                          mt: 1,
                          p: 2,
                          borderRadius: 2,
                          bgcolor: alpha(theme.palette.error.main, 0.1),
                          border: `2px solid ${alpha(
                            theme.palette.error.main,
                            0.3
                          )}`,
                        }}
                      >
                        <Typography
                          variant="h5"
                          fontWeight={800}
                          color="error.main"
                        >
                          O+ (Positive)
                        </Typography>
                      </Box>
                    </Box>

                    <Divider />

                    <Grid container spacing={2}>
                      <Grid size={{ xs: 6 }}>
                        <Typography
                          variant="caption"
                          color="text.secondary"
                          fontWeight={600}
                        >
                          HEIGHT
                        </Typography>
                        <Typography
                          variant="h6"
                          fontWeight={700}
                          sx={{ mt: 0.5 }}
                        >
                          170 cm
                        </Typography>
                      </Grid>
                      <Grid size={{ xs: 6 }}>
                        <Typography
                          variant="caption"
                          color="text.secondary"
                          fontWeight={600}
                        >
                          WEIGHT
                        </Typography>
                        <Typography
                          variant="h6"
                          fontWeight={700}
                          sx={{ mt: 0.5 }}
                        >
                          65 kg
                        </Typography>
                      </Grid>
                    </Grid>
                  </Stack>
                </Paper>
              </Grid>

              <Grid size={{ xs: 12, md: 6 }}>
                <Paper sx={{ p: 4, borderRadius: 3, height: "100%" }}>
                  <Typography variant="h6" fontWeight={800} mb={3}>
                    Emergency Contact
                  </Typography>

                  <Box
                    sx={{
                      p: 3,
                      borderRadius: 2,
                      bgcolor: alpha(theme.palette.warning.main, 0.1),
                      border: `2px solid ${alpha(
                        theme.palette.warning.main,
                        0.3
                      )}`,
                    }}
                  >
                    <Stack
                      direction="row"
                      spacing={2}
                      alignItems="center"
                      mb={2}
                    >
                      <Box
                        sx={{
                          width: 48,
                          height: 48,
                          borderRadius: 2,
                          bgcolor: theme.palette.warning.main,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <IconAlertCircle size={24} color="white" />
                      </Box>
                      <Box>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          fontWeight={600}
                        >
                          Emergency Contact
                        </Typography>
                        <Typography variant="h6" fontWeight={800}>
                          {user.profile?.guardianPhone || "Not provided"}
                        </Typography>
                      </Box>
                    </Stack>
                  </Box>
                </Paper>
              </Grid>

              <Grid size={{ xs: 12 }}>
                <Paper sx={{ p: 4, borderRadius: 3 }}>
                  <Typography variant="h6" fontWeight={800} mb={3}>
                    Allergies & Medical Conditions
                  </Typography>

                  <Grid container spacing={3}>
                    <Grid size={{ xs: 12, md: 6 }}>
                      <Box>
                        <Typography
                          variant="caption"
                          color="text.secondary"
                          fontWeight={600}
                        >
                          ALLERGIES
                        </Typography>
                        <Box sx={{ mt: 1 }}>
                          <Stack
                            direction="row"
                            spacing={1}
                            flexWrap="wrap"
                            gap={1}
                          >
                            <Chip
                              label="Peanuts"
                              color="error"
                              variant="outlined"
                            />
                            <Chip
                              label="Dust"
                              color="error"
                              variant="outlined"
                            />
                          </Stack>
                        </Box>
                      </Box>
                    </Grid>

                    <Grid size={{ xs: 12, md: 6 }}>
                      <Box>
                        <Typography
                          variant="caption"
                          color="text.secondary"
                          fontWeight={600}
                        >
                          MEDICAL CONDITIONS
                        </Typography>
                        <Typography
                          variant="body1"
                          fontWeight={600}
                          sx={{ mt: 1 }}
                        >
                          None reported
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
            </Grid>
          )}

          {/* Documents Tab - NEW */}
          {activeTab === 3 && (
            <Grid container spacing={3}>
              <Grid size={{ xs: 12 }}>
                <Paper sx={{ p: 4, borderRadius: 3 }}>
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    mb={3}
                  >
                    <Typography variant="h5" fontWeight={800}>
                      Uploaded Documents
                    </Typography>
                    <Button
                      variant="contained"
                      startIcon={<IconUpload size={18} />}
                      sx={{
                        borderRadius: 2,
                        textTransform: "none",
                        fontWeight: 600,
                      }}
                    >
                      Upload Document
                    </Button>
                  </Stack>

                  <TableContainer>
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell sx={{ fontWeight: 700 }}>
                            Document Type
                          </TableCell>
                          <TableCell sx={{ fontWeight: 700 }}>Status</TableCell>
                          <TableCell sx={{ fontWeight: 700 }}>
                            Uploaded Date
                          </TableCell>
                          <TableCell sx={{ fontWeight: 700 }}>
                            Actions
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {[
                          {
                            type: "Aadhaar Card",
                            status: "verified",
                            date: "Jan 10, 2025",
                            icon: IconCertificate,
                          },
                          {
                            type: "Student ID Card",
                            status: "verified",
                            date: "Jan 10, 2025",
                            icon: IconFileText,
                          },
                          {
                            type: "Profile Photo",
                            status: "verified",
                            date: "Jan 10, 2025",
                            icon: IconCamera,
                          },
                          {
                            type: "Parent Consent Form",
                            status: "pending",
                            date: "Jan 12, 2025",
                            icon: IconFileText,
                          },
                        ].map((doc, idx) => (
                          <TableRow key={idx} hover>
                            <TableCell>
                              <Stack
                                direction="row"
                                spacing={2}
                                alignItems="center"
                              >
                                <Box
                                  sx={{
                                    width: 40,
                                    height: 40,
                                    borderRadius: 2,
                                    bgcolor: alpha(
                                      theme.palette.primary.main,
                                      0.1
                                    ),
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                  }}
                                >
                                  <doc.icon
                                    size={20}
                                    color={theme.palette.primary.main}
                                  />
                                </Box>
                                <Typography fontWeight={600}>
                                  {doc.type}
                                </Typography>
                              </Stack>
                            </TableCell>
                            <TableCell>
                              {doc.status === "verified" ? (
                                <Chip
                                  icon={<IconCircleCheck size={16} />}
                                  label="Verified"
                                  color="success"
                                  size="small"
                                  sx={{ fontWeight: 600 }}
                                />
                              ) : (
                                <Chip
                                  icon={<IconHourglassEmpty size={16} />}
                                  label="Pending"
                                  color="warning"
                                  size="small"
                                  sx={{ fontWeight: 600 }}
                                />
                              )}
                            </TableCell>
                            <TableCell>
                              <Typography
                                variant="body2"
                                color="text.secondary"
                              >
                                {doc.date}
                              </Typography>
                            </TableCell>
                            <TableCell>
                              <Stack direction="row" spacing={1}>
                                <IconButton size="small" color="primary">
                                  <IconDownload size={18} />
                                </IconButton>
                                <IconButton size="small" color="error">
                                  <IconX size={18} />
                                </IconButton>
                              </Stack>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Paper>
              </Grid>

              {/* Document Upload Guidelines */}
              <Grid size={{ xs: 12 }}>
                <Paper
                  sx={{
                    p: 3,
                    borderRadius: 3,
                    bgcolor: alpha(theme.palette.info.main, 0.05),
                    border: `1px solid ${alpha(theme.palette.info.main, 0.2)}`,
                  }}
                >
                  <Stack direction="row" spacing={2} alignItems="flex-start">
                    <Box
                      sx={{
                        width: 40,
                        height: 40,
                        borderRadius: 2,
                        bgcolor: theme.palette.info.main,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <IconAlertCircle size={20} color="white" />
                    </Box>
                    <Box>
                      <Typography
                        variant="subtitle1"
                        fontWeight={700}
                        gutterBottom
                      >
                        Document Upload Guidelines
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        • Supported formats: PDF, JPG, PNG (Max 5MB per file)
                        <br />
                        • Ensure documents are clear and readable
                        <br />
                        • Verification process takes 24-48 hours
                        <br />• Keep personal information secure
                      </Typography>
                    </Box>
                  </Stack>
                </Paper>
              </Grid>
            </Grid>
          )}

          {/* Wallet Tab - ENHANCED */}
          {activeTab === 4 && (
            <Grid container spacing={3}>
              {/* Balance Card */}
              <Grid size={{ xs: 12, md: 4 }}>
                <Card
                  sx={{
                    background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                    color: "white",
                    p: 4,
                    borderRadius: 3,
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  {/* Background Pattern */}
                  <Box
                    sx={{
                      position: "absolute",
                      top: -50,
                      right: -50,
                      width: 200,
                      height: 200,
                      borderRadius: "50%",
                      background: `radial-gradient(circle, ${alpha(
                        theme.palette.common.white,
                        0.2
                      )} 0%, transparent 70%)`,
                    }}
                  />

                  <Stack spacing={3} sx={{ position: "relative", zIndex: 1 }}>
                    <Box>
                      <Stack
                        direction="row"
                        spacing={1}
                        alignItems="center"
                        mb={1}
                      >
                        <IconWallet size={24} />
                        <Typography
                          variant="body2"
                          sx={{ opacity: 0.9, fontWeight: 500 }}
                        >
                          Available Balance
                        </Typography>
                      </Stack>
                      <Typography variant="h3" fontWeight={900}>
                        $250.00
                      </Typography>
                    </Box>

                    <Divider
                      sx={{ bgcolor: alpha(theme.palette.common.white, 0.3) }}
                    />

                    <Stack spacing={1.5}>
                      <Button
                        variant="contained"
                        fullWidth
                        startIcon={<IconArrowUp size={18} />}
                        sx={{
                          bgcolor: alpha(theme.palette.common.white, 0.25),
                          color: "white",
                          fontWeight: 700,
                          py: 1.5,
                          borderRadius: 2,
                          "&:hover": {
                            bgcolor: alpha(theme.palette.common.white, 0.35),
                          },
                        }}
                      >
                        Add Money
                      </Button>
                      <Button
                        variant="outlined"
                        fullWidth
                        startIcon={<IconArrowDown size={18} />}
                        sx={{
                          borderColor: alpha(theme.palette.common.white, 0.5),
                          color: "white",
                          fontWeight: 700,
                          py: 1.5,
                          borderRadius: 2,
                          "&:hover": {
                            borderColor: alpha(theme.palette.common.white, 0.7),
                            bgcolor: alpha(theme.palette.common.white, 0.1),
                          },
                        }}
                      >
                        Withdraw
                      </Button>
                    </Stack>
                  </Stack>
                </Card>
              </Grid>

              {/* Quick Stats */}
              <Grid size={{ xs: 12, md: 8 }}>
                <Grid container spacing={3}>
                  <Grid size={{ xs: 12, sm: 4 }}>
                    <Paper sx={{ p: 3, borderRadius: 3, textAlign: "center" }}>
                      <Box
                        sx={{
                          width: 56,
                          height: 56,
                          borderRadius: 3,
                          bgcolor: alpha(theme.palette.success.main, 0.1),
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          mx: "auto",
                          mb: 2,
                        }}
                      >
                        <IconArrowDown
                          size={28}
                          color={theme.palette.success.main}
                        />
                      </Box>
                      <Typography
                        variant="h5"
                        fontWeight={900}
                        color="success.main"
                      >
                        $300
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        fontWeight={600}
                      >
                        Total Credits
                      </Typography>
                    </Paper>
                  </Grid>

                  <Grid size={{ xs: 12, sm: 4 }}>
                    <Paper sx={{ p: 3, borderRadius: 3, textAlign: "center" }}>
                      <Box
                        sx={{
                          width: 56,
                          height: 56,
                          borderRadius: 3,
                          bgcolor: alpha(theme.palette.error.main, 0.1),
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          mx: "auto",
                          mb: 2,
                        }}
                      >
                        <IconArrowUp
                          size={28}
                          color={theme.palette.error.main}
                        />
                      </Box>
                      <Typography
                        variant="h5"
                        fontWeight={900}
                        color="error.main"
                      >
                        $150
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        fontWeight={600}
                      >
                        Total Debits
                      </Typography>
                    </Paper>
                  </Grid>

                  <Grid size={{ xs: 12, sm: 4 }}>
                    <Paper sx={{ p: 3, borderRadius: 3, textAlign: "center" }}>
                      <Box
                        sx={{
                          width: 56,
                          height: 56,
                          borderRadius: 3,
                          bgcolor: alpha(theme.palette.info.main, 0.1),
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          mx: "auto",
                          mb: 2,
                        }}
                      >
                        <IconClock size={28} color={theme.palette.info.main} />
                      </Box>
                      <Typography
                        variant="h5"
                        fontWeight={900}
                        color="info.main"
                      >
                        12
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        fontWeight={600}
                      >
                        Transactions
                      </Typography>
                    </Paper>
                  </Grid>
                </Grid>
              </Grid>

              {/* Payment Methods */}
              <Grid size={{ xs: 12, md: 6 }}>
                <Paper sx={{ p: 4, borderRadius: 3 }}>
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    mb={3}
                  >
                    <Typography variant="h6" fontWeight={800}>
                      Payment Methods
                    </Typography>
                    <Button
                      size="small"
                      startIcon={<IconCreditCard size={16} />}
                      sx={{ textTransform: "none", fontWeight: 600 }}
                    >
                      Add New
                    </Button>
                  </Stack>

                  <Stack spacing={2}>
                    <Box
                      sx={{
                        p: 3,
                        borderRadius: 2,
                        border: `2px solid ${theme.palette.primary.main}`,
                        bgcolor: alpha(theme.palette.primary.main, 0.05),
                      }}
                    >
                      <Stack direction="row" spacing={2} alignItems="center">
                        <Box
                          sx={{
                            width: 48,
                            height: 48,
                            borderRadius: 2,
                            bgcolor: theme.palette.primary.main,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <IconCreditCard size={24} color="white" />
                        </Box>
                        <Box sx={{ flex: 1 }}>
                          <Typography variant="body1" fontWeight={700}>
                            •••• •••• •••• 4532
                          </Typography>
                          <Typography variant="caption" color="text.secondary">
                            Expires 12/26
                          </Typography>
                        </Box>
                        <Chip label="Primary" color="primary" size="small" />
                      </Stack>
                    </Box>

                    <Box
                      sx={{
                        p: 3,
                        borderRadius: 2,
                        border: `1px solid ${alpha(
                          theme.palette.divider,
                          0.5
                        )}`,
                      }}
                    >
                      <Stack direction="row" spacing={2} alignItems="center">
                        <Box
                          sx={{
                            width: 48,
                            height: 48,
                            borderRadius: 2,
                            bgcolor: alpha(theme.palette.info.main, 0.1),
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <IconBuildingBank
                            size={24}
                            color={theme.palette.info.main}
                          />
                        </Box>
                        <Box sx={{ flex: 1 }}>
                          <Typography variant="body1" fontWeight={700}>
                            Bank Account
                          </Typography>
                          <Typography variant="caption" color="text.secondary">
                            ••••••6789
                          </Typography>
                        </Box>
                      </Stack>
                    </Box>
                  </Stack>
                </Paper>
              </Grid>

              {/* Transaction History */}
              <Grid size={{ xs: 12, md: 6 }}>
                <Paper sx={{ p: 4, borderRadius: 3 }}>
                  <Typography variant="h6" fontWeight={800} mb={3}>
                    Recent Transactions
                  </Typography>

                  <List sx={{ p: 0 }}>
                    {[
                      {
                        title: "Tour Payment - Paris",
                        subtitle: "Booking ID: #TR1234",
                        amount: "-$150.00",
                        date: "Jan 15, 2025",
                        type: "debit",
                        icon: IconMapPin,
                      },
                      {
                        title: "Wallet Top-up",
                        subtitle: "Via Credit Card",
                        amount: "+$200.00",
                        date: "Jan 10, 2025",
                        type: "credit",
                        icon: IconWallet,
                      },
                      {
                        title: "Refund - Rome Tour",
                        subtitle: "Cancellation Refund",
                        amount: "+$100.00",
                        date: "Jan 5, 2025",
                        type: "credit",
                        icon: IconArrowDown,
                      },
                      {
                        title: "Tour Payment - Tokyo",
                        subtitle: "Booking ID: #TR1233",
                        amount: "-$180.00",
                        date: "Dec 28, 2024",
                        type: "debit",
                        icon: IconMapPin,
                      },
                    ].map((transaction, idx) => (
                      <Box key={idx}>
                        <ListItem sx={{ px: 0 }}>
                          <ListItemIcon>
                            <Box
                              sx={{
                                width: 48,
                                height: 48,
                                borderRadius: 2,
                                bgcolor: alpha(
                                  transaction.type === "credit"
                                    ? theme.palette.success.main
                                    : theme.palette.error.main,
                                  0.1
                                ),
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                            >
                              <transaction.icon
                                size={24}
                                color={
                                  transaction.type === "credit"
                                    ? theme.palette.success.main
                                    : theme.palette.error.main
                                }
                              />
                            </Box>
                          </ListItemIcon>
                          <ListItemText
                            primary={transaction.title}
                            secondary={
                              <Box>
                                <Typography
                                  variant="caption"
                                  color="text.secondary"
                                >
                                  {transaction.subtitle}
                                </Typography>
                                <br />
                                <Typography
                                  variant="caption"
                                  color="text.secondary"
                                >
                                  {transaction.date}
                                </Typography>
                              </Box>
                            }
                            primaryTypographyProps={{ fontWeight: 700 }}
                          />
                          <Typography
                            variant="h6"
                            fontWeight={900}
                            color={
                              transaction.type === "credit"
                                ? "success.main"
                                : "error.main"
                            }
                          >
                            {transaction.amount}
                          </Typography>
                        </ListItem>
                        {idx < 3 && <Divider />}
                      </Box>
                    ))}
                  </List>

                  <Button
                    fullWidth
                    sx={{
                      mt: 2,
                      textTransform: "none",
                      fontWeight: 600,
                      borderRadius: 2,
                    }}
                  >
                    View All Transactions
                  </Button>
                </Paper>
              </Grid>
            </Grid>
          )}

          {/* Referrals Tab - NEW */}
          {activeTab === 5 && (
            <Grid container spacing={3}>
              {/* Referral Code Card */}
              <Grid size={{ xs: 12, md: 4 }}>
                <Card
                  sx={{
                    background: `linear-gradient(135deg, ${theme.palette.success.light} 0%, ${theme.palette.success.main} 100%)`,
                    color: "white",
                    p: 4,
                    borderRadius: 3,
                  }}
                >
                  <Stack spacing={3}>
                    <Box>
                      <Stack
                        direction="row"
                        spacing={1}
                        alignItems="center"
                        mb={2}
                      >
                        <IconGift size={24} />
                        <Typography
                          variant="body2"
                          sx={{ opacity: 0.9, fontWeight: 500 }}
                        >
                          Your Referral Code
                        </Typography>
                      </Stack>
                      <Box
                        sx={{
                          p: 2,
                          borderRadius: 2,
                          bgcolor: alpha(theme.palette.common.white, 0.25),
                          backdropFilter: "blur(10px)",
                          textAlign: "center",
                        }}
                      >
                        <Typography
                          variant="h4"
                          fontWeight={900}
                          letterSpacing={2}
                        >
                          {userReferralCode}
                        </Typography>
                      </Box>
                    </Box>

                    <Button
                      variant="contained"
                      fullWidth
                      startIcon={<IconCopy size={18} />}
                      onClick={handleCopyReferralCode}
                      sx={{
                        bgcolor: alpha(theme.palette.common.white, 0.25),
                        color: "white",
                        fontWeight: 700,
                        py: 1.5,
                        borderRadius: 2,
                        "&:hover": {
                          bgcolor: alpha(theme.palette.common.white, 0.35),
                        },
                      }}
                    >
                      Copy Code
                    </Button>

                    <Divider
                      sx={{ bgcolor: alpha(theme.palette.common.white, 0.3) }}
                    />

                    <Box sx={{ textAlign: "center" }}>
                      <Typography variant="h3" fontWeight={900}>
                        3
                      </Typography>
                      <Typography variant="body2" sx={{ opacity: 0.9 }}>
                        Total Referrals
                      </Typography>
                    </Box>
                  </Stack>
                </Card>
              </Grid>

              {/* Referral Stats */}
              <Grid size={{ xs: 12, md: 8 }}>
                <Grid container spacing={3}>
                  <Grid size={{ xs: 12, sm: 4 }}>
                    <Paper sx={{ p: 3, borderRadius: 3, textAlign: "center" }}>
                      <Box
                        sx={{
                          width: 56,
                          height: 56,
                          borderRadius: 3,
                          bgcolor: alpha(theme.palette.primary.main, 0.1),
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          mx: "auto",
                          mb: 2,
                        }}
                      >
                        <IconUsers
                          size={28}
                          color={theme.palette.primary.main}
                        />
                      </Box>
                      <Typography variant="h5" fontWeight={900} color="primary">
                        3
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        fontWeight={600}
                      >
                        Active Referrals
                      </Typography>
                    </Paper>
                  </Grid>

                  <Grid size={{ xs: 12, sm: 4 }}>
                    <Paper sx={{ p: 3, borderRadius: 3, textAlign: "center" }}>
                      <Box
                        sx={{
                          width: 56,
                          height: 56,
                          borderRadius: 3,
                          bgcolor: alpha(theme.palette.success.main, 0.1),
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          mx: "auto",
                          mb: 2,
                        }}
                      >
                        <IconCoin
                          size={28}
                          color={theme.palette.success.main}
                        />
                      </Box>
                      <Typography
                        variant="h5"
                        fontWeight={900}
                        color="success.main"
                      >
                        150
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        fontWeight={600}
                      >
                        Points Earned
                      </Typography>
                    </Paper>
                  </Grid>

                  <Grid size={{ xs: 12, sm: 4 }}>
                    <Paper sx={{ p: 3, borderRadius: 3, textAlign: "center" }}>
                      <Box
                        sx={{
                          width: 56,
                          height: 56,
                          borderRadius: 3,
                          bgcolor: alpha(theme.palette.warning.main, 0.1),
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          mx: "auto",
                          mb: 2,
                        }}
                      >
                        <IconGift
                          size={28}
                          color={theme.palette.warning.main}
                        />
                      </Box>
                      <Typography
                        variant="h5"
                        fontWeight={900}
                        color="warning.main"
                      >
                        $50
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        fontWeight={600}
                      >
                        Rewards Earned
                      </Typography>
                    </Paper>
                  </Grid>
                </Grid>
              </Grid>

              {/* Referred Members List */}
              <Grid size={{ xs: 12 }}>
                <Paper sx={{ p: 4, borderRadius: 3 }}>
                  <Typography variant="h6" fontWeight={800} mb={3}>
                    Referred Members
                  </Typography>

                  <List sx={{ p: 0 }}>
                    {[
                      {
                        name: "Sarah Johnson",
                        email: "sarah.j@example.com",
                        joinDate: "Jan 12, 2025",
                        status: "active",
                        reward: "$20",
                      },
                      {
                        name: "Michael Chen",
                        email: "michael.c@example.com",
                        joinDate: "Jan 8, 2025",
                        status: "active",
                        reward: "$20",
                      },
                      {
                        name: "Emma Davis",
                        email: "emma.d@example.com",
                        joinDate: "Dec 28, 2024",
                        status: "pending",
                        reward: "$10",
                      },
                    ].map((member, idx) => (
                      <Box key={idx}>
                        <ListItem sx={{ px: 0, py: 2 }}>
                          <ListItemAvatar>
                            <Avatar
                              sx={{
                                bgcolor: theme.palette.primary.main,
                                fontWeight: 700,
                                width: 48,
                                height: 48,
                              }}
                            >
                              {member.name.charAt(0)}
                            </Avatar>
                          </ListItemAvatar>
                          <ListItemText
                            primary={member.name}
                            secondary={
                              <Box>
                                <Typography
                                  variant="body2"
                                  color="text.secondary"
                                >
                                  {member.email}
                                </Typography>
                                <Typography
                                  variant="caption"
                                  color="text.secondary"
                                >
                                  Joined: {member.joinDate}
                                </Typography>
                              </Box>
                            }
                            primaryTypographyProps={{ fontWeight: 700 }}
                          />
                          <Stack
                            direction="row"
                            spacing={2}
                            alignItems="center"
                          >
                            <Chip
                              label={
                                member.status === "active"
                                  ? "Active"
                                  : "Pending"
                              }
                              color={
                                member.status === "active"
                                  ? "success"
                                  : "warning"
                              }
                              size="small"
                              sx={{ fontWeight: 600 }}
                            />
                            <Box
                              sx={{
                                px: 2,
                                py: 1,
                                borderRadius: 2,
                                bgcolor: alpha(theme.palette.success.main, 0.1),
                              }}
                            >
                              <Typography
                                variant="h6"
                                fontWeight={900}
                                color="success.main"
                              >
                                {member.reward}
                              </Typography>
                            </Box>
                          </Stack>
                        </ListItem>
                        {idx < 2 && <Divider />}
                      </Box>
                    ))}
                  </List>
                </Paper>
              </Grid>

              {/* Referral Rewards Info */}
              <Grid size={{ xs: 12 }}>
                <Paper
                  sx={{
                    p: 3,
                    borderRadius: 3,
                    bgcolor: alpha(theme.palette.info.main, 0.05),
                    border: `1px solid ${alpha(theme.palette.info.main, 0.2)}`,
                  }}
                >
                  <Stack direction="row" spacing={2} alignItems="flex-start">
                    <Box
                      sx={{
                        width: 40,
                        height: 40,
                        borderRadius: 2,
                        bgcolor: theme.palette.info.main,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <IconGift size={20} color="white" />
                    </Box>
                    <Box>
                      <Typography
                        variant="subtitle1"
                        fontWeight={700}
                        gutterBottom
                      >
                        Referral Rewards Program
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        • Earn $20 for each friend who joins using your code
                        <br />
                        • Your friend gets $10 welcome bonus
                        <br />
                        • Earn bonus points for every tour your referrals
                        complete
                        <br />• No limit on referrals - invite unlimited
                        friends!
                      </Typography>
                    </Box>
                  </Stack>
                </Paper>
              </Grid>
            </Grid>
          )}

          {/* Notifications Tab - Enhanced */}
          {activeTab === 6 && (
            <Paper sx={{ p: 4, borderRadius: 3 }}>
              <Typography variant="h5" fontWeight={800} mb={3}>
                Notification Preferences
              </Typography>

              <List sx={{ p: 0 }}>
                {[
                  {
                    title: "Tour Updates",
                    desc: "Get notified about new tours and exciting destinations",
                    enabled: true,
                    icon: IconMapPin,
                  },
                  {
                    title: "Payment Alerts",
                    desc: "Notifications about payments, refunds, and wallet activity",
                    enabled: true,
                    icon: IconWallet,
                  },
                  {
                    title: "Email Notifications",
                    desc: "Receive important updates via email",
                    enabled: false,
                    icon: IconMail,
                  },
                  {
                    title: "SMS Alerts",
                    desc: "Get SMS notifications for booking confirmations",
                    enabled: true,
                    icon: IconPhone,
                  },
                  {
                    title: "Promotional Offers",
                    desc: "Receive special offers, discounts, and deals",
                    enabled: false,
                    icon: IconGift,
                  },
                  {
                    title: "Achievement Badges",
                    desc: "Notifications when you earn new badges and certificates",
                    enabled: true,
                    icon: IconTrophy,
                  },
                ].map((item, idx) => (
                  <Box key={idx}>
                    <ListItem
                      sx={{
                        px: 0,
                        py: 3,
                      }}
                      secondaryAction={
                        <Switch
                          edge="end"
                          checked={item.enabled}
                          sx={{
                            "& .MuiSwitch-switchBase.Mui-checked": {
                              color: theme.palette.success.main,
                            },
                            "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track":
                              {
                                backgroundColor: theme.palette.success.main,
                              },
                          }}
                        />
                      }
                    >
                      <ListItemIcon>
                        <Box
                          sx={{
                            width: 48,
                            height: 48,
                            borderRadius: 2,
                            bgcolor: alpha(theme.palette.primary.main, 0.1),
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <item.icon
                            size={24}
                            color={theme.palette.primary.main}
                          />
                        </Box>
                      </ListItemIcon>
                      <ListItemText
                        primary={item.title}
                        secondary={item.desc}
                        primaryTypographyProps={{
                          fontWeight: 700,
                          fontSize: "1.05rem",
                        }}
                        secondaryTypographyProps={{ sx: { mt: 0.5 } }}
                      />
                    </ListItem>
                    {idx < 5 && <Divider />}
                  </Box>
                ))}
              </List>
            </Paper>
          )}

          {/* Tour History Tab - Enhanced */}
          {activeTab === 7 && (
            <Paper sx={{ p: 4, borderRadius: 3 }}>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                mb={4}
              >
                <Typography variant="h5" fontWeight={800}>
                  Tour History
                </Typography>
                <Chip
                  label="5 Tours Completed"
                  color="success"
                  icon={<IconCheck size={16} />}
                  sx={{ fontWeight: 600 }}
                />
              </Stack>

              <Grid container spacing={3}>
                {[
                  {
                    title: "Paris Cultural Tour",
                    location: "Paris, France",
                    date: "Dec 15-20, 2024",
                    status: "Completed",
                    rating: 5,
                    image:
                      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400&auto=format&fit=crop",
                    price: "$450",
                    duration: "6 Days",
                  },
                  {
                    title: "Rome Historical Tour",
                    location: "Rome, Italy",
                    date: "Nov 10-14, 2024",
                    status: "Completed",
                    rating: 4,
                    image:
                      "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400&auto=format&fit=crop",
                    price: "$380",
                    duration: "5 Days",
                  },
                  {
                    title: "Tokyo Adventure",
                    location: "Tokyo, Japan",
                    date: "Oct 5-12, 2024",
                    status: "Completed",
                    rating: 5,
                    image:
                      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400&auto=format&fit=crop",
                    price: "$520",
                    duration: "8 Days",
                  },
                  {
                    title: "Barcelona Explorer",
                    location: "Barcelona, Spain",
                    date: "Sep 18-22, 2024",
                    status: "Completed",
                    rating: 5,
                    image:
                      "https://images.unsplash.com/photo-1583422409516-2895a77efded?w=400&auto=format&fit=crop",
                    price: "$400",
                    duration: "5 Days",
                  },
                  {
                    title: "London Heritage",
                    location: "London, UK",
                    date: "Aug 10-15, 2024",
                    status: "Completed",
                    rating: 4,
                    image:
                      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400&auto=format&fit=crop",
                    price: "$420",
                    duration: "6 Days",
                  },
                ].map((tour, idx) => (
                  <Grid size={{ xs: 12, md: 6, lg: 4 }} key={idx}>
                    <Card
                      sx={{
                        borderRadius: 3,
                        overflow: "hidden",
                        transition: "transform 0.3s, box-shadow 0.3s",
                        "&:hover": {
                          transform: "translateY(-8px)",
                          boxShadow: `0 12px 24px ${alpha(
                            theme.palette.common.black,
                            0.15
                          )}`,
                        },
                      }}
                    >
                      <Box sx={{ position: "relative" }}>
                        <Box
                          component="img"
                          src={tour.image}
                          alt={tour.title}
                          sx={{
                            width: "100%",
                            height: 200,
                            objectFit: "cover",
                          }}
                        />
                        <Chip
                          label={tour.status}
                          color="success"
                          size="small"
                          sx={{
                            position: "absolute",
                            top: 12,
                            right: 12,
                            fontWeight: 700,
                          }}
                        />
                      </Box>
                      <CardContent sx={{ p: 3 }}>
                        <Typography variant="h6" fontWeight={800} gutterBottom>
                          {tour.title}
                        </Typography>
                        <Stack
                          direction="row"
                          spacing={1}
                          alignItems="center"
                          mb={2}
                        >
                          <IconMapPin
                            size={16}
                            color={theme.palette.text.secondary}
                          />
                          <Typography variant="body2" color="text.secondary">
                            {tour.location}
                          </Typography>
                        </Stack>

                        <Stack
                          direction="row"
                          spacing={1}
                          flexWrap="wrap"
                          gap={1}
                          mb={2}
                        >
                          <Chip
                            icon={<IconCalendar size={14} />}
                            label={tour.date}
                            size="small"
                            variant="outlined"
                          />
                          <Chip
                            icon={<IconClock size={14} />}
                            label={tour.duration}
                            size="small"
                            variant="outlined"
                          />
                        </Stack>

                        <Divider sx={{ my: 2 }} />

                        <Stack
                          direction="row"
                          justifyContent="space-between"
                          alignItems="center"
                        >
                          <Box>
                            <Typography
                              variant="caption"
                              color="text.secondary"
                            >
                              Price Paid
                            </Typography>
                            <Typography
                              variant="h6"
                              fontWeight={900}
                              color="primary"
                            >
                              {tour.price}
                            </Typography>
                          </Box>
                          <Stack direction="row" spacing={0.3}>
                            {Array.from({ length: 5 }).map((_, i) => (
                              <IconStar
                                key={i}
                                size={20}
                                fill={
                                  i < tour.rating
                                    ? theme.palette.warning.main
                                    : "none"
                                }
                                color={
                                  i < tour.rating
                                    ? theme.palette.warning.main
                                    : theme.palette.grey[300]
                                }
                              />
                            ))}
                          </Stack>
                        </Stack>

                        <Button
                          variant="outlined"
                          fullWidth
                          startIcon={<IconDownload size={18} />}
                          sx={{
                            mt: 2,
                            borderRadius: 2,
                            textTransform: "none",
                            fontWeight: 600,
                          }}
                        >
                          Download Certificate
                        </Button>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Paper>
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default Profile;
