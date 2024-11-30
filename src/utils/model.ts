export type apiParams = {
  apiUrl: string;
  parameter?: Record<string, any>;
};

export type useFetchDataType = {
  queryKey?: string;
} & apiParams;
