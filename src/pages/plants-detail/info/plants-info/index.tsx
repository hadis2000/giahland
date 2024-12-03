import { Divider, Grid2, Skeleton, Stack, Typography } from "@mui/material";
import Item from "./item";
import Btn from "../../../../compopnent/button";
import { plantType } from "../../../../model";
import { useFetchData } from "../../../../utils/apiService";

export type PlantInfoType = Omit<plantType, "img" | "price">;

const PlantsInfo = ({
  title,
  sunPlants,
  weight,
  dim,
  vaseId,
  soilId,
  type,
}: PlantInfoType) => {
  const { data: vaseTitle } = useFetchData({
    queryKey: ["VaseType"],
    apiUrl: "/getVaseTypeById",
    parameter: { vaseId: vaseId },
  });

  const { data: soilTitle } = useFetchData({
    queryKey: ["soilType"],
    apiUrl: "/getSoilTypeById",
    parameter: { soilId: soilId },
  });

  const { data: plantTypeTitle } = useFetchData({
    queryKey: ["plantType"],
    apiUrl: "/getPlantTypeById",
    parameter: { plantTypeId: type },
  });

  return (
    <Stack width="100%" spacing={2}>
      {plantTypeTitle && typeof plantTypeTitle === "string" ? (
        <Typography fontSize="16px" fontWeight="500" color="primary.main">
          {plantTypeTitle}
        </Typography>
      ) : (
        <Skeleton variant="text" sx={{ fontSize: "16px" }} />
      )}

      <Typography fontSize="20px" fontWeight="600">
        {title ? title : <Skeleton variant="text" sx={{ fontSize: "20px" }} />}
      </Typography>

      <Divider />
      <Typography fontSize="18px" fontWeight="600">
        ویژگی ها
      </Typography>
      <Grid2 container spacing={4}>
        <Item title="جنس گلدان" text={vaseTitle ?? ""} />
        <Item title="خاک گیاه" text={soilTitle ?? ""} />
        <Item title="وزن" text={`${weight} گرم `} />
        {dim && <Item title="ابعاد" text={`${dim[0]}x${dim[1]}x${dim[2]}`} />}
        <Item
          title="وضعیت نسبت به آفتاب"
          text={sunPlants ? "آفتاب دوست" : "دور از نور آفتاب"}
        />
      </Grid2>
      <Btn variant="outlined">مشاهده همه ویژگی ها</Btn>
    </Stack>
  );
};

export default PlantsInfo;
