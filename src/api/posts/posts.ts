import { httpService } from "../http";

export const getPosts = async () => {
  const { data } = await httpService.get("/posts");
  return data;
};
