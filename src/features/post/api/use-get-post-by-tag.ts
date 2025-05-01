import { getPostByTag } from "@/entities/post/api/queries"
import { useMutation } from "@tanstack/react-query"
import { usePostControl } from "../query/PostDataProvider"

export const useGetPostByTag = () => {
  const { setPosts } = usePostControl()

  return useMutation({
    mutationFn: async (tag: string) => {
      const response = await getPostByTag(tag)
      setPosts(response)
      return response
    },
  })
}
