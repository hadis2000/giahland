import { Avatar, Box } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

const Info = () => {
  const userInfo = useSelector((state: RootState) => state.auth.user);

  return (
    <Box
      sx={{
        display: "flex",
        gap: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Avatar alt={userInfo?.name} src={userInfo?.img} />
      <Box sx={{ width: "100%" }}>
        <Box sx={{ fontSize: "14px", fontWeight: 500 }}>{userInfo?.name}</Box>
        <Box sx={{ fontSize: "14px", fontWeight: 400, color: "neutral.9" }}>
          {userInfo?.phone}
        </Box>
      </Box>
    </Box>
  );
};

export default Info;
