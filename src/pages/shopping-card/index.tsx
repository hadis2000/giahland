import { Box } from "@mui/material";
import CalcShop from "./calc-shop";
import ShopList from "./shop-list";
// import Empty from "./empty";

const ShoppingCard = () => {
  return (
    <Box
      width="100%"
      height={{ md: "80vh", xs: "suto" }}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { md: "row", xs: "column-reverse" },
          justifyContent: "space-between",
          alignItems: "center",
          width: "90%",
          height: { md: "50vh", xs: "suto" },
          gap: 2,
          py: 2,
        }}
      >
        <ShopList />

        <CalcShop />
      </Box>
      {/* <Empty /> */}
    </Box>
  );
};

export default ShoppingCard;
