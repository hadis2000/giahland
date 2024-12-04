import { MoreHorizOutlined } from "@mui/icons-material";
import { Box, ImageList, ImageListItem, Stack, styled } from "@mui/material";
import { plantType } from "../../../../model";
import Image from "../../../../compopnent/image";

const StyledImageListItem = styled(ImageListItem)(({ theme }) => ({
  border: "1px solid",
  borderColor: theme.palette.neutral[6],
  borderRadius: "8px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  overflow: "hidden",
}));

const Gallery = ({ img }: Pick<plantType, "img">) => {
  return (
    <Stack width="100%">
      <Image width="400px" src={img && img[0]} />

      <ImageList cols={4}>
        {img?.slice(1, 4).map((it) => (
          <StyledImageListItem key={it}>
            <Box
              sx={{
                width: "80px",
                height: "80px",
                m: 1,
                overflow: "hidden",
                borderRadius: "4px",
              }}
            >
              <Image width="100%" height="100%" src={`${it}`} loading="lazy" />
            </Box>
          </StyledImageListItem>
        ))}
        <StyledImageListItem sx={{ position: "relative" }}>
          <Box
            width="100%"
            height="100%"
            sx={{
              backgroundColor: "white",
              opacity: "70%",
              position: "absolute",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <MoreHorizOutlined />
          </Box>
          <Image width="100%" src={`/img/shop/4.png`} loading="lazy" />
        </StyledImageListItem>
      </ImageList>
    </Stack>
  );
};

export default Gallery;
