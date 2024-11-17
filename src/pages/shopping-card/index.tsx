import { Box } from "@mui/material";
import CalcShop from "./calc-shop";
import ShopList from "./shop-list";
// import Empty from "./empty";

const ShoppingCard = () => {
  return (
    <Box
      width="100%"
      height="80vh"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "90%",
          height: "50vh",
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
