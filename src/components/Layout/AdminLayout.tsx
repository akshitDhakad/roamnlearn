import { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  alpha,
  useTheme,
  Button,
  useMediaQuery,
} from "@mui/material";
import { IconMenu2, IconUserPlus, IconGauge } from "@tabler/icons-react";
import AdminSidebar from "./AdminSidebar";

interface AdminLayoutProps {
  children: React.ReactNode;
  title?: string;
  activeItemId?: string;
  onItemSelect?: (id: string) => void;
}

/**
 * Admin layout with topbar and persistent sidebar
 */
const AdminLayout = ({
  children,
  title = "Admin Dashboard",
  activeItemId = "dashboard",
  onItemSelect,
}: AdminLayoutProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    setSidebarOpen(false);
  }, [isMobile]);

  const handleMenuClick = () => setSidebarOpen(!sidebarOpen);
  const handleSidebarClose = () => setSidebarOpen(false);

  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        height: "100vh",
        maxHeight: "100vh",
        backgroundColor: "background.default",
        overflow: "hidden",
      }}
    >
      <AdminSidebar
        open={sidebarOpen}
        onClose={handleSidebarClose}
        activeItemId={activeItemId}
        onItemSelect={onItemSelect}
      />

      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          minWidth: 0,
          width: "100%",
          marginLeft: 0,
          height: "100vh",
          maxHeight: "100vh",
          overflow: "hidden",
        }}
      >
        <AppBar
          position="sticky"
          elevation={0}
          sx={{
            backgroundColor: "#f5f5f5",
            color: "text.primary",
            borderBottom: `1px solid ${theme.palette.divider}`,
            backdropFilter: "blur(8px)",
            zIndex: theme.zIndex.drawer + 1,
            width: "100%",
          }}
        >
          <Toolbar
            sx={{
              minHeight: { xs: 56, sm: 64 },
              gap: 1,
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="Open menu"
                onClick={handleMenuClick}
                sx={{
                  mr: 1,
                  "&:hover": {
                    backgroundColor: alpha(theme.palette.primary.main, 0.1),
                  },
                }}
              >
                <IconMenu2 size={22} />
              </IconButton>

              <Typography
                variant="h6"
                sx={{ fontWeight: 700, color: "text.primary" }}
              >
                Admin
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  ml: 2,
                }}
              >
                <IconGauge size={20} />
                <Typography variant="body1" sx={{ fontWeight: 500 }}>
                  Dashboard
                </Typography>
              </Box>
            </Box>

            <Button
              variant="contained"
              startIcon={<IconUserPlus size={18} />}
              sx={{
                backgroundColor: theme.palette.primary.main,
                color: "white",
                textTransform: "none",
                fontWeight: 500,
                "&:hover": {
                  backgroundColor: theme.palette.primary.dark,
                },
              }}
            >
              New Invitation
            </Button>
          </Toolbar>
        </AppBar>

        <Box
          sx={{
            flex: 1,
            py: { xs: 2, md: 3 },
            px: { xs: 2, md: 3 },
            width: "100%",
            overflowY: "auto",
            overflowX: "hidden",
            boxSizing: "border-box",
            backgroundColor: "background.default",
            "&::-webkit-scrollbar": {
              width: "8px",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "rgba(0, 0, 0, 0.2)",
              borderRadius: "4px",
            },
            "&::-webkit-scrollbar-thumb:hover": {
              backgroundColor: "rgba(0, 0, 0, 0.3)",
            },
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default AdminLayout;
