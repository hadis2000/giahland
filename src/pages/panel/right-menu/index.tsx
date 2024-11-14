import { Box } from "@mui/material";
import Info from "../../../compopnent/info";
import PanelMenu from "../../../compopnent/panel-menu";
import ExitBtn from "../../../compopnent/exit-btn";

const RightMenu = () => {
  return (
    <Box
      width={{ md: "22%", xs: "30%" }}
      height="95%"
      sx={{
        pl: 5,
        pr: 2,
        pt: 3,
        borderRight: "2px solid",
        borderColor: "neutral.3",
        position: "relative",
        display: { md: "block", xs: "none" },
      }}
    >
      <Info />

      <PanelMenu />

      <ExitBtn />
    </Box>
  );
};

export default RightMenu;
