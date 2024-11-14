import { Box } from "@mui/system";
import SecHeader from "../components/sec-header";
import Item from "../components/item";
import {
  EmojiNature,
  EnergySavingsLeaf,
  FilterVintage,
  Forest,
  LocalFlorist,
  Nature,
  Park,
  Spa,
} from "@mui/icons-material";
import { Grid2 } from "@mui/material";

const items = [
  {
    icon: <Spa />,
    header: "چک کردن اسید خاک",
    text: "با استفاده از ابزار مخصوص اسید خاک گیاه چک میشود",
  },
  {
    icon: <Park />,
    header: "برسی مواد معدنی خاک",
    text: "یکی از موارد مهم خاک، مقدار مواد معدنی آن است که با دقت برسی میشود",
  },
  {
    icon: <Forest />,
    header: "مشاهده بهترین دما",
    text: "از موارد مهم برای گیاه مقدار دمای محیط است که باید اندازه گیری شود",
  },
  {
    icon: <Nature />,
    header: "برسی آسیب های احتمالی",
    text: "تمامی آسیب های احتمالی برسی میگردد تا از وقوع مشکلات آینده جلوگیری شود",
  },
  {
    icon: <LocalFlorist />,
    header: "از بین بردن عناصر آلوده خاک",
    text: "با استفاده از روش های نوین،عناصر آلوده از خاک گیاهان شما جمع آوری میشوند",
  },
  {
    icon: <FilterVintage />,
    header: "برسی ظاهر",
    text: "ظاهر گیاه بیانگر مسائل مهمی هست.میتوان با مشاهده ظاهر گیاه آفات و ... را متوجه شد",
  },
  {
    icon: <EmojiNature />,
    header: "اندازه گیری EC ",
    text: "این اندازه گیری نشانی از مقدار کل مواد مغذی موجود برای گیاهان می‌دهد",
  },
  {
    icon: <EnergySavingsLeaf />,
    header: "ارائه مکمل ",
    text: "برای رشد بهتر گیاهان و رفع آفات از مکمل ها میتوان استفاده کرد",
  },
];

const Services = () => {
  return (
    <Box sx={{ m: 5 }}>
      <SecHeader>خدمات گیاه پزشکی </SecHeader>

      <Box sx={{ flexGrow: 1 }}>
        <Grid2
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {items.map((it, index) => (
            <Grid2 key={index} size={{ xs: 4, sm: 4, md: 3 }}>
              <Item key={index} {...it} isCol />
            </Grid2>
          ))}
        </Grid2>
      </Box>
    </Box>
  );
};

export default Services;
