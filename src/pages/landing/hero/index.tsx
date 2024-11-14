import { Box, useMediaQuery, useTheme } from "@mui/material";
import Image from "./image";
import Desc from "./desc";
import ResImage from "./res-image";

const Hero = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { md: "row", xs: "column-reverse" },
        justifyContent: "space-between",
        alignItems: "center",
        gap: { lg: 20, md: 10, xs: 2 },
        my: { lg: 5, md: 0, xs: 3 },
        mx: 5,
      }}
    >
      <Desc />
      {isSmallScreen ? <ResImage /> : <Image />}
    </Box>
  );
};

export default Hero;
