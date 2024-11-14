import { Box } from "@mui/system";
import Item from "../components/item";
import { CreditCard, LocalShipping, Verified } from "@mui/icons-material";

const items = [
  {
    icon: <CreditCard />,
    header: "پرداخت درب منزل",
    text: "برای ایجاد اطمینان خاطر مشتریان،علاوه بر پرداخت آنلاین امکان پرداخت درب منزل وجود دارد",
  },
  {
    icon: <Verified />,
    header: "ضمانت محصول",
    text: "به مدت دو هفته پس از دریافت محصول در صورت وجود مشکل میتوانید مرجوع کنید",
  },
  {
    icon: <LocalShipping />,
    header: "تحویل درب منزل",
    text: "با ایجاد آدرس منزل خود در پروفایل کاربری،محصول خود را درب منزل تحویل بگیرید",
  },
];

const Benefits = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { md: "row", xs: "column" },
        gap: { md: "80px", xs: "50px" },
        mx: 5,
        my: 8,
      }}
    >
      {items.map((it, index) => (
        <Item key={index} {...it} />
      ))}
    </Box>
  );
};

export default Benefits;
