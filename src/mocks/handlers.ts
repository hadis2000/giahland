import { http, HttpResponse } from "msw";
import { plants, plantType } from "../../data/db.json";

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

    return HttpResponse.json(filteredPlant);
  }),
  http.get("/getPlantType", () => {
    return HttpResponse.json(plantType);
  }),
];
