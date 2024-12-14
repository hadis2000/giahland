import { Box } from "@mui/material";
import SecLayout from "../component/sec-layout";
import Input from "../../../compopnent/input";
import Btn from "../../../compopnent/button";

const ChangePass = () => {
  return (
    <SecLayout text="تغییر رمز عبور">
      <Box
        display="grid"
        gridTemplateColumns={{ md: "repeat(2, 1fr)", xs: "1fr" }}
        gap={2}
        sx={{ my: 3 }}
      >
        <Input type="password" placeholder="رمز عبور جدید را وارد کنید" />
        <Input type="password" placeholder="تکرار رمز عبور جدید" />
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
  );
};

export default ChangePass;
