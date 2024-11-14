import { Avatar, Box } from "@mui/material";

const Info = () => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Avatar alt="حدیثه حسینی" src="" />
      <Box sx={{ width: "100%" }}>
        <Box sx={{ fontSize: "14px", fontWeight: 500 }}>حدیثه حسینی</Box>
        <Box sx={{ fontSize: "14px", fontWeight: 400, color: "neutral.9" }}>
          09111111111
        </Box>
      </Box>
    </Box>
  );
};

export default Info;
