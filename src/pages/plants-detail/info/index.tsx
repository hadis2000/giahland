import { Box } from "@mui/material";
import Price from "./price";
import PlantsInfo from "./plants-info";
import Gallery from "./gallery";
import { plantType } from "../../../model";

const Info = ({ img, price, ...restInfo }: plantType) => {
 
  return (
    <Box
      sx={{
        width: "90%",
        mx: "auto",
        padding: 2,
        gap: 2,
        display: "flex",
        flexDirection: { md: "row", xs: "column" },
        justifyContent: "space-between",
        alignItems: "center",
        // mt: 8,
      }}
    >
      <Gallery key={restInfo.id} img={img} />
      <PlantsInfo {...restInfo} />

      <Box
        width="100%"
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Price price={price} id={restInfo.id} title={restInfo.title} />
      </Box>
    </Box>
  );
};

export default Info;
