import {
  AddOutlined,
  DeleteForeverOutlined,
  RemoveOutlined,
} from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";
import { plantType } from "../../model";
import { useDispatch } from "react-redux";
import { removeItem,updateQuantity } from "../../features/shopping-cart/cartSlice";


export type counterPropType={ num: number,
  onIncrease?:()=>void,
  onDecrease?:()=>void,
  disabled?:boolean;
 }&Pick<plantType,"id">

const Counter = ({ num ,id,onDecrease,onIncrease,disabled}:counterPropType ) => {

  const dispatch = useDispatch();

  const handleRemove = () => {
    if(id)
    dispatch(removeItem(id));
  };

  const handleIncrease = () => {
    if(id)
    dispatch(updateQuantity({ id, operation: 'increase' }));
  };

  const handleDecrease = () => {
    if(id)
    dispatch(updateQuantity({ id, operation: 'decrease' }));
  };

  return (
    <Box
      width="90%"
      sx={{
        borderRadius: "8px",
        border: "1px solid",
        borderColor: "neutral.7",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        mx: "auto",
        opacity:disabled?'50%':"",
        cursor:disabled?'not-allowed':""
      }}
    >
      <IconButton disabled={disabled} color="primary" onClick={onIncrease?onIncrease:handleIncrease}>
        <AddOutlined />
      </IconButton>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "20px",
          fontWeight: "600",
        }}
      >
        <Typography>{num}</Typography>
        <Typography>تعداد</Typography>
      </Box>

      {(num > 1||onIncrease&&onDecrease) ? (
        <IconButton
        disabled={disabled}
          color="error"
          onClick={onDecrease?onDecrease:handleDecrease}
        >
          <RemoveOutlined />
        </IconButton>
      ) : (
        <IconButton
        disabled={disabled}
          color="error"
          onClick={handleRemove}
        >
          <DeleteForeverOutlined />
        </IconButton>
      )}
    </Box>
  );
};

export default Counter;
