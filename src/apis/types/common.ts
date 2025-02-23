export type ResponseFormat<T> = {
  status: string;
  data: T;
  message: string;
};
