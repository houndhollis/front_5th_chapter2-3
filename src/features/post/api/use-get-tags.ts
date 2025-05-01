import { getTagsData } from "@/entities/post/api/queries"
import { GetTagsResponseType } from "@/entities/post/model/type"
import { useQuery } from "@tanstack/react-query"

export const useGetTags = () => {
  const { data: tags, isLoading } = useQuery<GetTagsResponseType[]>({
    queryKey: ["tags"],
    queryFn: () => getTagsData(),
  })

  return {
    tags,
    isLoading,
  }
}
