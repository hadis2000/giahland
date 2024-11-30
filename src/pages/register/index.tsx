import { Typography } from "@mui/material";
import LogRegLayout from "../../compopnent/login-reg-layout";
import Form from "./form";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const nav = useNavigate();

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
          onClick={() => nav("/login")}
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
