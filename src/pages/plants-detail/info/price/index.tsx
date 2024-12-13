import { Box, Divider, Stack, Typography } from "@mui/material";
import Btn from "../../../../compopnent/button";
import { StoreOutlined } from "@mui/icons-material";
import { plantType } from "../../../../model";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../../../../features/shopping-cart/cartSlice";
import { useNotifications } from "@toolpad/core/useNotifications";
import { RootState } from "../../../../store";
import { useState } from "react";
import Counter from "../../../../compopnent/counter";

const Price = ({
  price,
  id,
}: Pick<plantType, "price" | "id">) => {

  const dispatch = useDispatch();
  const notif=useNotifications();


  const cartItems = useSelector((state: RootState) => state.cart.items);
  const isInCart=cartItems?.find((it)=>it.id===id)

  const [qty, setQty] = useState<number>(isInCart?.quantity||0);

  const handleAddToCart = () => {
    if (id) {
      dispatch(addItem({ id, quantity: qty }))
      notif.show("با موفقیت به سبد خرید شما اضافه شد",{
        autoHideDuration:2000,
        severity:"success"
      })
    }
  };

  const handleRemove = () => {
    if(id){
    dispatch(removeItem(id));
    setQty(0);
    notif.show("با موفقیت از سبد خرید شما حذف شد",{
      autoHideDuration:2000,
      severity:"error"
    })

    }
  };

  return (
    <Box
      sx={{
        border: "1px solid",
        borderColor: "neutral.7",
        borderRadius: "16px",
        py: "31px",
        px: "24px",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        fontSize: "16px",
        fontWeight: "500",
        width: "100%",
      }}
    >
      <Typography>فروشنده</Typography>
      <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={1}
      >
        <Typography
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <StoreOutlined />
          فلاور گاردن
        </Typography>
        <Typography>
          عملکرد{" "}
          <Typography component="span" color="primary.main">
            عالی
          </Typography>
        </Typography>
      </Stack>
      <Typography>۴.۶</Typography>
      <Divider />
      <Stack direction="row" justifyContent="space-between" spacing={1}>
        <Typography>قیمت:</Typography>
        <Typography>{price} تومان</Typography>
      </Stack>

      <Counter 
        id={id} 
        num={qty} 
        onIncrease={() => setQty((c) => c + 1)} 
        onDecrease={() => setQty((c) => (c > 0 ? c - 1 : c))}
        disabled={isInCart?true:false}
       />

      {isInCart?
      <Btn onClick={handleRemove} sx={{ px: { lg: "60px" },backgroundColor:"red" }}>
      حذف از سبد خرید
    </Btn>
      :<Btn onClick={handleAddToCart} sx={{ px: { lg: "60px" } }}>
        افزودن به سبد خرید
      </Btn>}
      
    </Box>
  );
};

export default Price;
