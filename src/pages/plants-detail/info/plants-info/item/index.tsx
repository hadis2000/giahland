import { Grid2, Skeleton, Stack, Typography } from "@mui/material";

const Item = ({ text, title }: { title: string; text?: string }) => {
  return (
    <Grid2 size={6}>
      <Stack
        borderRadius="8px"
        padding={1}
        sx={{ backgroundColor: "neutral.3" }}
        spacing={1}
        minHeight={53}
      >
        <Typography fontSize="14px" fontWeight="500">
          {title}
        </Typography>
        {text ? (
          <Typography fontSize="16px" fontWeight="400">
            {text}
          </Typography>
        ) : (
          <Grid2 size={6}>
            <Skeleton variant="rounded" height={30} />
          </Grid2>
        )}
      </Stack>
    </Grid2>
  );
};

export default Item;
