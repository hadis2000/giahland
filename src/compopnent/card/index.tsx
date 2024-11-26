import { Box, CardProps } from "@mui/material";
import Btn from "../button";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { plantType } from "../../model";

const StyledBox = styled(Box)(({ theme }) => ({
  width: "272px",
  //   width: "226px",
  padding: "16px",
  border: `1px solid ${theme.palette.neutral[6]}`,
  borderRadius: "12px",
}));

export type CustomCardProp = Pick<plantType, "title" | "img" | "price">;

export type CardPropType = CustomCardProp & CardProps;

const Card = (props: CardPropType) => {
  const { title, img, price } = props;

  const nav = useNavigate();

  return (
    <StyledBox {...props}>
      <Box
        component="img"
        src={img ? img[0] : "/img/empty.jpg"}
        alt={title}
        sx={{
          width: "100%",
          height: "auto",
          borderRadius: "8px",
        }}
      />
      <Box sx={{ m: 1 }}>{title}</Box>
      <Box sx={{ display: "flex", justifyContent: "space-between", m: 1 }}>
        <Box>قیمت : </Box>
        <Box>{price} تومان</Box>
      </Box>
      <Btn
        onClick={() => nav("/plant-detail/2")}
        sx={{
          width: "100%",
        }}
      >
        مشاهد بیشتر
      </Btn>
    </StyledBox>
  );
};

export default Card;
