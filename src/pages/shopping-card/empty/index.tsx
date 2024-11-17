import { Box, Typography } from "@mui/material";
import Btn from "../../../compopnent/button";
import BasketImg from "./basket-img";
import { ArrowBack } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const Empty = () => {
  const nav = useNavigate();

  return (
    <Box
      width="400px"
      height="400px"
      sx={{
        textAlign: "center",
      }}
    >
      <BasketImg />
      <Typography sx={{ fontWeight: 600, fontSize: "19px" }}>
        سبد خرید شما خالی می باشد!
      </Typography>
      <Typography sx={{ fontWeight: 400, fontSize: "19px", mb: 2 }}>
        می توانید برای مشاهده بیشتر محصولات به صفحه اصلی بروید
      </Typography>
      <Btn endIcon={<ArrowBack />} onClick={() => nav("/")} variant="outlined">
        بازگشت به صفحه اصلی
      </Btn>
    </Box>
  );
};

export default Empty;
