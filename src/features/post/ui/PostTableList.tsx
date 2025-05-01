import { PostTableHeader } from "./table/PostTableHeader"
import { PostTableBody } from "./table/PostTableBody"
import { Table } from "@/shared/ui"

export const PostTableList = () => {
  return (
    <Table>
      <PostTableHeader />
      <PostTableBody />
    </Table>
  )
}
