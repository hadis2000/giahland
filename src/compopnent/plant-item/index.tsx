import { Avatar, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import { plantType } from "../../model";
import { useNavigate } from "react-router-dom";

const PlantItem = ({
  img,
  title,
  price,
  id,
  onClose,
}: { onClose?: () => void } & Pick<
  plantType,
  "title" | "price" | "img" | "id"
>) => {
  const nav = useNavigate();

  return (
    <ListItem
      divider
      sx={{ width: { sm: "45%", xs: "95%" }, cursor: "pointer" }}
      onClick={() => {
        nav(`/plant-detail/${id}`);
        if (onClose) onClose();
      }}
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
