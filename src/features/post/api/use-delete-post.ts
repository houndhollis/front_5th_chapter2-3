import { useMutation } from "@tanstack/react-query";
import { usePostControl } from "../query/PostDataProvider";
import { deletePost } from "@/entities/post/api/queries";

export const useDeletePost = () => {
  const { setPosts } = usePostControl();

  return useMutation({
    mutationFn: async (id: number) => {
      const response = await deletePost(id);
      setPosts((prev) => {
        return prev.filter((post) => post.id !== id);
      });
      return response;
    },
    onSuccess: () => {
      console.log("게시물 삭제 성공");
    },
  });
};
