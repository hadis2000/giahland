import { Box } from "@mui/material";
import Header from "../../compopnent/header";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <Box maxWidth="xl" color="neutral.13" marginX="auto">
        <Header />
        <Outlet />
      </Box>
    </>
  );
};

export default MainLayout;
