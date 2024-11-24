import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import Rtl from "./cache";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Rtl>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Rtl>
  </StrictMode>
);
