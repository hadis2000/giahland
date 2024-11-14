import { Typography } from "@mui/material";
import { ReactNode } from "react";

const SecHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Typography
      variant="h4"
      component="h4"
      sx={{
        fontWeight: 700,
        fontSize: "24px",
        lineHeight: "33px",
        color: "primary.main",
        mb: "32px",
      }}
    >
      {children}
    </Typography>
  );
};

export default SecHeader;
