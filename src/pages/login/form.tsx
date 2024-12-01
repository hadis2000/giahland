import { Formik, Field, Form as FormikForm } from "formik";
import Input from "../../compopnent/input";
import Btn from "../../compopnent/button";
import { Typography } from "@mui/material";
import { validation } from "./validatin";

// auth
import { useDispatch } from "react-redux";
import { usePostData } from "../../utils/apiService";
import { loginSuccess } from "../../features/auth/authSlice";

const Form = () => {
  const dispatch = useDispatch();

  const { mutate: postData } = usePostData({
    successFunc: (data) => {
      dispatch(loginSuccess(data));
    },
  });

  return (
    <Formik
      initialValues={{ phone: "", password: "" }}
      onSubmit={(e) => {
        postData({ url: "/login", data: e });
      }}
      validationSchema={validation}
    >
      {({ touched, errors, isValid, dirty }) => (
        <FormikForm
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <Field
            as={Input}
            label="شماره موبایل"
            name="phone"
            error={touched.phone && Boolean(errors.phone)}
            helperText={touched.phone && errors.phone}
          />
          <Field
            as={Input}
            label="رمز عبور"
            name="password"
            type="password"
            error={touched.password && Boolean(errors.password)}
            helperText={touched.password && errors.password}
          />
          <Typography
            sx={{ fontSize: "14px", fontWeight: 400, color: "primary.main" }}
          >
            بازیابی رمز عبور
          </Typography>
          <Btn type="submit" disabled={!dirty || !isValid}>
            ورود
          </Btn>
        </FormikForm>
      )}
    </Formik>
  );
};

export default Form;
