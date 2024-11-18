import { Stack, Typography } from "@mui/material";

const Item = ({ text, title }: { title: string; text: string }) => {
  return (
    <Stack
      borderRadius="8px"
      padding={1}
      sx={{ backgroundColor: "neutral.3" }}
      spacing={1}
    >
      <Typography fontSize="14px" fontWeight="500">
        {title}
      </Typography>
      <Typography fontSize="16px" fontWeight="400">
        {text}
      </Typography>
    </Stack>
  );
};

export default Item;
