import { http, HttpResponse } from "msw";
import { plants, plantType, soilType, vaseType } from "../../data/db.json";

export const handlers = [
  // Intercept "GET https://example.com/user" requests...
  // http.get("https://example.com/user", () => {
  //   // ...and respond to them using this JSON response.
  //   return HttpResponse.json({
  //     id: "c7b3d8e0-5e0b-4b0f-8b3a-3b9f4b3d3b3d",
  //     firstName: "John",
  //     lastName: "Maverick",
  //   });
  // }),
  http.get("/getPlants", ({ request }) => {
    const url = new URL(request.url);
    const plantTypeId = url.searchParams.get("plantTypeId");

    const text = url.searchParams.get("text");

    // if (!plantTypeId) {
    //   return new HttpResponse(null, { status: 404 })
    // }

    let filteredPlant = plants;

    if (
      plantTypeId &&
      plantTypeId !== undefined &&
      plants.filter((it) => it.type === plantTypeId).length
    ) {
      filteredPlant = plants.filter((it) => it.type === plantTypeId);
    }

    if (
      text &&
      text !== undefined &&
      plants.filter((it) => it.title.includes(text)).length
    ) {
      filteredPlant = plants.filter((it) => it.title.includes(text));
    } else {
      filteredPlant = [];
    }

    return HttpResponse.json(filteredPlant);
  }),
  http.get("/getPlantType", () => {
    return HttpResponse.json(plantType);
  }),
  http.get("/getPlantById", ({ request }) => {
    const url = new URL(request.url);
    const plantId = url.searchParams.get("plantId");

    const plant =
      plantId && plants.find((p) => p.id === +plantId)
        ? plants.find((p) => p.id === +plantId)
        : null;

    return HttpResponse.json(plant);
  }),

  http.get("/getPlantTypeById", ({ request }) => {
    const url = new URL(request.url);
    const plantTypeId = url.searchParams.get("plantTypeId");

    const plantTypeTitle = plantTypeId
      ? plantType.find((p) => p.plantTypeId === plantTypeId)?.plantTypeTitle
      : null;

    return HttpResponse.json(plantTypeTitle);
  }),

  http.get("/getVaseTypeById", ({ request }) => {
    const url = new URL(request.url);
    const vaseId = url.searchParams.get("vaseId");

    const vaseTitle = vaseId
      ? vaseType.find((p) => p.vaseId === vaseId)?.vaseTitle
      : null;

    return HttpResponse.json(vaseTitle);
  }),

  http.get("/getSoilTypeById", ({ request }) => {
    const url = new URL(request.url);
    const soilId = url.searchParams.get("soilId");

    const soilTitle = soilId
      ? soilType.find((p) => p.soilId === soilId)?.soilTitle
      : null;

    return HttpResponse.json(soilTitle);
  }),
];
