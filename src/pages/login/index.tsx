import { Typography } from "@mui/material";
import LogRegLayout from "../../compopnent/login-reg-layout";
import Form from "./form";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const nav = useNavigate();

  return (
    <LogRegLayout headText="ورود">
      <Form />
      <Typography
        sx={{ fontSize: "16px", fontWeight: 400, textAlign: "center" }}
      >
        حساب کاربری ندارید؟
        <Typography
          component="span"
          sx={{ color: "primary.main", cursor: "pointer" }}
          onClick={() => nav("/register")}
        >
          {" "}
          ثبت نام{" "}
        </Typography>
        کنید
      </Typography>
    </LogRegLayout>
  );
};

export default Login;
