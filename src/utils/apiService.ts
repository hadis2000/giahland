import { useQuery } from "@tanstack/react-query";
import axiosInstance from "./axiosConfig";
import { apiParams, useFetchDataType } from "./model";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { QueryKey } from "@tanstack/react-query";

// get api
export const fetchData = async ({ apiUrl, parameter }: apiParams) => {
  const response = await axiosInstance.get(apiUrl, { params: parameter });
  return response.data;
};
export const useFetchData = ({ queryKey, ...apiProps }: useFetchDataType) => {
  return useQuery({
    queryKey: queryKey,
    queryFn: () => fetchData(apiProps),
  });
};

// post api
export const postData = async ({
  url,
  data,
}: {
  url: string;
  data: Record<string, any>;
}) => {
  const response = await axiosInstance.post(url, data);
  return response.data;
};

export const usePostData = (
  props?: {
    queryKey?: QueryKey;
    successFunc?: (data: any) => void;
  } | null
) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: postData,
    onSuccess: (data) => {
      if (props && props?.successFunc) props.successFunc(data);
      if (props && props?.queryKey)
        queryClient.invalidateQueries({ queryKey: props.queryKey });
    },
    onError: (error) => {
      console.error("Error posting data:", error);
    },
  });
};

