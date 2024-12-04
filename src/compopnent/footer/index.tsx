import { Box, Typography } from "@mui/material";
import Item from "./item";
import { Instagram, LinkedIn, Telegram } from "@mui/icons-material";
import Image from "../image";

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "neutral.2", py: 3, color: "neutral.10" }}>
      <Box
        maxWidth="xl"
        sx={{
          display: { md: "flex", xs: "block" },
          flexDirection: "row-reverse",
          gap: { lg: 50, md: 10 },
          mx: "auto",
          px: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: 2,
            mx: { md: 0, xs: "auto" },
            width: { md: "100%", xs: "fit-content" },
          }}
        >
          <Item header="آپارتمانی" items={["بابا آدم", "یوکا", "سانسوریا"]} />
          <Item header="تزئینی" items={["یشم", "کراسولا", "کراسولا خرفه ای"]} />
          <Item header="کادویی" items={["آنتوریوم", "بونسای", "بنت قنسول"]} />
        </Box>
        <Box
          sx={{
            width: { md: "1050px", xs: "100%" },
            my: { md: 0, xs: 7 },
            mx: { md: 0, xs: "auto" },
          }}
        >
          <Typography
            variant="h4"
            component="h4"
            sx={{
              fontSize: "24px",
              display: "flex",
              flexGrow: { xs: 1, md: "unset" },
              fontWeight: 700,
              color: "primary.main",
            }}
          >
            گیاه لند
          </Typography>
          <Typography
            component="p"
            sx={{
              fontWeight: 400,
              lineHeight: "28.8px",
              textAlign: "justify",
              mt: "24px",
              mb: "40px",
            }}
          >
            گیاه لند سعی بر این دارد با ارائه خدمات نوین در حوزه فروش گیاهان
            باعث راحتی شما در خرید انواع گیاه شود.تنوع گیاهان و همچنین ایجاد
            بستری مناسب برای مشاوره با گیاه پزشک از دیگر مزیت های گیاه لند
            میباشد.
          </Typography>

          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box sx={{ my: "10px" }}>
              <Typography
                component="p"
                sx={{
                  fontWeight: 400,
                  lineHeight: "28.8px",
                  textAlign: "justify",
                }}
              >
                تلفن پشتیبانی: 0212444
              </Typography>
              <Box sx={{ display: "flex", gap: 2, my: "20px" }}>
                <LinkedIn />
                <Telegram />
                <Instagram />
              </Box>
            </Box>
            <Box>
              <Image src={`/img/enamad.png`} loading="lazy" />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
