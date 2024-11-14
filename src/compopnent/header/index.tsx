import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import {
  Avatar,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import {
  Close,
  Login,
  Search,
  ShoppingCartCheckout,
} from "@mui/icons-material";
import Btn from "../button";
import IconBtn from "../icon-btn";
import Input from "../input";
import { useLocation } from "react-router-dom";
import Info from "../info";
import ExitBtn from "../exit-btn";
import PanelMenu from "../panel-menu";

const pages = ["صفحه اصلی", "گیاه پزشک", "وبلاگ", "تماس با ما", "درباره ما"];

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const { pathname } = useLocation();

  const isPanel = pathname.includes("panel");

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: "#fff",
        boxShadow: "0",
        borderBottom: "1px solid ",
        borderColor: "neutral.5",
        color: "primary.main",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={(e) => setAnchorElNav(e.currentTarget)}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              id="menu-appbar"
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <Box
                sx={{
                  width: 250,
                  px: "10px",
                }}
              >
                <Box
                  onClick={handleCloseNavMenu}
                  sx={{ display: "flex", justifyContent: "end" }}
                >
                  <Close sx={{ color: "red", cursor: "pointer" }} />
                </Box>

                {isPanel && <Info />}

                <List>
                  {pages.map((text) => (
                    <ListItem key={text} disablePadding>
                      <ListItemButton>
                        <ListItemText primary={text} />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>

                {isPanel && (
                  <>
                    <Divider />
                    <PanelMenu />
                    <ExitBtn />
                  </>
                )}
              </Box>
            </Drawer>
          </Box>
          <Typography
            variant="h4"
            noWrap
            component="h4"
            sx={{
              fontSize: { md: "24px", xs: "18px" },
              display: "flex",
              flexGrow: { xs: 1, md: "unset" },
              fontWeight: 700,
              color: "inherit",
            }}
          >
            گیاه لند
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              padding: "0px 20px",
              display: {
                xs: "none",
                md: "flex",
              },
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  display: "block",
                  color: page === "صفحه اصلی" ? "primary.main" : "neutral.13",
                  fontWeight: 400,
                  fontSize: "18px",
                }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box
            sx={{
              flexGrow: 0,
              display: "flex",
              flexDirection: "row-reverse",
              gap: 1,
            }}
          >
            {isPanel ? (
              <Box
                sx={{
                  display: "flex",
                  gap: 1,
                  color: "neutral.12",
                  mx: 1,
                  fontWeight: 400,
                  fontSize: "18px",
                  alignItems: "center",
                }}
              >
                <Avatar alt="حدیثه حسینی" src="" />
                <Box
                  component="span"
                  sx={{ display: { md: "inline-block", xs: "none" } }}
                >
                  سلام؛ حدیثه
                </Box>
              </Box>
            ) : (
              <>
                <Btn
                  sx={{ display: { xs: "none", md: "flex" } }}
                  variant="outlined"
                  startIcon={<Login />}
                >
                  ورود / ثبت نام
                </Btn>
                <IconBtn
                  label="ورود / ثبت نام"
                  sx={{ display: { xs: "flex", md: "none" } }}
                >
                  <Login />
                </IconBtn>
              </>
            )}

            <IconBtn sx={{ px: { md: "7px", xs: "5px" } }} label="سبد خرید">
              <ShoppingCartCheckout />
            </IconBtn>
            <IconBtn sx={{ display: { xs: "none", md: "flex" } }} label="جستجو">
              <Search />
            </IconBtn>
          </Box>
        </Toolbar>
      </Container>
      <Input
        inputSx={{
          display: { xs: "flex", md: "none", width: "93%" },
          backgroundColor: "neutral.3",
          mb: 2,
          mx: "auto",
          borderColor: "neutral.3",
        }}
        startAdornment={<Search />}
        placeholder="جستجو گیاه"
      />
    </AppBar>
  );
}
export default Header;
