import { Box, Typography } from "@mui/material";
import Item from "./item";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";

const ShopList = () => {
  
  const cartItems = useSelector((state: RootState) => state.cart.items);
  
  return (
    <Box
      sx={{
        border: "1px solid",
        borderColor: "neutral.6",
        borderRadius: "16px",
        padding: "16px",
        width: { md: "60%", xs: "80%" },
      }}
    >
      <Typography variant="h6" component="h6" fontSize="16px" fontWeight="500">
        سبد خرید شما
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          gap: 2,
          flexWrap: "wrap",
          height: "50vh",
          overflow: "auto",
        }}
      >
        {cartItems.map(item => (
          <Item {...item} />
        ))}
      </Box>
    </Box>
  );
};

export default ShopList;
