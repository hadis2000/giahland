import { Typography } from "@mui/material";
import { Box } from "@mui/system";

export type CountItPropType = {
  label?: string;
  count?: string;
};

const CountIt = ({ count, label }: CountItPropType) => {
  return (
    <Box sx={{ textAlign: "center" }}>
      <Typography
        sx={{
          fontSize: { md: "26px", xs: "22px" },
          fontWeight: { md: 500, xs: 400 },
        }}
      >
        + {count}
      </Typography>
      <Typography
        sx={{ fontSize: { md: "18px", xs: "15px" }, fontWeight: 400 }}
      >
        {label}
      </Typography>
    </Box>
  );
};

export default CountIt;
