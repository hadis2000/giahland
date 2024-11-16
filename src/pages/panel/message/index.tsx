import { Box } from "@mui/material";
import SecLayout from "../component/sec-layout";
import People from "./people";

const messagePeople = [
  { name: "hadiseh ", src: "", count: "2" },
  { name: "ali", src: "", count: "1" },
  { name: "fatemeh", src: "", count: "8" },
  { name: "reza", src: "", count: "11" },
];

const Message = () => {
  return (
    <SecLayout text="پیام های دریافتی">
      <Box
        sx={{
          display: "flex",
          gap: 2,
          borderBottom: "1px solid",
          borderColor: "neutral.3",
        }}
      >
        {messagePeople.map((it) => (
          <People {...it} />
        ))}
      </Box>
    </SecLayout>
  );
};

export default Message;
