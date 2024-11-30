import { useQuery } from "@tanstack/react-query";
import axiosInstance from "./axiosConfig";
import { apiParams, useFetchDataType } from "./model";

export const fetchData = async ({ apiUrl, parameter }: apiParams) => {
  const response = await axiosInstance.get(apiUrl, { params: parameter });
  return response.data;
};

export const postData = async (url: string, data: object) => {
  const response = await axiosInstance.post(url, data);
  return response.data;
};

export const useFetchData = ({ queryKey, ...apiProps }: useFetchDataType) => {
  return useQuery({
    queryKey: queryKey,
    queryFn: () => fetchData(apiProps),
  });
};
