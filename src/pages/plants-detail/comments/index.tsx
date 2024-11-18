import { Stack, Typography } from "@mui/material";
import CommentBox from "../../../compopnent/comment-box";
import Btn from "../../../compopnent/button";

const Comments = () => {
  return (
    <Stack spacing={2} mx={5} pb={6}>
      <Typography fontSize="24px" fontWeight={400}>
        دیدگاه ها و امتیاز
      </Typography>

      <Stack spacing={3} py={4}>
        <CommentBox />
        <CommentBox />
        <CommentBox />
      </Stack>
      <Stack alignItems="center">
        <Btn variant="outlined" sx={{ width: "fit-content" }}>
          مشاهده همه نظرات
        </Btn>
      </Stack>
    </Stack>
  );
};

export default Comments;
