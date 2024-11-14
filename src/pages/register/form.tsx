import { Field, Formik, Form as FormikForm } from "formik";
import Input from "../../compopnent/input";
import Btn from "../../compopnent/button";
import * as Yup from "yup";

const validation = Yup.object({
  phone: Yup.string()
    .required("شماره تماس را وارد کنید")
    .matches(/^\d{11}$/, "شماره تلفن باید دقیقا ۱۱ رقم باشد"),
  email: Yup.string()
    .required("ایمیل را وارد کنید")
    .email("فرمت ایمیل درست نیست"),
  password: Yup.string()
    .required("رمز عبور را وارد کنید")
    .min(6, "حداقل تعداد کاراکتر 6 عدد میباشد"),
  repassword: Yup.string()
    .required("تکرار رمز عبور را وارد کنید")
    .oneOf([Yup.ref("password")], "رمز عبور و تکرار آن باید یکسان باشند"),
});

const Form = () => {
  return (
    <Formik
      initialValues={{ phone: "", email: "", password: "", repassword: "" }}
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
            label="ایمیل"
            name="email"
            error={touched.email && Boolean(errors.email)}
            helperText={touched.email && errors.email}
          />
          <Field
            as={Input}
            label="تعریف رمز عبور"
            name="password"
            type="password"
            error={touched.password && Boolean(errors.password)}
            helperText={touched.password && errors.password}
          />
          <Field
            as={Input}
            label="تکرار رمز عبور"
            name="repassword"
            type="password"
            error={touched.repassword && Boolean(errors.repassword)}
            helperText={touched.repassword && errors.repassword}
          />
          <Btn type="submit" disabled={!isValid || !dirty}>
            ثبت نام
          </Btn>
        </FormikForm>
      )}
    </Formik>
  );
};

export default Form;
