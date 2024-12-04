import { MoreHorizOutlined } from "@mui/icons-material";
import { Box, ImageList, ImageListItem, Stack, styled } from "@mui/material";
import { plantType } from "../../../../model";
import Image from "../../../../compopnent/image";
import { useEffect, useState } from "react";

const StyledImageListItem = styled(ImageListItem)(({ theme }) => ({
  border: "1px solid",
  borderColor: theme.palette.neutral[6],
  borderRadius: "8px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  overflow: "hidden",
  cursor: "pointer",
}));

const Gallery = ({ img }: Pick<plantType, "img">) => {
  const [allImg, setallImg] = useState<string[] | undefined>(img);

  const handleSwap = (index: number) => {
    if (!allImg || index === 0) return;
    setallImg((prevItems) => {
      if (!prevItems) return prevItems;
      const updatedItems = [...prevItems];
      [updatedItems[0], updatedItems[index]] = [
        updatedItems[index],
        updatedItems[0],
      ];
      return updatedItems;
    });
  };

  const [currentIndex, setCurrentIndex] = useState(1); // خانه‌ی بعدی که باید جابه‌جا شود

  useEffect(() => {
    const interval = setInterval(() => {
      setallImg((prevItems) => {
        if (!prevItems || prevItems.length < 2) return prevItems; // اگر آیتم‌ها کمتر از 2 بود، کاری نکنید

        // محدود کردن آیتم‌ها به 4 عدد
        const activeItems = prevItems.slice(0, 4);
        const updatedItems = [...activeItems];
        // جابه‌جایی آیتم خانه صفرم با آیتم currentIndex
        [updatedItems[0], updatedItems[currentIndex]] = [
          updatedItems[currentIndex],
          updatedItems[0],
        ];

        // ترکیب آیتم‌های جابه‌جا‌شده با آیتم‌های اضافی
        return [...updatedItems, ...prevItems.slice(4)];
      });

      // بروزرسانی currentIndex و بازگشت به خانه 1 در صورت عبور از انتهای آرایه
      setCurrentIndex((prevIndex) =>
        prevIndex + 1 >= Math.min(allImg ? allImg.length : 0, 4)
          ? 1
          : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval); // پاک کردن interval هنگام خروج از کامپوننت
  }, [allImg]);

  return (
    <Stack width="100%">
      <Image
        width="350px"
        height="420px"
        style={{ margin: "10px auto", borderRadius: "10px" }}
        src={allImg && allImg[0]}
      />

      <ImageList cols={4}>
        {allImg?.slice(1, 4).map((it, index) => (
          <StyledImageListItem key={it} onClick={() => handleSwap(index + 1)}>
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
        {allImg && allImg[4] && (
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
            <Image width="100%" src={img && img[4]} loading="lazy" />
          </StyledImageListItem>
        )}
      </ImageList>
    </Stack>
  );
};

export default Gallery;
