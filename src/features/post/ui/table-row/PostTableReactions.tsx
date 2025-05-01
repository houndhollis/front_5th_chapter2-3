import { GetPostsResponseType } from "@/entities/post/model/type"
import { ThumbsDown, ThumbsUp } from "lucide-react"

export const PostTableReactions = ({ reactions }: { reactions: GetPostsResponseType["reactions"] }) => {
  return (
    <div className="flex items-center gap-2">
      <ThumbsUp className="w-4 h-4" />
      <span>{reactions?.likes || 0}</span>
      <ThumbsDown className="w-4 h-4" />
      <span>{reactions?.dislikes || 0}</span>
    </div>
  )
}
