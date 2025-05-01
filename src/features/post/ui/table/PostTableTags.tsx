import { GetPostsResponseType } from "@/entities/post/model/type"
import { useQueryParamsControl } from "../../../../app/providers/QueryParamsProvider"
import { useGetPostByTag } from "../../api/use-get-post-by-tag"

export const PostTableTags = ({ post }: { post: GetPostsResponseType }) => {
  const { selectedTag, setSelectedTag } = useQueryParamsControl()
  const { mutate } = useGetPostByTag()

  return (
    <div className="flex flex-wrap gap-1">
      {post.tags?.map((tag, index) => (
        <span
          key={`${tag}-${index}`}
          className={`px-1 text-[9px] font-semibold rounded-[4px] cursor-pointer ${
            selectedTag === tag
              ? "text-white bg-blue-500 hover:bg-blue-600"
              : "text-blue-800 bg-blue-100 hover:bg-blue-200"
          }`}
          onClick={() => {
            setSelectedTag(tag)
            mutate(tag)
          }}
        >
          {tag}
        </span>
      ))}
    </div>
  )
}
