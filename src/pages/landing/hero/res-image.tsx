import { Box } from "@mui/material";
import Image from "../../../compopnent/image";

const ResImage = () => {
  return (
    <Box
      sx={{
        width: "250px",
        height: "250px",
        borderRadius: "50%",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Image
        width="300px"
        height="300px"
        src="/img/hero_img.jfif"
        loading="lazy"
      />
    </Box>
  );
};

export default ResImage;
