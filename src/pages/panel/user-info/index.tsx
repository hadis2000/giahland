import { Avatar, Box } from "@mui/material";
import SecLayout from "../component/sec-layout";
import Btn from "../../../compopnent/button";
import Input from "../../../compopnent/input";

const UserInfo = () => {
  return (
    <>
      <SecLayout text="مشخصات حساب کاربری">
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
          sx={{ my: 3 }}
        >
          <Input startAdornment={<></>} placeholder="نام" />
          <Input startAdornment={<></>} placeholder="نام خانوادگی" />
          <Input startAdornment={<></>} placeholder="شماره موبایل" />
          <Input startAdornment={<></>} placeholder="ایمیل" />
          <Input startAdornment={<></>} placeholder="آدرس منزل" />
          <Input startAdornment={<></>} placeholder="تلفن منزل" />
        </Box>
      </SecLayout>

      <SecLayout text="تغییر رمز عبور">
        <Box
          display="grid"
          gridTemplateColumns={{ md: "repeat(2, 1fr)", xs: "1fr" }}
          gap={2}
          sx={{ my: 3 }}
        >
          <Input
            type="password"
            startAdornment={<></>}
            placeholder="رمز عبور جدید را وارد کنید"
          />
          <Input
            type="password"
            startAdornment={<></>}
            placeholder="تکرار رمز عبور جدید"
          />
          <Box
            gridColumn={"span 2"}
            sx={{
              display: "flex",
              justifyContent: "end",
            }}
          >
            <Btn>ذخیره کردن</Btn>
          </Box>
        </Box>
      </SecLayout>
    </>
  );
};

export default UserInfo;
