import { Box } from "@mui/material";
import SecHeader from "../components/sec-header";
import Card from "../../../compopnent/card";
import CarouselItems from "../../../compopnent/carousel";
import { chunkArray } from "../hook";
import { useGetPlants, useResponsive } from "./hook";

export type SliderPopType = {
  title?: string;
  apiUrl?: string;
};

const Slider = ({ title }: SliderPopType) => {
  const { isMobile, isLaptop, isTablet } = useResponsive();

  const { data, isError, isPending, error } = useGetPlants();

  console.log(error, "dataaaaaaa");

  // تعداد ایتم‌ها بسته به اندازه صفحه
  // const itemsPerSlide = isMobile ? 1 : isLaptop ? 3 : isTablet ? 2 : 4;
  // const groupedItems = chunkArray(data, itemsPerSlide);

  // if (isPending) return <>wwwwwwwwwwwwwwwwwwwww</>;

  // if (isError) return <>ddddddddddddddddddddddd</>;

  return (
    <Box sx={{ m: 5, overflow: "hidden" }}>
      <SecHeader>{title}</SecHeader>

      {/* <CarouselItems>
        {groupedItems.map((group, index) => (
          <Box key={index} sx={{ display: "flex", gap: 10 }}>
            {group.map((it, index) => (
              <Card
                key={index}
                title={it.title}
                price={it.price}
                img={it.img}
              />
            ))}
          </Box>
        ))}
      </CarouselItems> */}
    </Box>
  );
};

export default Slider;
