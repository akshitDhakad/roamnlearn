import { ThemeProvider, CssBaseline } from "@mui/material";
import { theme } from "./theme/theme";
import { Layout } from "./components";
import { Home } from "./pages";

/**
 * Main App component
 * Sets up theme provider and layout wrapper
 */
function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <Home />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
