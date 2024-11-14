import { Avatar, Box } from "@mui/material";

const CommentBox = () => {
  return (
    <Box sx={{ border: "1px solid red", display: "flex" }}>
      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      <Box sx={{ border: "1px solid red", display: "flex" }}>
        <h4>حدیثه حسینی</h4>
      </Box>
    </Box>
  );
};

export default CommentBox;
