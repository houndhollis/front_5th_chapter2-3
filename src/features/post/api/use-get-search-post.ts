import { useQuery } from "@tanstack/react-query"
import { usePostControl } from "../query/PostDataProvider"
import { getSearchPostData } from "@/entities/post/api/queries"
import { useQueryParamsControl } from "../../../app/providers/QueryParamsProvider"

export const useGetSearchPost = () => {
  const { searchQuery } = useQueryParamsControl()
  const { setPosts } = usePostControl()
  const { refetch } = useQuery({
    queryKey: useGetSearchPost.Key(searchQuery),
    queryFn: async () => {
      const posts = await getSearchPostData(searchQuery)
      setPosts(posts)
      return posts
    },
    enabled: false,
  })

  return { refetch }
}

useGetSearchPost.Key = (searchQuery: string) => ["searchPost", searchQuery]
