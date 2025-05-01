/**
 * 요청 params
 */
export interface GetPostsRequestParams {
  limit: string
  skip: string
  searchQuery?: string
}

/**
 * Post 데이터
 */
export interface PostType {
  id: number
  body: string
  reactions: {
    likes: number
    dislikes: number
  }
  tags: string[]
  title: string
  userId: number
  views: number
}

/**
 * User 데이터
 */
export interface UserType {
  id: number
  username: string
  image: string
}

/**
 * 응답 데이터
 */
export interface GetPostsResponseType extends PostType {
  author?: UserType
}

/**
 * Tag 데이터
 */
export interface GetTagsResponseType {
  name: string
  slug: string
  url: string
}

/**
 * Post 추가
 */
export interface AddPostType {
  title: string
  body: string
  userId: number
}
