import { Box } from "@mui/material";
import Empty from "./empty";

const ShoppingCard = () => {
  return (
    <Box
      width="100%"
      height="85vh"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Empty />
    </Box>
  );
};

export default ShoppingCard;
