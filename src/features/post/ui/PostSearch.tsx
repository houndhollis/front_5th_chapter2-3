import { Input, Select } from "@/shared/ui"
import { Search } from "lucide-react"
import { useQueryParamsControl } from "../../../app/providers/QueryParamsProvider"
import { useGetTags } from "../api/use-get-tags"
import { useGetSearchPost } from "../api/use-get-search-post"

export const PostSearch = () => {
  const { tags } = useGetTags()
  const { searchQuery, setSearchQuery, selectedTag, setSelectedTag, sortBy, setSortBy, sortOrder, setSortOrder } =
    useQueryParamsControl()

  const { refetch } = useGetSearchPost()

  return (
    <div className="flex gap-4">
      <div className="flex-1">
        <div className="relative">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="게시물 검색..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value)
            }}
            onKeyPress={(e) => e.key === "Enter" && refetch()}
          />
        </div>
      </div>
      <Select
        value={selectedTag}
        onValueChange={(value) => {
          setSelectedTag(value)
          // fetchPostsByTag(value)
          // updateURL()
        }}
      >
        <Select.Trigger className="w-[180px]">
          <Select.Value placeholder="태그 선택" />
        </Select.Trigger>
        <Select.Content>
          <Select.Item value="all">모든 태그</Select.Item>
          {tags &&
            tags.map((tag) => (
              <Select.Item key={tag.url} value={tag.slug}>
                {tag.slug}
              </Select.Item>
            ))}
        </Select.Content>
      </Select>
      <Select value={sortBy} onValueChange={setSortBy}>
        <Select.Trigger className="w-[180px]">
          <Select.Value placeholder="정렬 기준" />
        </Select.Trigger>
        <Select.Content>
          <Select.Item value="none">없음</Select.Item>
          <Select.Item value="id">ID</Select.Item>
          <Select.Item value="title">제목</Select.Item>
          <Select.Item value="reactions">반응</Select.Item>
        </Select.Content>
      </Select>
      <Select value={sortOrder} onValueChange={setSortOrder}>
        <Select.Trigger className="w-[180px]">
          <Select.Value placeholder="정렬 순서" />
        </Select.Trigger>
        <Select.Content>
          <Select.Item value="asc">오름차순</Select.Item>
          <Select.Item value="desc">내림차순</Select.Item>
        </Select.Content>
      </Select>
    </div>
  )
}
