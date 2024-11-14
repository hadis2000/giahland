import { Box } from "@mui/material";

const HeadText = ({ text }: { text?: string }) => {
  return (
    <Box
      component="h6"
      sx={{
        px: 1,
        borderLeft: "2px solid ",
        borderColor: "primary.main",
        fontWeight: 500,
        fontSize: "16px",
      }}
    >
      {text}
    </Box>
  );
};

export default HeadText;
