import { useMutation } from "@tanstack/react-query";
import { usePostControl } from "../query/PostDataProvider";
import { updatePost } from "@/entities/post/api/queries";
import { AddPostType } from "@/entities/post/model/type";

export const useUpdatePost = () => {
  const { setPosts } = usePostControl();

  return useMutation({
    mutationFn: async (selectedPost: AddPostType) => {
      const response = await updatePost(selectedPost);
      setPosts((prev) => {
        const newPost = prev.map((post) => {
          if (post.id === response.id) {
            return {
              ...post,
              title: response.title,
              body: response.body,
            };
          }
          return post;
        });
        return newPost;
      });
      return response;
    },
    onSuccess: () => {
      console.log("업데이트 성공");
    },
  });
};
