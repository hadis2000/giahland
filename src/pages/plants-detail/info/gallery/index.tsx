import { MoreHorizOutlined } from "@mui/icons-material";
import { Box, ImageList, ImageListItem, Stack, styled } from "@mui/material";

const itemData = [
  {
    img: "/img/shop/2.png",
  },
  {
    img: "/img/shop/3.png",
  },
  {
    img: "/img/shop/4.png",
  },
];

const StyledImageListItem = styled(ImageListItem)(({ theme }) => ({
  border: "1px solid",
  borderColor: theme.palette.neutral[6],
  borderRadius: "8px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  overflow: "hidden",
}));

const Gallery = () => {
  return (
    <Stack width="100%">
      <img width="438px" height="461px" src="/img/shop/1.png" />

      <ImageList cols={4}>
        {itemData.map((item) => (
          <StyledImageListItem key={item.img}>
            <Box
              sx={{
                width: "80px",
                height: "80px",
                m: 1,
                overflow: "hidden",
                borderRadius: "4px",
              }}
            >
              <img width="100%" src={`${item.img}`} loading="lazy" />
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
          <img width="100%" src={`/img/shop/4.png`} loading="lazy" />
        </StyledImageListItem>
      </ImageList>
    </Stack>
  );
};

export default Gallery;
