import { Box } from "@mui/material";
import { ReactNode } from "react";
import HeadText from "./head-text";

const SecLayout = ({
  children,
  text,
}: {
  children?: ReactNode;
  text?: string;
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      <HeadText text={text} />
      <Box
        sx={{
          border: "1px solid",
          borderColor: "neutral.3",
          borderRadius: "16px",
          padding: "20px",
          gap: "48px",
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default SecLayout;
