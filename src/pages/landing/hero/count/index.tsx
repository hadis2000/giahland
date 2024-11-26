import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";

export type CountItPropType = {
  label: string;
  targetNumber: number;
  duration?: number;
};

const CountIt = ({ targetNumber, label, duration = 4000 }: CountItPropType) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const increment = Math.ceil(targetNumber / (duration / 100)); // مقدار افزایش در هر گام
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev + increment >= targetNumber) {
          clearInterval(interval);
          return targetNumber;
        }
        return prev + increment;
      });
    }, 100); // هر 100 میلی‌ثانیه مقدار جدید به‌روزرسانی می‌شود

    return () => clearInterval(interval); // پاک‌سازی تایمر هنگام خروج از کامپوننت
  }, [targetNumber, duration]);

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
