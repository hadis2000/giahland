import { Divider, Grid2, Stack, Typography } from "@mui/material";
import Item from "./item";
import Btn from "../../../../compopnent/button";

const property = [
  { title: "جنس گلدان", text: "پلاستیکی" },
  { title: "خاک گیاه", text: "خاک گلدانی شنی و غنی" },
  { title: "وزن", text: "۴۰۰۰ گرم" },
  { title: "ابعاد", text: "۲۵۰x۲۵۰x۸۰۰" },
  { title: "وضعیت نسبت به آفتاب", text: "آفتاب دوست" },
];

const PlantsInfo = () => {
  return (
    <Stack width="100%" spacing={2}>
      <Typography fontSize="16px" fontWeight="500" color="primary.main">
        نهال و گیاهان آپارتمانی
      </Typography>
      <Typography fontSize="20px" fontWeight="600">
        گیاه طبیعی یوکا
      </Typography>
      <Divider />
      <Typography fontSize="18px" fontWeight="600">
        ویژگی ها
      </Typography>
      <Grid2 container spacing={4}>
        {property.map((it, index) => (
          <Grid2 key={index} size={6}>
            <Item {...it} />
          </Grid2>
        ))}
      </Grid2>
      <Btn variant="outlined">مشاهده همه ویژگی ها</Btn>
    </Stack>
  );
};

export default PlantsInfo;
