import * as Yup from "yup";

export const validation = Yup.object({
  phone: Yup.string()
    .required("شماره تماس را وارد کنید")
    .matches(/^\d{11}$/, "شماره تلفن باید دقیقا ۱۱ رقم باشد"),
  password: Yup.string()
    .required("رمز عبور را وارد کنید")
    .min(6, "حداقل تعداد کاراکتر 6 عدد میباشد"),
});
