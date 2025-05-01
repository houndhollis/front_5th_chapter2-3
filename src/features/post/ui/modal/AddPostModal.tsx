import { AddPostType } from "@/entities/post/model/type"
import { Button, Dialog, Input, Textarea } from "@/shared/ui"
import { useState } from "react"
import { useAddPost } from "../../api/use-add-post"

export const AddPostModal = ({
  showAddDialog,
  setShowAddDialog,
}: {
  showAddDialog: boolean
  setShowAddDialog: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  const [newPost, setNewPost] = useState<AddPostType>({ title: "", body: "", userId: 1 })
  const mutation = useAddPost()

  const handleAddPost = () => {
    mutation.mutate(newPost, {
      onSuccess: () => {
        setShowAddDialog(false)
      },
    })
  }

  return (
    <Dialog open={showAddDialog} onOpenChange={setShowAddDialog}>
      <Dialog.Content>
        <Dialog.Header>
          <Dialog.Title>새 게시물 추가</Dialog.Title>
        </Dialog.Header>
        <div className="space-y-4">
          <Input
            placeholder="제목"
            value={newPost.title}
            onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
          />
          <Textarea
            rows={30}
            placeholder="내용"
            value={newPost.body}
            onChange={(e) => setNewPost({ ...newPost, body: e.target.value })}
          />
          <Input
            type="number"
            placeholder="사용자 ID"
            value={newPost.userId}
            onChange={(e) => setNewPost({ ...newPost, userId: Number(e.target.value) })}
          />
          <Button onClick={handleAddPost}>게시물 추가</Button>
        </div>
      </Dialog.Content>
    </Dialog>
  )
}
