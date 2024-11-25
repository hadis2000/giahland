import axios from "axios";

const plantApi = axios.create({
  baseURL: "http://localhost:5173",
});

export const getPlants = async () => {
  const res = await plantApi.get("/getPlants");
  return res.data;
};

export const addPlants = async (plants) => {
  return await plantApi.post("/addPlants", plants);
};

export const updatePlants = async (plants) => {
  return await plantApi.patch(`/updatePlant/${plants.id}`, plants);
};

export const deletePlants = async ({ id }) => {
  return await plantApi.delete(`/deletePlant/${id}`, id);
};

export default plantApi;
