import { Search } from "@mui/icons-material";
import IconBtn from "../../icon-btn";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  List,
  Slide,
  Stack,
} from "@mui/material";
import { forwardRef, useState } from "react";
import { TransitionProps } from "@mui/material/transitions";
import Input from "../../input";
import PlantItem from "../../plant-item";
import { fetchData } from "../../../utils/apiService";
import { plantType } from "../../../model";

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const SearchMd = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [findPlants, setFindPlants] = useState<plantType[] | null>([]);

  const plantSearch = async (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const value = e.target.value;
    const res = await fetchData({
      apiUrl: "/getPlants",
      parameter: { text: value },
    });

    setFindPlants(res as plantType[]);
  };

  return (
    <>
      <IconBtn label="جستجو" onClick={handleClickOpen}>
        <Search />
      </IconBtn>

      <Dialog
        fullWidth
        maxWidth="sm"
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        // PaperProps={{
        //   component: "form",
        //   onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
        //     event.preventDefault();
        //     const formData = new FormData(event.currentTarget);
        //     const formJson = Object.fromEntries(formData.entries());
        //     const search = formJson.search;
        //     console.log(search);
        //   },
        // }}
      >
        <DialogTitle id="alert-dialog-title" textAlign="center">
          <Input
            autoFocus
            startAdornment={<Search />}
            placeholder="جستجو گیاه"
            name="search"
            onChange={plantSearch}
          />
        </DialogTitle>

        <DialogContent dividers>
          <List sx={{ bgcolor: "background.paper" }}>
            <Stack
              spacing={{ xs: 1, sm: 2 }}
              direction={{ xs: "column", sm: "row" }}
              sx={{
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {findPlants && findPlants.length ? (
                findPlants.map((plant) => (
                  <PlantItem onClose={handleClose} {...plant} />
                ))
              ) : (
                <>گیاهی یافت نشد</>
              )}
            </Stack>
          </List>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default SearchMd;
