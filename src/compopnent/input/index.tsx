import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  InputAdornment,
  IconButton,
  TextField,
  TextFieldProps,
  InputProps,
} from "@mui/material";
import { ReactNode, useState } from "react";

export type TextFieldPropsType = {
  startAdornment?: ReactNode;
  inputSx?: InputProps["sx"];
} & TextFieldProps;

const Input = (props: TextFieldPropsType) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <TextField
      fullWidth
      {...props}
      type={
        props.type !== "password"
          ? props.type
          : showPassword
          ? "text"
          : "password"
      }
      slotProps={{
        input: {
          sx: { borderRadius: "12px", height: "48px", ...props.inputSx },
          startAdornment: props.startAdornment,
          endAdornment: props.type === "password" && (
            <InputAdornment position="end">
              <IconButton
                aria-label={
                  showPassword ? "hide the password" : "display the password"
                }
                onClick={() => setShowPassword((show) => !show)}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        },
      }}
    />
  );
};

export default Input;
