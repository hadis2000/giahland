import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";

import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import Rtl from "./cache";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const root = createRoot(document.getElementById("root") as HTMLElement);

async function enableMocking() {
  const { worker } = await import("./mocks/browser");

  return worker.start();
}

const queryClient = new QueryClient();

enableMocking().then(() => {
  root.render(
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Rtl>
          <ThemeProvider theme={theme}>
            <App />
            <ReactQueryDevtools initialIsOpen />
          </ThemeProvider>
        </Rtl>
      </QueryClientProvider>
    </BrowserRouter>
  );
});
