import { useQuery } from "@tanstack/react-query";
import { GetPostsRequestParams } from "@/entities/post/model/type";
import { getPostData } from "@/entities/post/api/queries";
import { usePostControl } from "../query/PostDataProvider";

export const useGetPost = ({ limit, skip }: GetPostsRequestParams) => {
  const { setPosts } = usePostControl();
  const { isLoading, isFetched } = useQuery({
    queryKey: useGetPost.Key({ limit, skip }),
    queryFn: async () => {
      const posts = await getPostData({ limit, skip });

      setPosts(posts);
      return posts;
    },
  });

  return {
    isLoading,
    isFetched,
  };
};

useGetPost.Key = ({ limit, skip }: GetPostsRequestParams) => ["post", limit, skip];
