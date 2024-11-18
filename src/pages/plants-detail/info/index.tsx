import { Box, useMediaQuery, useTheme } from "@mui/material";
import Price from "./price";
import PlantsInfo from "./plants-info";
import Gallery from "./gallery";

const Info = () => {
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  // const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  // const isLaptop = useMediaQuery(theme.breakpoints.between("md", "lg"));

  return (
    <Box
      sx={{
        width: "97%",
        mx: "auto",
        padding: 2,
        gap: 2,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        // mt: 8,
      }}
    >
      <Gallery />
      {!isMobile && <PlantsInfo />}

      <Box
        width="100%"
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Price />
      </Box>
    </Box>
  );
};

export default Info;
