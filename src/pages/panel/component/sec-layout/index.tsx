import { Box } from "@mui/material";
import { ReactNode } from "react";

const SecLayout = ({ children }: { children?: ReactNode }) => {
  return (
    <Box
      sx={{
        border: "1px solid",
        borderColor: "neutral.3",
        borderRadius: "16px",
        padding: "24px",
        gap: "48px",
      }}
    >
      {children}
    </Box>
  );
};

export default SecLayout;
