import { Box, Typography } from "@mui/material";
import Counter from "../../../../compopnent/counter";
import Image from "../../../../compopnent/image";
import { CartItemType } from "../../../../features/shopping-cart/cartSlice";
import { useFetchData } from "../../../../utils/apiService";

const Item = ({quantity,id}:CartItemType) => {

  const { data, isLoading } = useFetchData({
    queryKey: ["plantsDetail", id],
    apiUrl: "/getPlantById",
    parameter: { plantId: id },
  });

  if (!data || isLoading) return <>loading...</>;
  
  return (
    <Box sx={{ display: "flex" }}>
      <Box
        width="150px"
        height="200px"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image width="100%" src={data?.img[0]} />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "5px",
          height:"200px",
        }}
      >
        <Typography
          variant="h5"
          component="h5"
          fontSize="19px"
          fontWeight="600"
        >
          {data.title}
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-betweens",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Typography fontSize="15px" fontWeight="400">
            قیمت:
          </Typography>
          <Typography fontSize="19px" fontWeight="400">
            {data.price} تومان
          </Typography>
        </Box>
        <Counter id={id} num={quantity} />
      </Box>
    </Box>
  );
};

export default Item;
