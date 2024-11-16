import { Avatar, Badge, Box } from "@mui/material";

type peoplePropType = {
  name?: string;
  src?: string;
  count?: string;
};

const People = ({ name, count, src }: peoplePropType) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 1,
        textAlign: "center",
        width: "70px",
        cursor: "pointer",
      }}
    >
      <Badge
        overlap="circular"
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        badgeContent={count}
        color="error"
      >
        <Avatar sx={{ width: "70px", height: "70px" }} alt={name} src={src} />
      </Badge>
      {name}
    </Box>
  );
};

export default People;
