import { Button } from "@/shared/ui"
import { Plus } from "lucide-react"
import { useState } from "react"
import { AddPostModal } from "./modal/AddPostModal"

export const PostAdd = () => {
  const [showAddDialog, setShowAddDialog] = useState(false)

  return (
    <>
      <Button onClick={() => setShowAddDialog(true)}>
        <Plus className="w-4 h-4 mr-2" />
        게시물 추가
      </Button>
      {showAddDialog && <AddPostModal showAddDialog={showAddDialog} setShowAddDialog={setShowAddDialog} />}
    </>
  )
}
