import { createContext, useContext, useState, ReactNode, useMemo } from "react"
import { GetPostsResponseType } from "@/entities/post/model/type"

interface PostDataContextType {
  posts: GetPostsResponseType[]
  setPosts: React.Dispatch<React.SetStateAction<GetPostsResponseType[]>>
}

const PostDataContext = createContext<PostDataContextType | undefined>(undefined)

export const usePostControl = () => {
  const control = useContext(PostDataContext)
  if (!control) {
    throw new Error("post control 내부에서 사용하세요.")
  }

  return control
}

export const PostDataProvider = ({ children }: { children: ReactNode }) => {
  const [posts, setPosts] = useState<GetPostsResponseType[]>([])

  const memoizedValues = useMemo(() => ({ posts, setPosts }), [posts, setPosts])

  return <PostDataContext.Provider value={memoizedValues}>{children}</PostDataContext.Provider>
}
