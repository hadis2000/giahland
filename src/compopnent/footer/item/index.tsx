import { ListItemText, Typography } from "@mui/material";
import { Box } from "@mui/system";

export type ItemPropType = {
  header?: string;
  items?: string[];
};

const Item = ({ header, items }: ItemPropType) => {
  return (
    <Box sx={{ width: { md: "140px", xs: "100%" } }} color="neutral.10">
      <Typography
        variant="h5"
        sx={{
          py: 1,
          mb: 1,
          borderBottom: "1px solid",
          borderColor: "neutral.4",
          fontWeight: 600,
        }}
      >
        {header}
      </Typography>

      {items?.map((it) => (
        <ListItemText sx={{ py: 1, fontWeight: 400 }} primary={it} />
      ))}
    </Box>
  );
};

export default Item;
