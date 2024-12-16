export type plantType = {
  id?: number;
  title: string;
  type: string;
  exp?: string;
  price: number;
  img?: string[];
  vaseId?: number;
  soilId?: number;
  weight?: number;
  dim?: [string, string, string];
  sunPlants?: boolean;
};

export type userType = {
  id: string;
  fname: string;
  lname: string;
  phone: string;
  email: string;
  add: string;
  phoneH: string;
  role: "user" | "admin";
  img: string;
};
