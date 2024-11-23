import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Box } from "@mui/material";

const Test = () => {
  const slides = ["Slide 1", "Slide 2", "Slide 3", "Slide 4"];
  return (
    <Box sx={{ width: "100%", maxWidth: "600px", margin: "0 auto" }}>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={20}
        slidesPerView={1}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "200px",
                backgroundColor: "primary.main",
                color: "white",
                fontSize: "1.5rem",
                borderRadius: "8px",
              }}
            >
              {slide}
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default Test;
