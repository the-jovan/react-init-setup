import { getPosts } from "@/api/posts/posts";
import { useQuery } from "@tanstack/react-query";
import { POSTS_DATA } from "@/shared/queryConstants";

export const usePostsApiHelper = () => {
  const getPostsData = useQuery({
    queryKey: [POSTS_DATA],
    queryFn: getPosts,
  });

  return { getPostsData };
};
