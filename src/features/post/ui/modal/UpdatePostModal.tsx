import { AddPostType } from "@/entities/post/model/type";
import { Button, Dialog, Input, Textarea } from "@/shared/ui";
import { useUpdatePost } from "../../api/use-update-post";

export const UpdatePostModal = ({
  selectedPost,
  setSelectedPost,
  showEditDialog,
  setShowEditDialog,
}: {
  selectedPost: AddPostType | null;
  setSelectedPost: React.Dispatch<React.SetStateAction<AddPostType | null>>;
  showEditDialog: boolean;
  setShowEditDialog: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const mutation = useUpdatePost();

  if (selectedPost === null) {
    return;
  }

  const handleUpdatePost = () => {
    mutation.mutate(selectedPost, {
      onSuccess: () => {
        setShowEditDialog(false);
      },
    });
  };

  return (
    <Dialog open={showEditDialog} onOpenChange={setShowEditDialog}>
      <Dialog.Content>
        <Dialog.Header>
          <Dialog.Title>게시물 수정</Dialog.Title>
        </Dialog.Header>
        <div className="space-y-4">
          <Input
            placeholder="제목"
            value={selectedPost?.title || ""}
            onChange={(e) => setSelectedPost({ ...selectedPost, title: e.target.value })}
          />
          <Textarea
            rows={15}
            placeholder="내용"
            value={selectedPost?.body || ""}
            onChange={(e) => setSelectedPost({ ...selectedPost, body: e.target.value })}
          />
          <Button onClick={handleUpdatePost}>게시물 업데이트</Button>
        </div>
      </Dialog.Content>
    </Dialog>
  );
};
