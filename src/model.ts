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
