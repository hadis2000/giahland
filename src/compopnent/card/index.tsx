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

export type CustomCardProp = { plantId?: number } & Pick<
  plantType,
  "title" | "img" | "price"
>;

export type CardPropType = CustomCardProp & CardProps;

const Card = (props: CardPropType) => {
  const { title, img, price, plantId } = props;

  const nav = useNavigate();

  return (
    <StyledBox {...props}>
      <Box
        component="img"
        src={img && img.length > 0 ? img[0] : "/img/empty.jpg"}
        alt={title}
        sx={{
          width: "100%",
          height: "63%",
          borderRadius: "8px",
        }}
      />
      <Box sx={{ m: 1 }}>{title || "-"}</Box>
      <Box sx={{ display: "flex", justifyContent: "space-between", m: 1 }}>
        <Box>قیمت : </Box>
        <Box>{price || "-"} تومان</Box>
      </Box>
      <Btn
        onClick={() => nav(`/plant-detail/${plantId}`)}
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
