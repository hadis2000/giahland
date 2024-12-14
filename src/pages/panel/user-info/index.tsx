import Btn from "../../../compopnent/button";
import SecLayout from "../component/sec-layout";
import UserForm from "./user-form";
import { Avatar, Box } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import { useFetchData } from "../../../utils/apiService";

const UserInfo = () => {
  const userInfo = useSelector((state: RootState) => state.auth.user);

  const { data, isLoading } = useFetchData({
    queryKey: ["userInfo"],
    apiUrl: "/getUserInfo",
    parameter: { userId: userInfo?.id },
  });

  if (!data || isLoading) return <></>;

  return (
    <SecLayout text="مشخصات حساب کاربری">
      <Box
        sx={{
          display: "flex",
          gap: "10px",
          alignItems: "center",
        }}
      >
        <Avatar
          sx={{ width: "75px", height: "75px" }}
          src={data?.userInfo.img}
        />
        <Btn size="medium">ویرایش با تصویر جدید</Btn>
        <Btn size="medium" variant="outlined">
          حذف تصویر
        </Btn>
      </Box>
      <UserForm initialVal={data?.userInfo} />
    </SecLayout>
  );
};

export default UserInfo;
