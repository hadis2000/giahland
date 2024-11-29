import axiosInstance from './axiosConfig';

export const fetchData = async (url: string) => {
  const response = await axiosInstance.get(url);
  return response.data;
};

export const postData = async (url: string, data: object) => {
  const response = await axiosInstance.post(url, data);
  return response.data;
};
