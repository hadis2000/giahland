import { Box, Typography } from "@mui/material";
import Btn from "../../../../compopnent/button";
import { ArrowBack } from "@mui/icons-material";
import Image from "../../../../compopnent/image";

const Item = ({
  imgSrc,
  name,
}: {
  id?: string;
  name?: string;
  imgSrc: string;
}) => {
  return (
    <Box
      sx={{
        position: "relative",
        borderRadius: "8px",
        width: "280px",
        height: "240px",
        overflow: "hidden",
      }}
    >
      <Image width="150%" loading="lazy" src={imgSrc} />
      <Box
        sx={{ position: "absolute", inset: 0, backgroundColor: "#00000088" }}
      >
        <Typography
          variant="h5"
          component="h5"
          sx={{
            fontSize: "20px",
            fontWeight: 600,
            color: "#fff",
            mt: 14,
            ml: 3,
          }}
        >
          {name}
        </Typography>
        <Btn
          sx={{ mt: 1, ml: 3, borderColor: "#fff", color: "#fff" }}
          endIcon={<ArrowBack />}
          variant="outlined"
        >
          خرید {name}
        </Btn>
      </Box>
    </Box>
  );
};

export default Item;
