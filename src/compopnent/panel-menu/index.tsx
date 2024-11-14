import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Email, Person, Medication } from "@mui/icons-material";

const PanelMenu = () => {
  const menuItems = [
    { text: "مشخصات حساب کاربری", icon: <Person /> },
    { text: "مشاوره با گیاه پزشک", icon: <Medication /> },
    { text: "پیام های دریافتی", icon: <Email /> },
  ];

  return (
    <List sx={{ py: 3 }}>
      {menuItems.map((it) => (
        <ListItem sx={{ fontSize: "18px", fontWeight: 400 }} disablePadding>
          <ListItemButton
            selected={it.text.includes("مشخصات")}
            sx={{
              "&.Mui-selected": {
                backgroundColor: "primary.700",
                color: "primary.main",
              },
            }}
          >
            <ListItemIcon
              sx={{ color: it.text.includes("مشخصات") ? "primary.main" : "" }}
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
