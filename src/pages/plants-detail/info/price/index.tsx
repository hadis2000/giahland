import { Box, Divider, Stack, Typography } from "@mui/material";
import Btn from "../../../../compopnent/button";
import { StoreOutlined } from "@mui/icons-material";
import { plantType } from "../../../../model";

const Price = ({ price }: Pick<plantType, "price">) => {
  return (
    <Box
      sx={{
        border: "1px solid",
        borderColor: "neutral.7",
        borderRadius: "16px",
        py: "31px",
        px: "24px",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        fontSize: "16px",
        fontWeight: "500",
        width:"100%"
      }}
    >
      <Typography>فروشنده</Typography>
      <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={1}
      >
        <Typography
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <StoreOutlined />
          فلاور گاردن
        </Typography>
        <Typography>
          عملکرد{" "}
          <Typography component="span" color="primary.main">
            عالی
          </Typography>
        </Typography>
      </Stack>
      <Typography>۴.۶</Typography>
      <Divider />
      <Stack direction="row" justifyContent="space-between" spacing={1}>
        <Typography>قیمت:</Typography>
        <Typography>{price} تومان</Typography>
      </Stack>
      <Btn sx={{ px: { lg: "60px" } }}>افزودن به سبد خرید</Btn>
    </Box>
  );
};

export default Price;
