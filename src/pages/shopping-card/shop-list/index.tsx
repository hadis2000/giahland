import { Box, Typography } from "@mui/material";
import Item from "./item";

const ShopList = () => {
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
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </Box>
    </Box>
  );
};

export default ShopList;
