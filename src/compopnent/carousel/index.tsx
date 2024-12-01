import Carousel from "react-material-ui-carousel";
import { CustomCardProp } from "../card";
import { ReactNode } from "react";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { CarouselProps } from "react-material-ui-carousel/dist/components/types";

export type CarouselItemsType = {
  items?: CustomCardProp[];
  children?: ReactNode;
} & CarouselProps;

const CarouselItems = ({ children, ...carouselProps }: CarouselItemsType) => {
  return (
    <Carousel
      {...carouselProps}
      NextIcon={<ArrowBackIos />}
      PrevIcon={<ArrowForwardIos />}
      navButtonsAlwaysVisible
      navButtonsProps={{
        style: {
          backgroundColor: "transparent",
          border: "1px solid",
          borderColor: "#417F56",
          color: "#417F56",
        },
      }}
    >
      {children}
    </Carousel>
  );
};

export default CarouselItems;
