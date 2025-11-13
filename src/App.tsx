import { useState, useEffect } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { theme } from "./theme/theme";
import { Layout } from "./components";
import {
  Home,
  About,
  Contact,
  PrivacyPolicy,
  TermsOfService,
  Career,
  Documentation,
  HelpCenter,
  Destinations,
} from "./pages";

/**
 * Main App component
 * Sets up theme provider and layout wrapper
 *
 * TODO: Implement React Router for proper navigation
 * For now, using simple state-based page switching
 */
function App() {
  // Simple routing simulation (replace with React Router later)
  const [currentPage, setCurrentPage] = useState<string>(() => {
    // Initialize from hash if present
    if (typeof window !== "undefined") {
      const hash = window.location.hash.substring(1);
      return hash || "home";
    }
    return "home";
  });

  // Listen for hash changes (temporary routing)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1);
      if (hash) {
        setCurrentPage(hash);
      } else {
        setCurrentPage("home");
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  // Render appropriate page
  const renderPage = () => {
    switch (currentPage) {
      case "about":
        return <About />;
      case "contact":
        return <Contact />;
      case "privacy":
        return <PrivacyPolicy />;
      case "terms":
        return <TermsOfService />;
      case "career":
        return <Career />;
      case "documentation":
        return <Documentation />;
      case "help":
        return <HelpCenter />;
      case "destinations":
        return <Destinations />;
      case "home":
      default:
        return <Home />;
    }
  };

  // Map currentPage to path format for Header
  const getActivePath = () => {
    if (currentPage === "home") return "/";
    return `/${currentPage}`;
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout activePath={getActivePath()}>{renderPage()}</Layout>
    </ThemeProvider>
  );
}

export default App;
