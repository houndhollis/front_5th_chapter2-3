import { GetPostsResponseType, PostType, UserType } from "../model/type"

export const formatData = (posts: PostType[], usersData: UserType[]): GetPostsResponseType[] => {
  const postsWithUsers = posts.map((post: PostType) => ({
    ...post,
    author: usersData!.find((user: UserType) => user.id === post.userId),
  }))

  return postsWithUsers
}
