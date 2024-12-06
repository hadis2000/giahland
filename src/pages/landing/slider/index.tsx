import { Box } from "@mui/material";
import SecHeader from "../components/sec-header";
import Card from "../../../compopnent/card";
import CarouselItems from "../../../compopnent/carousel";
import { chunkArray } from "../hook";
import { useResponsive } from "./hook";

import { useFetchData } from "../../../utils/apiService";
import { plantType } from "../../../model";

export type SliderPopType = {
  plantTypeTitle?: string;
  plantTypeId?: string;
};

const Slider = ({ plantTypeTitle, plantTypeId }: SliderPopType) => {
  const { isMobile, isLaptop, isTablet } = useResponsive();
  const { data, error, isLoading } = useFetchData({
    queryKey: ["plantsType", plantTypeId],
    apiUrl: "/getPlants",
    parameter: { plantTypeId: plantTypeId },
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {String(error)}</p>;

  // تعداد ایتم‌ها بسته به اندازه صفحه
  const itemsPerSlide = isMobile ? 1 : isLaptop ? 3 : isTablet ? 2 : 4;
  const groupedItems = chunkArray(data, itemsPerSlide);

  return (
    <Box sx={{ m: 5, overflow: "hidden" }}>
      <SecHeader>{plantTypeTitle}</SecHeader>

      <CarouselItems height={400}>
        {(groupedItems as plantType[][]).map((group, index) => (
          <Box key={index} sx={{ display: "flex", gap: 10 }}>
            {group.map((it, index) => (
              <Card
                key={index}
                plantId={it.id}
                title={it.title}
                price={it.price}
                img={it.img}
              />
            ))}
          </Box>
        ))}
      </CarouselItems>
    </Box>
  );
};

export default Slider;
