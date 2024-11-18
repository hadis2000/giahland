import { Box } from "@mui/material";
import Price from "./price";
import PlantsInfo from "./plants-info";

const Info = () => {
  return (
    <Box
      sx={{
        border: "1px solid gray",
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
      <Box width="100%" sx={{ border: "1px solid red" }}>
        ggggg
      </Box>
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
