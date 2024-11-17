import { Box, Typography } from "@mui/material";

const Item = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Box
        width="160px"
        height="200px"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img width="100%" src="/img/shop/1.png" />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "5px",
        }}
      >
        <Typography
          variant="h5"
          component="h5"
          fontSize="19px"
          fontWeight="600"
        >
          گیاه طبیعی یوکا
        </Typography>
        <Typography fontSize="17px" fontWeight="400">
          فلاور گاردن
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-betweens",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Typography fontSize="15px" fontWeight="400">
            قیمت:
          </Typography>
          <Typography fontSize="19px" fontWeight="400">
            ۵۶۰/۰۰۰ تومان
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Item;