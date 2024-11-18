import { Box } from "@mui/material";
import Price from "./price";
import PlantsInfo from "./plants-info";
import Gallery from "./gallery";

const Info = () => {
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
        mt: 8,
      }}
    >
      <Gallery />
      <PlantsInfo />
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
