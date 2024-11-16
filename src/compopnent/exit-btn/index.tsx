import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { ExitToApp } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const ExitBtn = () => {
  const nav = useNavigate();

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
        onClick={() => nav("/")}
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
