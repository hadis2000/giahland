import {
  AddOutlined,
  DeleteForeverOutlined,
  RemoveOutlined,
} from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";
import { useState } from "react";

const Counter = ({ num }: { num: number }) => {
  const [count, setCount] = useState<number>(num);

  return (
    <Box
      width="90%"
      sx={{
        borderRadius: "8px",
        border: "1px solid",
        borderColor: "neutral.7",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        mx: "auto",
      }}
    >
      <IconButton color="primary" onClick={() => setCount((c) => c + 1)}>
        <AddOutlined />
      </IconButton>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "20px",
          fontWeight: "600",
        }}
      >
        <Typography>{count}</Typography>
        <Typography>تعداد</Typography>
      </Box>

      {count > 1 ? (
        <IconButton
          color="error"
          onClick={() => setCount((c) => (c > 1 ? c - 1 : c))}
        >
          <RemoveOutlined />
        </IconButton>
      ) : (
        <IconButton
          color="error"
          onClick={() => setCount((c) => (c > 1 ? c - 1 : c))}
        >
          <DeleteForeverOutlined />
        </IconButton>
      )}
    </Box>
  );
};

export default Counter;
