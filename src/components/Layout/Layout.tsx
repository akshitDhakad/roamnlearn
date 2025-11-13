import { useState } from "react";
import { Box } from "@mui/material";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
  activePath?: string;
}

/**
 * Main Layout component that wraps all pages
 * Manages sidebar state and provides consistent structure
 */
const Layout = ({ children, activePath = "/" }: LayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleMenuClick = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleSidebarClose = () => {
    setSidebarOpen(false);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        backgroundColor: "background.default",
      }}
    >
      <Header onMenuClick={handleMenuClick} activePath={activePath} />
      <Box sx={{ display: "flex", flex: 1 }}>
        <Sidebar open={sidebarOpen} onClose={handleSidebarClose} />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            width: { md: `calc(100% - ${sidebarOpen ? 280 : 0}px)` },
            transition: (theme) =>
              theme.transitions.create("width", {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
              }),
          }}
        >
          {children}
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;
