import { IconButton, IconButtonProps } from "@mui/material";
import { ReactNode } from "react";

export type IconBtnPropType = {
  children: ReactNode;
  label?: string;
  onClick?: () => void;
  sx?: IconButtonProps["sx"];
};

const IconBtn = ({ children, label, onClick, sx }: IconBtnPropType) => {
  return (
    <IconButton
      onClick={onClick}
      sx={{
        border: "1px solid",
        borderColor: "primary.main",
        borderRadius: "10px",
        padding: 1,
        color: "primary.main",
        ...sx,
      }}
      aria-label={label}
    >
      {children}
    </IconButton>
  );
};

export default IconBtn;
