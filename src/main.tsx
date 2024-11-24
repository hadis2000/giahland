import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";

import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import Rtl from "./cache";

const root = createRoot(document.getElementById("root") as HTMLElement);

async function enableMocking() {
  const { worker } = await import("./mocks/browser");

  return worker.start();
}

enableMocking().then(() => {
  root.render(
    <BrowserRouter>
      <Rtl>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </Rtl>
    </BrowserRouter>
  );
});
