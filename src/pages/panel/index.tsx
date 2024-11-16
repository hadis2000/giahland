import { Box } from "@mui/material";
import RightMenu from "./right-menu";
import { Outlet } from "react-router-dom";

const Panel = () => {
  return (
    <Box
      width="100%"
      height="89vh"
      sx={{
        display: "flex",
      }}
    >
      <RightMenu />
      <Box
        width={{ md: "70%", xs: "65%" }}
        sx={{
          pt: 4,
          px: 3,
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
};

export default Panel;
