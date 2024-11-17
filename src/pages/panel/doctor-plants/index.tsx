import { Box } from "@mui/material";
import SecLayout from "../component/sec-layout";
import FileInput from "./file-input";
import TextArea from "./text-area";
import Btn from "../../../compopnent/button";

const DoctorPlants = () => {
  return (
    <SecLayout text="مشاوره با گیاه پزشک">
      <FileInput />
      <TextArea />
      <Box sx={{ display: "flex", justifyContent: "end" }}>
        <Btn>ارسال</Btn>
      </Box>
    </SecLayout>
  );
};

export default DoctorPlants;
