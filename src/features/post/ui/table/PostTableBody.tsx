import { Table } from "@/shared/ui";
import { useGetPost } from "../../api/use-get-post";
import { PostTableTags } from "./PostTableTags";
import { PostTableReactions } from "../table-row/PostTableReactions";
import { PostTableActions } from "../table-row/PostTableActions";
import { highlightText } from "@/shared/lib/highlight-text";
import { useQueryParamsControl } from "../../../../app/providers/QueryParamsProvider";
import { useState } from "react";
import { UserInfoModal } from "@/features/user/ui/UserInfoModal";
import { usePostControl } from "../../query/PostDataProvider";

export const PostTableBody = () => {
  const [selectUserId, setSelectUserId] = useState<number | null>(null);
  const { limit, skip } = useQueryParamsControl();
  const { posts } = usePostControl();
  const { isFetched } = useGetPost({ limit, skip });
  const { searchQuery } = useQueryParamsControl();

  return (
    <>
      <Table.Body>
        {!isFetched ? (
          <Table.Row>
            <td colSpan={5} className="text-center py-4">
              로딩 중...
            </td>
          </Table.Row>
        ) : (
          posts &&
          posts.map((post, index) => (
            <Table.Row key={`${post.id}-${index}`}>
              <Table.Cell>{post.id}</Table.Cell>
              <Table.Cell>
                <div className="space-y-1">
                  <div>{highlightText(post.title, searchQuery)}</div>

                  <PostTableTags post={post} />
                </div>
              </Table.Cell>
              <Table.Cell>
                <div
                  className="flex items-center space-x-2 cursor-pointer"
                  onClick={() => setSelectUserId(post.userId)}
                >
                  <img src={post.author?.image} alt={post.author?.username} className="w-8 h-8 rounded-full" />
                  <span>{post.author?.username}</span>
                </div>
              </Table.Cell>
              <Table.Cell>
                <PostTableReactions reactions={post.reactions} />
              </Table.Cell>
              <Table.Cell>
                <PostTableActions post={post} />
              </Table.Cell>
            </Table.Row>
          ))
        )}
      </Table.Body>
      {selectUserId && <UserInfoModal setSelectUserId={setSelectUserId} userId={selectUserId} />}
    </>
  );
};
