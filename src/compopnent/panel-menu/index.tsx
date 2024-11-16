import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Email, Person, Medication } from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router-dom";

const PanelMenu = () => {
  const menuItems = [
    { text: "مشخصات حساب کاربری", icon: <Person />, route: "/panel" },
    {
      text: "مشاوره با گیاه پزشک",
      icon: <Medication />,
      route: "/panel/doctor",
    },
    { text: "پیام های دریافتی", icon: <Email />, route: "/panel/message" },
  ];

  const nav = useNavigate();
  const { pathname } = useLocation();

  return (
    <List sx={{ py: 3 }}>
      {menuItems.map((it) => (
        <ListItem sx={{ fontSize: "18px", fontWeight: 400 }} disablePadding>
          <ListItemButton
            selected={it.route === pathname}
            sx={{
              "&.Mui-selected": {
                backgroundColor: "primary.700",
                color: "primary.main",
              },
            }}
            onClick={() => nav(it.route)}
          >
            <ListItemIcon
              sx={{ color: it.route === pathname ? "primary.main" : "" }}
            >
              {it.icon}
            </ListItemIcon>
            <ListItemText primary={it.text} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};

export default PanelMenu;
