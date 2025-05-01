import { queryClient } from "@/shared/api/query-client";
import { AddPostType, GetPostsRequestParams, GetPostsResponseType, GetTagsResponseType, UserType } from "../model/type";
import { formatData } from "../lib/formatData";

/**
 * 전체 User 데이터
 */
export const getAllUserData = async (): Promise<UserType[]> => {
  const response = await fetch(`/api/users?limit=0&select=username,image`);
  const usersData = await response.json();

  return usersData.users;
};

/**
 * Post 데이터 가져오가
 */
export const getPostData = async ({ limit, skip }: GetPostsRequestParams): Promise<GetPostsResponseType[]> => {
  const postResponse = await fetch(`/api/posts?limit=${limit}&skip=${skip}`);
  const postsData = await postResponse.json();

  const usersData = queryClient.getQueryData(["allUser"])
    ? queryClient.getQueryData<UserType[]>(["allUser"])
    : await getAllUserData();

  const postsWithUsers = formatData(postsData.posts, usersData!);

  return postsWithUsers;
};

/**
 * Search Post 데이터 가져오기
 */
export const getSearchPostData = async (searchQuery: string): Promise<GetPostsResponseType[]> => {
  const response = await fetch(`/api/posts/search?q=${searchQuery}`);
  const postsData = await response.json();

  const usersData = queryClient.getQueryData(["allUser"])
    ? queryClient.getQueryData<UserType[]>(["allUser"])
    : await getAllUserData();

  const postsWithUsers = formatData(postsData.posts, usersData!);

  return postsWithUsers;
};

/**
 * Tags 데이터 가져오기
 */
export const getTagsData = async (): Promise<GetTagsResponseType[]> => {
  const tagsResponse = await fetch(`/api/posts/tags`);
  const tagsData = await tagsResponse.json();
  return tagsData;
};

/**
 * 태그별 게시물 가져오기
 */
export const getPostByTag = async (tag: string): Promise<GetPostsResponseType[]> => {
  if (tag === "all") {
    return getPostData({ limit: "10", skip: "0" });
  }
  const response = await fetch(`/api/posts/tag/${tag}`);
  const postsData = await response.json();

  const usersData = queryClient.getQueryData(["allUser"])
    ? queryClient.getQueryData<UserType[]>(["allUser"])
    : await getAllUserData();

  const postsWithUsers = formatData(postsData.posts, usersData!);

  return postsWithUsers;
};

/**
 * AddPost 기능
 */
export const addPost = async (newPost: AddPostType) => {
  const response = await fetch(`/api/posts/add`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newPost),
  });
  const data = await response.json();
  return data;
};

/**
 * DeletePost 기능
 */
export const deletePost = async (id: number) => {
  const response = await fetch(`/api/posts/${id}`, {
    method: "DELETE",
  });
  const data = await response.json();
  return data;
};

/**
 * UpdatePost 기능
 */
export const updatePost = async (selectedPost: AddPostType) => {
  const response = await fetch(`/api/posts/${selectedPost.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(selectedPost),
  });
  const data = await response.json();
  return data;
};
