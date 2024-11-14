import { Box, Typography } from "@mui/material";
import NotFoundImg from "./image";
import Btn from "../../compopnent/button";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const nav = useNavigate();
  return (
    <Box
      width="100%"
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        width="400px"
        height="400px"
        sx={{
          textAlign: "center",
        }}
      >
        <NotFoundImg />
        <Typography sx={{ fontWeight: 400, fontSize: "19px", mb: 2 }}>
          صفحه مورد نظر شما یافت نشد!
        </Typography>
        <Btn onClick={() => nav("/")} variant="outlined">
          بازگشت به صفحه اصلی
        </Btn>
      </Box>
    </Box>
  );
};

export default NotFound;
