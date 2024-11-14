import { Box, CardProps } from "@mui/material";
import Btn from "../button";
import { styled } from "@mui/material/styles";

const StyledBox = styled(Box)(({ theme }) => ({
  width: "272px",
  //   width: "226px",
  padding: "16px",
  border: `1px solid ${theme.palette.neutral[6]}`,
  borderRadius: "12px",
}));

export type CustomCardProp = {
  name?: string;
  imgSrc?: string;
  price?: string;
};

export type CardPropType = CustomCardProp & CardProps;

const Card = (props: CardPropType) => {
  const { name, imgSrc, price } = props;

  return (
    <StyledBox {...props}>
      <Box
        component="img"
        src={imgSrc}
        alt={name}
        sx={{
          width: "100%",
          height: "auto",
          borderRadius: "8px",
        }}
      />
      <Box sx={{ m: 1 }}>{name}</Box>
      <Box sx={{ display: "flex", justifyContent: "space-between", m: 1 }}>
        <Box>قیمت : </Box>
        <Box>{price} تومان</Box>
      </Box>
      <Btn
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
