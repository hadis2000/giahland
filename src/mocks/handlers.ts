import { http, HttpResponse } from "msw";

import { plants, plantType, soilType, vaseType } from "../../data/db.json";
import { CartItemType } from "../features/shopping-cart/cartSlice";


let userInfo = {
  id: "1",
  fname: "hadiseh",
  lname: "hosseini",
  phone: "09111111111",
  email: "hadise@gmail.com",
  add: "sari",
  phoneH: "01133024444",
  role: "user",
  img: "/img/user/1.jpg",
};

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
  http.post("/login", async ({ request }) => {
    const body = (await request.json()) as
      | { phone: string; password: string }
      | undefined;

    const phone = body?.phone;
    const password = body?.password;

    if (phone === "09111111111" && password === "123456") {
      return HttpResponse.json(
        {
          user: {
            id: userInfo.id,
            fname: userInfo.fname,
            email: userInfo.email,
            phone: userInfo.phone,
            role: userInfo.role,
            img: userInfo.img,
          },
          token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEiLCJuYW1lIjoiaGFkaXNlaCIsImVtYWlsIjoiaGFkaXNlQGdtYWlsLmNvbSIsInBob25lIjoiMDkxMTExMTExMTEiLCJyb2xlIjoidXNlciJ9.oMeqzvN987UZrgwGshu-WrKxKYQhCC2Fb_iLI7cLtOM",
        },
        { status: 200 }
      );
    }

    return HttpResponse.json(
      { error: "احراز هویت انجام نشده" },
      { status: 401 }
    );
  }),
  http.get("/getPlants", ({ request }) => {
    const url = new URL(request.url);
    const plantTypeId = url.searchParams.get("plantTypeId");

    const text = url.searchParams.get("text");

    let filteredPlant = plants;

    if (
      text &&
      text !== undefined &&
      plants.filter((it) => it.title.includes(text)).length
    ) {
      filteredPlant = plants.filter((it) => it.title.includes(text));
    } else {
      filteredPlant = [];
    }

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
  http.post("/countBasket", async ({ request }) => {
    const body = (await request.json()) as
      | { cartItem: CartItemType[] }
      | undefined;

    const cartItem = body?.cartItem;

    const totalPrice = cartItem?.reduce((total, item) => {
      const plant = plants.find((p) => p.id === item.id); // پیدا کردن گیاه با id
      if (plant) {
        return total + parseInt(plant.price) * item.quantity; // جمع زدن قیمت
      }
      return total; // اگر id پیدا نشود، مقدار فعلی را برگرداند
    }, 0);

    return HttpResponse.json({ totalPrice });
  }),
  http.get("/getUserInfo", () => {
    return HttpResponse.json({ userInfo: userInfo });
  }),
  http.post("/editeUserInfo", async ({ request }) => {
    const body = (await request.json()) as
      | { phone: string; password: string }
      | undefined;

    userInfo = { ...userInfo, ...body };

    return HttpResponse.json({ userInfo: userInfo });
  }),
];
