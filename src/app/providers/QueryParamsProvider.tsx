/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, ReactNode, useMemo } from "react"

interface PostQueryContextType {
  skip: string
  setSkip: (skip: string) => void
  limit: string
  setLimit: (limit: string) => void
  searchQuery: string
  setSearchQuery: (query: string) => void
  sortBy: string
  setSortBy: (sortBy: string) => void
  sortOrder: string
  setSortOrder: (order: string) => void
  selectedTag: string
  setSelectedTag: (tag: string) => void
}

const PostQueryContext = createContext<PostQueryContextType | undefined>(undefined)

export const useQueryParamsControl = () => {
  const controls = useContext(PostQueryContext)
  if (!controls) {
    throw new Error("post 내부에서 사용하세요.")
  }
  return controls
}

interface PostQueryProviderProps {
  children: ReactNode
}

export const QueryParamsProvider = ({ children }: PostQueryProviderProps) => {
  const queryParams = new URLSearchParams(window.location.search)

  const [skip, setSkip] = useState(queryParams.get("skip") || "0")
  const [limit, setLimit] = useState(queryParams.get("limit") || "10")
  const [searchQuery, setSearchQuery] = useState(queryParams.get("search") || "")
  const [sortBy, setSortBy] = useState(queryParams.get("sortBy") || "")
  const [sortOrder, setSortOrder] = useState(queryParams.get("sortOrder") || "asc")
  const [selectedTag, setSelectedTag] = useState(queryParams.get("tag") || "")

  const memorizedValue = useMemo(
    () => ({
      skip,
      setSkip,
      limit,
      setLimit,
      searchQuery,
      setSearchQuery,
      sortBy,
      setSortBy,
      sortOrder,
      setSortOrder,
      selectedTag,
      setSelectedTag,
    }),
    [
      skip,
      setSkip,
      limit,
      setLimit,
      searchQuery,
      setSearchQuery,
      sortBy,
      setSortBy,
      sortOrder,
      setSortOrder,
      selectedTag,
      setSelectedTag,
    ],
  )
  return <PostQueryContext.Provider value={memorizedValue}>{children}</PostQueryContext.Provider>
}
