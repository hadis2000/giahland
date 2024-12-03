import axios from 'axios';

const axiosInstance = axios.create({
  // baseURL: 'https://localhost:5173', // آدرس پایه API
  timeout: 10000, // زمان محدودیت درخواست
});

// اضافه کردن interceptor برای درخواست‌ها
axiosInstance.interceptors.request.use(
  (config) => {
    // افزودن توکن یا سایر تنظیمات به درخواست
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // هندل خطاهای درخواست
    return Promise.reject(error);
  }
);

// اضافه کردن interceptor برای پاسخ‌ها
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // هندل خطاها
    if (error.response?.status === 304) {
      return null;
    }
    if (error.response?.status === 401) {
      // ریدایرکت به صفحه لاگین یا حذف توکن
      localStorage.removeItem('token');
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
