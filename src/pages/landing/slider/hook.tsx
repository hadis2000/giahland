import { useMediaQuery, useTheme } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useResponsive = () => {
  const theme = useTheme();

  // استفاده از MediaQuery برای تشخیص اندازه صفحه
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isLaptop = useMediaQuery(theme.breakpoints.between("md", "lg"));

  return { isMobile, isTablet, isLaptop };
};

// call api

const plantApi = axios.create({
  baseURL: "http://localhost:5173",
});

export const getPlants = async () => {
  const res = await plantApi.get("/getPlants");
  return res.data;
};

// use react query

export const useGetPlants = () => {
  const data = useQuery({ queryKey: ["plants"], queryFn: getPlants });

  return data;
};
