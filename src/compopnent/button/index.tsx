import { Button, ButtonProps } from "@mui/material";

export type BtnType = {
  rounded?: boolean;
} & ButtonProps;

const Btn = (props: BtnType) => {
  const { variant, rounded, sx } = props;

  return (
    <Button
      {...props}
      variant={variant ?? "contained"}
      sx={{
        // borderStyle: "dashed",
        border: "1px solid",
        borderColor: "primary.main",
        minWidth: "fit-content",
        borderRadius: rounded ? "50px" : "7px",
        ...sx,
      }}
    />
  );
};

export default Btn;
