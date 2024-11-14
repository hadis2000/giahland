import Carousel from "react-material-ui-carousel";
import { CustomCardProp } from "../card";
import { ReactNode } from "react";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

export type CarouselItemsType = {
  items?: CustomCardProp[];
  children?: ReactNode;
};

const CarouselItems = ({ children }: CarouselItemsType) => {
  return (
    <Carousel
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
