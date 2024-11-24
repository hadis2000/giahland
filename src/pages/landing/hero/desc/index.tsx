import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import Btn from "../../../../compopnent/button";
import { ArrowBack } from "@mui/icons-material";
import CountIt from "../count";

const items = [
  { label: "گیاه خانگی", count: "۹۴۳" },
  { label: "گیاه تزئینی", count: "۲۳۴" },
  { label: "گیاه کادویی", count: "۱۲۸" },
];

const Desc = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        width: { md: "520px", xs: "100%" },
        mx: { md: 0, xs: "auto" },
        display: "flex",
        flexDirection: "column",
        gap: { md: 3, xs: 2 },
      }}
    >
      <Typography
        variant="h2"
        component="h2"
        sx={{
          fontWeight: { md: 700, xs: 600 },
          fontSize: { md: "40px", xs: "19px" },
          textAlign: { md: "start", xs: "center" },
        }}
      >
        خرید راحت گیاه ، با
        <Box component="span" sx={{ color: "primary.main", px: 1 }}>
          گیاه لند !
        </Box>
      </Typography>

      <Typography
        maxWidth="500px"
        component="p"
        sx={{
          fontWeight: 400,
          fontSize: { md: "18px", xs: "13px" },
          lineHeight: { md: "36px", xs: "25px" },
          textAlign: { md: "justify", xs: "center" },
          mx: { md: 0, xs: "auto" },
        }}
      >
        با گیاه لند،آنلاین گیاه خودت رو سفارش بده و از تخفیف های ویژه استفاده
        کن.علاوه بر اینها میتونی به صورت رایگان از گیاه پزشک سایت مشاوره بگیری.
      </Typography>

      <Box
        maxWidth="500px"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          gap: 5,
          mx: { md: 0, xs: "auto" },
        }}
      >
        <Btn size={isSmallScreen ? "small" : "large"} sx={{ width: "100%" }}>
          گیاهان تخفیف دار
        </Btn>
        <Btn
          size={isSmallScreen ? "small" : "large"}
          sx={{ width: "100%" }}
          endIcon={<ArrowBack />}
          variant="outlined"
        >
          مشاوره با گیاه پزشک
        </Btn>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          color: "primary.300",
        }}
      >
        {items.map((it, index) => (
          <CountIt key={index} {...it} />
        ))}
      </Box>
    </Box>
  );
};

export default Desc;
