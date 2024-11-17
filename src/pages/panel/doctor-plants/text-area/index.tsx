import { Box } from "@mui/material";

const TextArea = () => {
  return (
    <Box
      sx={{
        width: "97%",
        backgroundColor: "#F6F6F6",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: "5px",
        border: "1px solid",
        borderColor: "#CBCBCB",
        borderRadius: "8px",
        cursor: "pointer",
        fontSize: "16px",
        padding: "13px",
      }}
    >
      <label htmlFor="exp">توضیح درباره مشکل گیاه :</label>
      <textarea
        id="exp"
        style={{
          height: "100px",
          resize: "none",
          border: "none",
          backgroundColor: "#F6F6F6",
        }}
      />
    </Box>
  );
};

export default TextArea;
