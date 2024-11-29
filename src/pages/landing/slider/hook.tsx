import { useMediaQuery, useTheme } from "@mui/material";

export const useResponsive = () => {
  const theme = useTheme();

  // استفاده از MediaQuery برای تشخیص اندازه صفحه
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isLaptop = useMediaQuery(theme.breakpoints.between("md", "lg"));

  return { isMobile, isTablet, isLaptop };
};

