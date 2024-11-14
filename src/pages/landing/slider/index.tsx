import { Box, useMediaQuery, useTheme } from "@mui/material";
import SecHeader from "../components/sec-header";
import Card from "../../../compopnent/card";
import Plants from "../../../facke-data/plants.json";
import CarouselItems from "../../../compopnent/carousel";
import { chunkArray } from "../hook";

const Slider = () => {
  const theme = useTheme();

  // استفاده از MediaQuery برای تشخیص اندازه صفحه
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isLaptop = useMediaQuery(theme.breakpoints.between("md", "lg"));

  // تعداد ایتم‌ها بسته به اندازه صفحه
  const itemsPerSlide = isMobile ? 1 : isLaptop ? 3 : isTablet ? 2 : 4;
  const groupedItems = chunkArray(Plants, itemsPerSlide);

  return (
    <Box sx={{ m: 5, overflow: "hidden" }}>
      <SecHeader>گیاهان آپارتمانی</SecHeader>

      <CarouselItems>
        {groupedItems.map((group, index) => (
          <Box key={index} sx={{ display: "flex", gap: 10 }}>
            {group.map((it, index) => (
              <Card key={index} {...it} />
            ))}
          </Box>
        ))}
      </CarouselItems>
    </Box>
  );
};

export default Slider;
