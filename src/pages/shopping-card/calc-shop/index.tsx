import { Box } from "@mui/material";
import Input from "../../../compopnent/input";
import Btn from "../../../compopnent/button";

const CalcShop = () => {
  return (
    <Box
      sx={{
        border: "1px solid",
        borderColor: "neutral.6",
        borderRadius: "16px",
        padding: "16px",
        width: { md: "25%", xs: "80%" },
        color: "neutral.10",
        display: "flex",
        flexDirection: "column",
        gap: 4,
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <span>تعداد گیاه:</span>
        <span>1</span>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <span>مجموع سبد خرید: </span>
        <span>۵۶۰/۰۰۰ تومان</span>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <span>ارسال توسط:</span>
        <span>گیاه لند</span>
      </Box>

      <Input
        inputSx={{
          backgroundColor: "neutral.3",
          borderColor: "neutral.3",
        }}
        label="کد تخفیف:"
        placeholder="کد تخفیف را وارد کنید"
      />
      <Btn sx={{ width: "100%" }}>سفارش و خرید</Btn>
    </Box>
  );
};

export default CalcShop;
