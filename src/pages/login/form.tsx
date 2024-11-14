import { Formik, Field, Form as FormikForm } from "formik";
import Input from "../../compopnent/input";
import Btn from "../../compopnent/button";
import { Typography } from "@mui/material";
import * as Yup from "yup";

const validation = Yup.object({
  phone: Yup.string()
    .required("شماره تماس را وارد کنید")
    .matches(/^\d{11}$/, "شماره تلفن باید دقیقا ۱۱ رقم باشد"),
  password: Yup.string()
    .required("رمز عبور را وارد کنید")
    .min(6, "حداقل تعداد کاراکتر 6 عدد میباشد"),
});

const Form = () => {
  return (
    <Formik
      initialValues={{ phone: "", password: "" }}
      onSubmit={() => {}}
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
