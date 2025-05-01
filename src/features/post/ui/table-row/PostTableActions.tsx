import { Button } from "@/shared/ui";
import { Edit2, MessageSquare, Trash2 } from "lucide-react";
import { useDeletePost } from "../../api/use-delete-post";
import { AddPostType, PostType } from "@/entities/post/model/type";
import { useState } from "react";
import { UpdatePostModal } from "../modal/UpdatePostModal";

export const PostTableActions = ({ post }: { post: PostType }) => {
  const { mutate } = useDeletePost();
  const [selectedPost, setSelectedPost] = useState<AddPostType | null>(null);
  const [showEditDialog, setShowEditDialog] = useState(false);

  return (
    <div className="flex items-center gap-2">
      <Button
        variant="ghost"
        size="sm"
        // onClick={() => openPostDetail(post)}
      >
        <MessageSquare className="w-4 h-4" />
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => {
          setSelectedPost(post);
          setShowEditDialog(true);
        }}
      >
        <Edit2 className="w-4 h-4" />
      </Button>
      <Button variant="ghost" size="sm" onClick={() => mutate(post.id)}>
        <Trash2 className="w-4 h-4" />
      </Button>
      {showEditDialog && (
        <UpdatePostModal
          selectedPost={selectedPost}
          setSelectedPost={setSelectedPost}
          showEditDialog={showEditDialog}
          setShowEditDialog={setShowEditDialog}
        />
      )}
    </div>
  );
};
