import { Field, Formik, Form as FormikForm } from "formik";
import Input from "../../../compopnent/input";
import Btn from "../../../compopnent/button";
import * as Yup from "yup";
import { Box } from "@mui/material";
import { userType } from "../../../model";

const validation = Yup.object({
  fname: Yup.string(),
  lname: Yup.string(),
  phone: Yup.string()
    .required("شماره تماس را وارد کنید")
    .matches(/^\d{11}$/, "شماره تلفن باید دقیقا ۱۱ رقم باشد"),
  email: Yup.string()
    .required("ایمیل را وارد کنید")
    .email("فرمت ایمیل درست نیست"),
});

export type userFormPropType = {
  initialVal: userType;
};

const UserForm = ({ initialVal }: userFormPropType) => {
  return (
    <Formik
      initialValues={initialVal}
      onSubmit={() => {}}
      validationSchema={validation}
    >
      {({ touched, errors }) => (
        <FormikForm
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <Box
            display="grid"
            gridTemplateColumns={{ md: "repeat(2, 1fr)", xs: "1fr" }}
            gap={2}
            sx={{ my: 3 }}
          >
            <Field
              as={Input}
              label="نام"
              name="fname"
              error={touched.fname && Boolean(errors.fname)}
              helperText={touched.fname && errors.fname}
            />
            <Field
              as={Input}
              label="نام خانوادگی"
              name="lname"
              error={touched.lname && Boolean(errors.lname)}
              helperText={touched.lname && errors.lname}
            />
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
              label="آدرس منزل"
              name="add"
              error={touched.add && Boolean(errors.add)}
              helperText={touched.add && errors.add}
            />
            <Field
              as={Input}
              label="تلفن منزل"
              name="phoneH"
              error={touched.phoneH && Boolean(errors.phoneH)}
              helperText={touched.phoneH && errors.phoneH}
            />
            <Box
              gridColumn={"span 2"}
              sx={{
                display: "flex",
                justifyContent: "end",
              }}
            >
              <Btn>ویرایش</Btn>
            </Box>
          </Box>
        </FormikForm>
      )}
    </Formik>
  );
};

export default UserForm;
