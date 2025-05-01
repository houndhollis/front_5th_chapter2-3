import { addPost } from "@/entities/post/api/queries"
import { AddPostType } from "@/entities/post/model/type"
import { useMutation } from "@tanstack/react-query"
import { usePostControl } from "../query/PostDataProvider"

export const useAddPost = () => {
  const { setPosts } = usePostControl()

  return useMutation({
    mutationFn: async (newPost: AddPostType) => {
      const response = await addPost(newPost)
      setPosts((prev) => {
        return [response, ...prev]
      })
      return response
    },
    onSuccess: () => {
      console.log("게시물 추가 성공")
      // 이게 의미가 없네,,?
      // queryClient.refetchQueries({
      //   queryKey: useGetPost.Key({ limit, skip }),
      // })
    },
  })
}
