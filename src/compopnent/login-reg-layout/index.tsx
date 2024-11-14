import { Box, Typography } from "@mui/material";
import { ReactNode } from "react";

const LogRegLayout = ({
  children,
  headText,
}: {
  children?: ReactNode;
  headText?: string;
}) => {
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
        }}
      >
        <img width="100%" height="100%" loading="lazy" src="/img/log-reg.png" />
      </Box>
    </Box>
  );
};

export default LogRegLayout;
