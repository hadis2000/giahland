import { Box } from "@mui/material";
import Input from "../../../../compopnent/input";
import { LibraryAddOutlined } from "@mui/icons-material";

const FileInput = () => {
  return (
    <Box sx={{ backgroundColor: "" }}>
      <Box width="120px" height="120px">
        <label
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "#F6F6F6",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "5px",
            border: "1px solid",
            borderColor: "#CBCBCB",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "13px",
          }}
          htmlFor="file"
        >
          <Input id="file" type="file" sx={{ display: "none" }} />
          <LibraryAddOutlined />
          <span>آپلود تصویر گیاه</span>
        </label>
      </Box>
    </Box>
  );
};

export default FileInput;
