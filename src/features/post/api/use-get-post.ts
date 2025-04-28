import { useQuery } from "@tanstack/react-query"
import { GetPostsRequestParams, GetPostsResponseType } from "@/entities/post/model/type"
import { getPostData } from "@/entities/post/api/queries"

export const useGetPost = ({ limit, skip }: GetPostsRequestParams) => {
  const { data, isLoading } = useQuery<GetPostsResponseType[]>({
    queryKey: [`posts-${limit}-${skip}`],
    queryFn: () => getPostData({ limit, skip }),
  })

  return {
    data,
    isLoading,
  }
}
