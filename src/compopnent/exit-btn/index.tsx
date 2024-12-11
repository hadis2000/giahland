import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { ExitToApp } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

// log out
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../features/auth/authSlice";
import { RootState } from "../../store";
import { useNotifications } from "@toolpad/core/useNotifications";

const ExitBtn = () => {
  const nav = useNavigate();
  const notif = useNotifications();
  const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state.auth);

  const logOutHandler = () => {
    dispatch(logout());
    nav("/");
    notif.show(`به امید دیدار ${user?.name} :)`, {
      autoHideDuration: 2000,
    });
  };

  return (
    <ListItem
      sx={{
        position: "absolute",
        bottom: "0",
        left: "0",
        right: "0",
      }}
    >
      <ListItemButton
        sx={{ backgroundColor: "#FFF2F2", color: "red", borderRadius: "8px" }}
        onClick={logOutHandler}
      >
        <ListItemIcon sx={{ color: "red" }}>
          <ExitToApp />
        </ListItemIcon>
        <ListItemText primary="خروج از حساب کاربری" />
      </ListItemButton>
    </ListItem>
  );
};

export default ExitBtn;
