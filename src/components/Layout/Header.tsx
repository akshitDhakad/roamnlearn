import { useState, useCallback, memo } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  Container,
  useScrollTrigger,
  Slide,
  Menu,
  MenuItem,
  Avatar,
  Divider,
  Badge,
  Tooltip,
  useTheme,
  alpha,
} from "@mui/material";
import {
  IconMenu2,
  IconSearch,
  IconBell,
  IconUser,
  IconLogout,
  IconSettings,
  IconDashboard,
  IconChevronDown,
} from "@tabler/icons-react";
import {
  NAVIGATION_ITEMS,
  APP_NAME,
  TOUR_CATEGORIES,
} from "../../constants/constants";
import MegaMenu from "../common/MegaMenu";

/**
 * Props interface for Header component
 */
interface HeaderProps {
  /** Callback function triggered when mobile menu button is clicked */
  onMenuClick: () => void;
  /** Currently active navigation path (optional) */
  activePath?: string;
  /** Number of unread notifications (optional) */
  notificationCount?: number;
  /** User data (optional) */
  user?: {
    name: string;
    email?: string;
    avatar?: string;
  };
}

/**
 * Enhanced Header component with navigation, mega menu dropdowns, search, and user menu
 *
 * @component
 * @description Implements responsive navigation bar with:
 * - Auto-hide on scroll down, show on scroll up
 * - Mega menu dropdowns on hover for Destinations/Tours
 * - Active link highlighting
 * - Search functionality
 * - Notifications with badge
 * - User menu dropdown
 * - Full keyboard navigation support
 * - Responsive design for mobile/tablet/desktop
 *
 * @example
 * ```tsx
 * <Header
 *   onMenuClick={handleMenuClick}
 *   activePath="/destinations"
 *   notificationCount={5}
 *   user={{ name: "John Doe", email: "john@example.com" }}
 * />
 * ```
 */
const Header = memo(
  ({
    onMenuClick,
    activePath = "/",
    notificationCount = 0,
    user,
  }: HeaderProps) => {
    const theme = useTheme();
    const [userMenuAnchor, setUserMenuAnchor] = useState<null | HTMLElement>(
      null
    );
    const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
    const [megaMenuTimer, setMegaMenuTimer] = useState<number | null>(null);
    const isUserMenuOpen = Boolean(userMenuAnchor);

    // Auto-hide header on scroll down
    const trigger = useScrollTrigger({
      threshold: 100,
      disableHysteresis: true,
    });

    /**
     * Handle mega menu open with delay
     */
    const handleMegaMenuOpen = useCallback(
      (itemId: string) => {
        // Clear any existing timer
        if (megaMenuTimer) {
          clearTimeout(megaMenuTimer);
        }

        // Set immediate open for better UX
        setActiveMegaMenu(itemId);
      },
      [megaMenuTimer]
    );

    /**
     * Handle mega menu close with delay
     */
    const handleMegaMenuClose = useCallback(() => {
      // Add delay before closing for better UX
      const timer = setTimeout(() => {
        setActiveMegaMenu(null);
      }, 150);
      setMegaMenuTimer(timer);
    }, []);

    /**
     * Keep mega menu open when hovering over it
     */
    const handleMegaMenuHover = useCallback(() => {
      if (megaMenuTimer) {
        clearTimeout(megaMenuTimer);
        setMegaMenuTimer(null);
      }
    }, [megaMenuTimer]);

    /**
     * Handle user menu open
     */
    const handleUserMenuOpen = useCallback(
      (event: React.MouseEvent<HTMLElement>) => {
        setUserMenuAnchor(event.currentTarget);
      },
      []
    );

    /**
     * Handle user menu close
     */
    const handleUserMenuClose = useCallback(() => {
      setUserMenuAnchor(null);
    }, []);

    /**
     * Handle search click
     */
    const handleSearchClick = useCallback(() => {
      // TODO: Implement search modal
      console.log("Search clicked");
    }, []);

    /**
     * Handle notification click
     */
    const handleNotificationClick = useCallback(() => {
      // TODO: Implement notifications panel
      console.log("Notifications clicked");
    }, []);

    /**
     * Handle navigation click
     */
    const handleNavClick = useCallback((path: string) => {
      // Simple hash-based navigation (temporary until React Router is implemented)
      if (path === "/about") {
        window.location.hash = "about";
      } else if (path === "/contact") {
        window.location.hash = "contact";
      } else if (path === "/destinations") {
        window.location.hash = "destinations";
      } else if (path === "/") {
        window.location.hash = "home";
      }
      setActiveMegaMenu(null);
    }, []);

    /**
     * Handle user menu actions
     */
    const handleProfileClick = useCallback(() => {
      handleUserMenuClose();
      console.log("Navigate to profile");
    }, [handleUserMenuClose]);

    const handleSettingsClick = useCallback(() => {
      handleUserMenuClose();
      console.log("Navigate to settings");
    }, [handleUserMenuClose]);

    const handleDashboardClick = useCallback(() => {
      handleUserMenuClose();
      // Temporary hash-based navigation until React Router is implemented
      window.location.hash = "admin";
    }, [handleUserMenuClose]);

    const handleLogoutClick = useCallback(() => {
      handleUserMenuClose();
      console.log("Logout");
    }, [handleUserMenuClose]);

    return (
      <>
        <Slide appear={false} direction="down" in={!trigger}>
          <AppBar
            position="sticky"
            elevation={0}
            sx={{
              backgroundColor: "background.paper",
              color: "text.primary",
              borderBottom: `1px solid ${theme.palette.divider}`,
              backdropFilter: "blur(8px)",
              transition: theme.transitions.create(
                ["box-shadow", "background-color"],
                {
                  duration: theme.transitions.duration.short,
                }
              ),
            }}
          >
            <Container maxWidth="xl">
              <Toolbar
                disableGutters
                sx={{
                  minHeight: { xs: 56, sm: 64 },
                  gap: { xs: 1, sm: 2 },
                }}
              >
                {/* Mobile Menu Button */}
                <Tooltip title="Open menu" arrow>
                  <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="Open navigation menu"
                    onClick={onMenuClick}
                    sx={{
                      mr: { xs: 1, sm: 2 },
                      display: { md: "none" },
                      "&:hover": {
                        backgroundColor: alpha(theme.palette.primary.main, 0.1),
                      },
                    }}
                  >
                    <IconMenu2 size={24} />
                  </IconButton>
                </Tooltip>

                {/* Logo */}
                <Typography
                  variant="h6"
                  component="a"
                  href="/"
                  aria-label={`${APP_NAME} home`}
                  sx={{
                    mr: { xs: 2, md: 4 },
                    fontWeight: 700,
                    color: "primary.main",
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    fontSize: { xs: "1rem", sm: "1.25rem" },
                    transition: theme.transitions.create(
                      ["color", "transform"],
                      {
                        duration: theme.transitions.duration.short,
                      }
                    ),
                    "&:hover": {
                      color: "primary.dark",
                      transform: "scale(1.02)",
                    },
                    "&:focus-visible": {
                      outline: `2px solid ${theme.palette.primary.main}`,
                      outlineOffset: 2,
                      borderRadius: 1,
                    },
                  }}
                >
                  {APP_NAME}
                </Typography>

                {/* Desktop Navigation */}
                <Box
                  component="nav"
                  aria-label="Main navigation"
                  sx={{
                    flexGrow: 1,
                    display: { xs: "none", md: "flex" },
                    gap: 0.5,
                  }}
                >
                  {NAVIGATION_ITEMS.map((item) => {
                    const isActive = activePath === item.path;
                    const hasMegaMenu = item.hasDropdown;
                    const isMegaMenuOpen = activeMegaMenu === item.id;

                    return (
                      <Box
                        key={item.id}
                        onMouseEnter={() =>
                          hasMegaMenu && handleMegaMenuOpen(item.id)
                        }
                        onMouseLeave={() =>
                          hasMegaMenu && handleMegaMenuClose()
                        }
                        sx={{ position: "relative" }}
                      >
                        <Button
                          color="inherit"
                          onClick={() => handleNavClick(item.path)}
                          aria-current={isActive ? "page" : undefined}
                          aria-expanded={
                            hasMegaMenu ? isMegaMenuOpen : undefined
                          }
                          aria-haspopup={hasMegaMenu ? "true" : undefined}
                          endIcon={
                            hasMegaMenu ? (
                              <IconChevronDown size={16} />
                            ) : undefined
                          }
                          sx={{
                            textTransform: "none",
                            fontWeight: isActive ? 600 : 500,
                            px: 2,
                            py: 1,
                            borderRadius: 1.5,
                            position: "relative",
                            color: isActive ? "primary.main" : "text.primary",
                            backgroundColor: isActive
                              ? alpha(theme.palette.primary.main, 0.08)
                              : "transparent",
                            "&:hover": {
                              backgroundColor: isActive
                                ? alpha(theme.palette.primary.main, 0.12)
                                : alpha(theme.palette.action.hover, 0.04),
                            },
                            "&:focus-visible": {
                              outline: `2px solid ${theme.palette.primary.main}`,
                              outlineOffset: 2,
                            },
                            "& .MuiButton-endIcon": {
                              transition: theme.transitions.create(
                                ["transform"],
                                {
                                  duration: theme.transitions.duration.short,
                                }
                              ),
                              transform: isMegaMenuOpen
                                ? "rotate(180deg)"
                                : "rotate(0deg)",
                            },
                            "&::after": isActive
                              ? {
                                  content: '""',
                                  position: "absolute",
                                  bottom: 0,
                                  left: "50%",
                                  transform: "translateX(-50%)",
                                  width: "60%",
                                  height: 2,
                                  backgroundColor: "primary.main",
                                  borderRadius: "2px 2px 0 0",
                                }
                              : undefined,
                          }}
                        >
                          {item.label}
                        </Button>
                      </Box>
                    );
                  })}
                </Box>

                {/* Right Side Actions */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: { xs: 0.5, sm: 1 },
                    ml: "auto",
                  }}
                >
                  {/* Search Button */}
                  <Tooltip title="Search tours" arrow>
                    <IconButton
                      color="inherit"
                      aria-label="Search tours"
                      onClick={handleSearchClick}
                      sx={{
                        "&:hover": {
                          backgroundColor: alpha(
                            theme.palette.primary.main,
                            0.1
                          ),
                        },
                        "&:focus-visible": {
                          outline: `2px solid ${theme.palette.primary.main}`,
                          outlineOffset: 2,
                        },
                      }}
                    >
                      <IconSearch size={20} />
                    </IconButton>
                  </Tooltip>

                  {/* Notifications */}
                  <Tooltip
                    title={
                      notificationCount > 0
                        ? `${notificationCount} new notifications`
                        : "Notifications"
                    }
                    arrow
                  >
                    <IconButton
                      color="inherit"
                      aria-label={`Notifications ${
                        notificationCount > 0
                          ? `(${notificationCount} unread)`
                          : ""
                      }`}
                      onClick={handleNotificationClick}
                      sx={{
                        "&:hover": {
                          backgroundColor: alpha(
                            theme.palette.primary.main,
                            0.1
                          ),
                        },
                        "&:focus-visible": {
                          outline: `2px solid ${theme.palette.primary.main}`,
                          outlineOffset: 2,
                        },
                      }}
                    >
                      <Badge
                        badgeContent={notificationCount}
                        color="error"
                        max={99}
                        overlap="circular"
                      >
                        <IconBell size={20} />
                      </Badge>
                    </IconButton>
                  </Tooltip>

                  {/* User Menu */}
                  <Tooltip title={user?.name || "Account"} arrow>
                    <IconButton
                      onClick={handleUserMenuOpen}
                      size="small"
                      aria-label="User account menu"
                      aria-controls={isUserMenuOpen ? "user-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={isUserMenuOpen ? "true" : undefined}
                      sx={{
                        ml: { xs: 0.5, sm: 1 },
                        border: isUserMenuOpen
                          ? `2px solid ${theme.palette.primary.main}`
                          : "2px solid transparent",
                        transition: theme.transitions.create(["border-color"], {
                          duration: theme.transitions.duration.short,
                        }),
                        "&:hover": {
                          borderColor: alpha(theme.palette.primary.main, 0.5),
                        },
                        "&:focus-visible": {
                          outline: `2px solid ${theme.palette.primary.main}`,
                          outlineOffset: 2,
                        },
                      }}
                    >
                      <Avatar
                        src={user?.avatar}
                        alt={user?.name || "User"}
                        sx={{
                          width: 32,
                          height: 32,
                          bgcolor: "primary.main",
                          fontSize: "0.875rem",
                        }}
                      >
                        {user?.name ? (
                          user.name.charAt(0).toUpperCase()
                        ) : (
                          <IconUser size={18} />
                        )}
                      </Avatar>
                    </IconButton>
                  </Tooltip>

                  {/* User Dropdown Menu */}
                  <Menu
                    id="user-menu"
                    anchorEl={userMenuAnchor}
                    open={isUserMenuOpen}
                    onClose={handleUserMenuClose}
                    transformOrigin={{ horizontal: "right", vertical: "top" }}
                    anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                    slotProps={{
                      paper: {
                        elevation: 0,
                        sx: {
                          mt: 1.5,
                          minWidth: 220,
                          borderRadius: 2,
                          border: `1px solid ${theme.palette.divider}`,
                          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.12)",
                          "& .MuiMenuItem-root": {
                            px: 2,
                            py: 1.5,
                            borderRadius: 1,
                            mx: 1,
                            my: 0.5,
                            gap: 1.5,
                            transition: theme.transitions.create(
                              ["background-color"],
                              {
                                duration: theme.transitions.duration.shorter,
                              }
                            ),
                            "&:hover": {
                              backgroundColor: alpha(
                                theme.palette.primary.main,
                                0.08
                              ),
                            },
                            "&:focus-visible": {
                              outline: `2px solid ${theme.palette.primary.main}`,
                              outlineOffset: -2,
                            },
                          },
                        },
                      },
                    }}
                  >
                    {/* User Info Section */}
                    {user && (
                      <Box sx={{ px: 2, py: 1.5, mb: 1 }}>
                        <Typography
                          variant="subtitle2"
                          sx={{ fontWeight: 600 }}
                        >
                          {user.name}
                        </Typography>
                        {user.email && (
                          <Typography variant="caption" color="text.secondary">
                            {user.email}
                          </Typography>
                        )}
                      </Box>
                    )}

                    <Divider sx={{ my: 1 }} />

                    <MenuItem onClick={handleDashboardClick}>
                      <IconDashboard size={18} />
                      Dashboard
                    </MenuItem>
                    <MenuItem onClick={handleProfileClick}>
                      <IconUser size={18} />
                      Profile
                    </MenuItem>
                    <MenuItem onClick={handleSettingsClick}>
                      <IconSettings size={18} />
                      Settings
                    </MenuItem>

                    <Divider sx={{ my: 1 }} />

                    <MenuItem
                      onClick={handleLogoutClick}
                      sx={{
                        color: "error.main",
                        "&:hover": {
                          backgroundColor: alpha(
                            theme.palette.error.main,
                            0.08
                          ),
                        },
                      }}
                    >
                      <IconLogout size={18} />
                      Logout
                    </MenuItem>
                  </Menu>
                </Box>
              </Toolbar>
            </Container>
          </AppBar>
        </Slide>

        {/* Mega Menu for Destinations */}
        {activeMegaMenu === "destinations" && (
          <Box
            onMouseEnter={handleMegaMenuHover}
            onMouseLeave={handleMegaMenuClose}
            sx={{ position: "relative" }}
          >
            <MegaMenu
              categories={TOUR_CATEGORIES}
              open={true}
              onLinkClick={handleNavClick}
            />
          </Box>
        )}

        {/* Mega Menu for Tours */}
        {activeMegaMenu === "tours" && (
          <Box
            onMouseEnter={handleMegaMenuHover}
            onMouseLeave={handleMegaMenuClose}
            sx={{ position: "relative" }}
          >
            <MegaMenu
              categories={TOUR_CATEGORIES}
              open={true}
              onLinkClick={handleNavClick}
            />
          </Box>
        )}
      </>
    );
  }
);

// Display name for debugging
Header.displayName = "Header";

export default Header;
