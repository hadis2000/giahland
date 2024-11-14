import { Avatar, Box } from "@mui/material";
import RightMenu from "./right-menu";
import HeadText from "./component/head-text";
import SecLayout from "./component/sec-layout";
import Btn from "../../compopnent/button";
import Input from "../../compopnent/input";

const Panel = () => {
  return (
    <Box
      width="100%"
      height="89vh"
      sx={{
        display: "flex",
      }}
    >
      <RightMenu />
      <Box width={{ md: "70%", xs: "65%" }} sx={{ pt: 5, px: 3 }}>
        <HeadText text="مشخصات حساب کاربری" />
        <SecLayout>
          <Box
            sx={{
              display: "flex",
              gap: "10px",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ width: "75px", height: "75px" }} />
            <Btn size="medium">ویرایش با تصویر جدید</Btn>
            <Btn size="medium" variant="outlined">
              حذف تصویر
            </Btn>
          </Box>

          <Box
            display="grid"
            gridTemplateColumns={{ md: "repeat(2, 1fr)", xs: "1fr" }}
            gap={2}
          >
            <Input startAdornment={<></>} placeholder="نام" />
            <Input startAdornment={<></>} placeholder="نام خانوادگی" />
            <Input startAdornment={<></>} placeholder="شماره موبایل" />
            <Input startAdornment={<></>} placeholder="ایمیل" />
            <Input startAdornment={<></>} placeholder="آدرس منزل" />
            <Input startAdornment={<></>} placeholder="تلفن منزل" />
          </Box>
        </SecLayout>
      </Box>
    </Box>
  );
};

export default Panel;
