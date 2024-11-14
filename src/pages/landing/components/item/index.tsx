import { Box, Typography } from "@mui/material";
import { ReactNode } from "react";

type ItemPropType = {
  icon?: ReactNode;
  header?: string;
  text?: string;
  isCol?: boolean;
};

const Item = ({ header, icon, text, isCol }: ItemPropType) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: isCol ? "row" : "column",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 1,
        textAlign: isCol ? "start" : "center",
      }}
    >
      <Box
        sx={{
          p: 3,
          borderRadius: "50%",
          backgroundColor: "primary.700",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "primary.main",
        }}
      >
        {icon}
      </Box>
      <Box>
        <Typography
          variant="h5"
          component="h5"
          sx={{ fontSize: "20px", fontWeight: 600 }}
        >
          {header}
        </Typography>
        <Typography
          component="p"
          sx={{
            color: "neutral.10",
            fontSize: isCol ? "12px" : "14px",
            fontWeight: 400,
            lineHeight: "25px",
          }}
        >
          {text}
        </Typography>
      </Box>
    </Box>
  );
};

export default Item;
