import { useState } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { theme } from "./theme/theme";
import { Layout } from "./components";
import { Home, About, Contact } from "./pages";

/**
 * Main App component
 * Sets up theme provider and layout wrapper
 *
 * TODO: Implement React Router for proper navigation
 * For now, using simple state-based page switching
 */
function App() {
  // Simple routing simulation (replace with React Router later)
  const [currentPage, setCurrentPage] = useState<string>("home");

  // Listen for hash changes (temporary routing)
  if (typeof window !== "undefined") {
    window.addEventListener("hashchange", () => {
      const hash = window.location.hash.substring(1);
      if (hash) setCurrentPage(hash);
    });
  }

  // Render appropriate page
  const renderPage = () => {
    switch (currentPage) {
      case "about":
        return <About />;
      case "contact":
        return <Contact />;
      case "home":
      default:
        return <Home />;
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        {renderPage()}
      </Layout>
    </ThemeProvider>
  );
}

export default App;
