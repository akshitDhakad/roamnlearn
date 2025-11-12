import { useState } from "react";
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
} from "@mui/material";
import {
  IconMenu2,
  IconSearch,
  IconBell,
  IconUser,
  IconLogout,
  IconSettings,
} from "@tabler/icons-react";
import { useTheme } from "@mui/material/styles";
import { NAVIGATION_ITEMS } from "../../utils/constants";

interface HeaderProps {
  onMenuClick: () => void;
}

/**
 * Header component with navigation, search, and user menu
 * Implements scroll behavior to hide/show on scroll
 */
const Header = ({ onMenuClick }: HeaderProps) => {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const trigger = useScrollTrigger({
    threshold: 100,
  });

  const handleUserMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleUserMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          backgroundColor: "background.paper",
          color: "text.primary",
          borderBottom: `1px solid ${theme.palette.divider}`,
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ minHeight: { xs: 56, sm: 64 } }}>
            {/* Mobile Menu Button */}
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={onMenuClick}
              sx={{ mr: 2, display: { md: "none" } }}
            >
              <IconMenu2 size={24} />
            </IconButton>

            {/* Logo */}
            <Typography
              variant="h6"
              component="a"
              href="/"
              sx={{
                mr: 4,
                fontWeight: 700,
                color: "primary.main",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              RomanLearn
            </Typography>

            {/* Desktop Navigation */}
            <Box
              sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, gap: 1 }}
            >
              {NAVIGATION_ITEMS.map((item) => (
                <Button
                  key={item.id}
                  color="inherit"
                  sx={{
                    textTransform: "none",
                    fontWeight: 500,
                    "&:hover": {
                      backgroundColor: "action.hover",
                    },
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>

            {/* Right Side Actions */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              {/* Search Button */}
              <IconButton color="inherit" aria-label="search">
                <IconSearch size={20} />
              </IconButton>

              {/* Notifications */}
              <IconButton color="inherit" aria-label="notifications">
                <IconBell size={20} />
              </IconButton>

              {/* User Menu */}
              <IconButton
                onClick={handleUserMenuOpen}
                size="small"
                aria-label="user menu"
                aria-controls={open ? "user-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
              >
                <Avatar sx={{ width: 32, height: 32, bgcolor: "primary.main" }}>
                  <IconUser size={18} />
                </Avatar>
              </IconButton>

              <Menu
                id="user-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleUserMenuClose}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                PaperProps={{
                  sx: {
                    mt: 1.5,
                    minWidth: 200,
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
                  },
                }}
              >
                <MenuItem onClick={handleUserMenuClose}>
                  <IconUser size={18} style={{ marginRight: 8 }} />
                  Profile
                </MenuItem>
                <MenuItem onClick={handleUserMenuClose}>
                  <IconSettings size={18} style={{ marginRight: 8 }} />
                  Settings
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleUserMenuClose}>
                  <IconLogout size={18} style={{ marginRight: 8 }} />
                  Logout
                </MenuItem>
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Slide>
  );
};

export default Header;
