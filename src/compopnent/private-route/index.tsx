import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../store"; // مسیر صحیح store خود را وارد کنید

interface PrivateRouteProps {
  element: JSX.Element;
  restricted?: boolean; // تعیین می‌کنیم که این روت محدود به کاربران لاگین‌شده است
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  element,
  restricted = false,
}) => {
  const { token } = useSelector((state: RootState) => state.auth); // توکن از Redux گرفته می‌شود

  // اگر restricted باشد و توکن نباشد، کاربر را به صفحه ورود هدایت می‌کنیم
  if (restricted && !token) {
    return <Navigate to="/login" />;
  }

  // اگر restricted نباشد و توکن وجود داشته باشد، کاربر نمی‌تواند به صفحه ورود دسترسی پیدا کند
  if (!restricted && token) {
    return <Navigate to="/panel" />;
  }

  return element; // در غیر این صورت، کامپوننت مربوطه رندر می‌شود
};

export default PrivateRoute;
