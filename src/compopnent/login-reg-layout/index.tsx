import { Home } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";
import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import Image from "../image";

const LogRegLayout = ({
  children,
  headText,
}: {
  children?: ReactNode;
  headText?: string;
}) => {
  const nav = useNavigate();

  return (
    <Box
      width="100%"
      height="100vh"
      sx={{
        display: "flex",
        flexDirection: { md: "row", xs: "column-reverse" },
      }}
    >
      <Box
        height="100vh"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: { md: "50%", xs: "100%" },
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            width: { md: "400px", xs: "85%" },
            backgroundColor: "white",
            borderRadius: { md: 0, xs: 8 },
            position: { md: "relative", xs: "absolute" },
            bottom: "-12px",
            py: 5,
            px: "7%",
          }}
        >
          <Typography
            variant="h5"
            component="h5"
            sx={{ fontSize: "20px", fontWeight: 600 }}
          >
            {headText}
          </Typography>
          {children}
        </Box>
      </Box>

      <Box
        sx={{
          width: { md: "50%", xs: "100%" },
          height: "100vh",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <IconButton
          onClick={() => nav("/")}
          sx={{
            backgroundColor: "primary.main",
            color: "#fff",
            position: "absolute",
            top: 10,
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          <Home fontSize="large" />
        </IconButton>

        <Image
          width="100%"
          height="100%"
          loading="lazy"
          src="/img/log-reg.png"
        />
      </Box>
    </Box>
  );
};

export default LogRegLayout;
