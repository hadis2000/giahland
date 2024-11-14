import { Box } from "@mui/material";

const Ax = () => {
  return (
    <Box
      sx={{
        mx: 5,
        mb: 5,
        display: "flex",
        flexDirection: { md: "row", xs: "column", gap: "20px" },
      }}
    >
      <Box
        sx={{
          overflow: "hidden",
          borderRadius: "16px",
          width: "100%",
          height: { md: "240px", xs: "120px" },
        }}
      >
        <img width="150%" loading="lazy" src="/img/1.png" />
      </Box>
      <Box
        sx={{
          overflow: "hidden",
          borderRadius: "16px",
          width: "100%",
          height: { md: "240px", xs: "120px" },
        }}
      >
        <img width="150%" loading="lazy" src="/img/2.png" />
      </Box>
    </Box>
  );
};

export default Ax;
