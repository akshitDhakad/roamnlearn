import { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Container,
  alpha,
  useTheme,
} from "@mui/material";
import { IconMenu2 } from "@tabler/icons-react";
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
  activeItemId = "overview",
  onItemSelect,
}: AdminLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const theme = useTheme();

  const handleMenuClick = () => setSidebarOpen(!sidebarOpen);
  const handleSidebarClose = () => setSidebarOpen(false);

  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        backgroundColor: "background.default",
      }}
    >
      <AdminSidebar
        open={sidebarOpen}
        onClose={handleSidebarClose}
        activeItemId={activeItemId}
        onItemSelect={onItemSelect}
      />

      <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <AppBar
          position="sticky"
          elevation={0}
          sx={{
            backgroundColor: "background.paper",
            color: "text.primary",
            borderBottom: `1px solid ${theme.palette.divider}`,
            backdropFilter: "blur(8px)",
          }}
        >
          <Toolbar
            sx={{
              minHeight: { xs: 56, sm: 64 },
              gap: 1,
            }}
          >
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

            <Typography variant="h6" sx={{ fontWeight: 700 }}>
              {title}
            </Typography>
          </Toolbar>
        </AppBar>

        <Container
          maxWidth="xl"
          sx={{
            flex: 1,
            py: { xs: 2, md: 3 },
          }}
        >
          {children}
        </Container>
      </Box>
    </Box>
  );
};

export default AdminLayout;
