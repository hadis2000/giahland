import { Typography } from "@mui/material";
import LogRegLayout from "../../compopnent/login-reg-layout";
import Form from "./form";

const Register = () => {
  return (
    <LogRegLayout headText="ثبت نام ">
      <Form />
      <Typography
        sx={{ fontSize: "16px", fontWeight: 400, textAlign: "center" }}
      >
        حساب کاربری دارید؟
        <Typography
          component="span"
          sx={{ color: "primary.main", cursor: "pointer" }}
        >
          {" "}
          ورود{" "}
        </Typography>
        کنید
      </Typography>
    </LogRegLayout>
  );
};

export default Register;
