import { Box, useMediaQuery, useTheme } from "@mui/material";
import Item from "./item";
import { chunkArray } from "../hook";
import plan from "../../../facke-data/plants-2.json";
import CarouselItems from "../../../compopnent/carousel";

const List = () => {
  const theme = useTheme();

  // استفاده از MediaQuery برای تشخیص اندازه صفحه
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isLaptop = useMediaQuery(theme.breakpoints.between("md", "lg"));

  // تعداد ایتم‌ها بسته به اندازه صفحه
  const itemsPerSlide = isMobile ? 1 : isLaptop ? 3 : isTablet ? 2 : 4;
  const groupedItems = chunkArray(plan, itemsPerSlide);

  return (
    <CarouselItems height={300}>
      {groupedItems.map((group, index) => (
        <Box key={index} sx={{ display: "flex", gap: 10, m: 5 }}>
          {group?.map((it, index) => <Item key={index} {...it} />)}
        </Box>
      ))}
    </CarouselItems>
  );
};

export default List;
