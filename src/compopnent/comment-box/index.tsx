import {
  FavoriteBorderOutlined,
  MoreHorizOutlined,
  ShortcutOutlined,
} from "@mui/icons-material";
import { Avatar, Divider, Stack, Typography } from "@mui/material";

const CommentBox = () => {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      <Stack
        width="100%"
        direction="row"
        sx={{ borderBottom: "1px solid", borderColor: "neutral.4" }}
      >
        <Stack width="85%" spacing={3}>
          <Typography fontSize="16px" fontWeight={500}>
            فرهاد رئوفی
          </Typography>
          <Divider />
          <Typography
            sx={{
              width: "fit-content",
              px: 2,
              backgroundColor: "neutral.2",
              borderRadius: "8px",
              color: "neutral.8",
            }}
          >
            4
          </Typography>
          <Typography fontSize="14px" fontWeight={400} color="neutral.11">
            از نظر قیمت واقعا به صرفه بود
          </Typography>
        </Stack>
        <Stack direction="row" spacing={1} sx={{ color: "neutral.9" }}>
          <Typography fontSize="14px" fontWeight={400}>
            ۵ روز پیش
          </Typography>
          <FavoriteBorderOutlined />
          <ShortcutOutlined />
          <MoreHorizOutlined />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default CommentBox;
