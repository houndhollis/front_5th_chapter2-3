import { GetPostsRequestParams, GetPostsResponseType, PostType, UserType } from "../model/type"

export const getPostData = async ({ limit, skip }: GetPostsRequestParams): Promise<GetPostsResponseType[]> => {
  const postResponse = await fetch(`/api/posts?limit=${limit}&skip=${skip}`)
  const postsData = await postResponse.json()

  const userResponse = await fetch("/api/users?limit=0&select=username,image")
  const usersData = await userResponse.json()

  const postsWithUsers = postsData.posts.map((post: PostType) => ({
    ...post,
    author: usersData.find((user: UserType) => user.id === post.userId),
  }))
  return postsWithUsers
}
