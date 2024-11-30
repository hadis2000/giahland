import { QueryKey } from "@tanstack/react-query";

export type apiParams = {
  apiUrl: string;
  parameter?: Record<string, any>;
};

export type useFetchDataType = {
  queryKey: QueryKey;
} & apiParams;
