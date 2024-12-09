import { Avatar, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import { plantType } from "../../model";

const PlantItem = ({
  img,
  title,
  price,
}: Pick<plantType, "title" | "price" | "img" | "id">) => {
  return (
    <ListItem
      divider
      sx={{ width: { sm: "45%", xs: "95%" }, cursor: "pointer" }}
    >
      <ListItemAvatar>
        <Avatar alt={title} src={img && img[0]} />
      </ListItemAvatar>
      <ListItemText
        title={title}
        primary={`${title.slice(0, 17)} ${title.length > 17 ? "..." : ""} `}
        secondary={price}
      />
    </ListItem>
  );
};

export default PlantItem;
