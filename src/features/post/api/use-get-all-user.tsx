import { getAllUserData } from "@/entities/post/api/queries"
import { useQuery } from "@tanstack/react-query"

export const useGetAllUser = () => {
  const { data: users } = useQuery({
    queryKey: ["allUser"],
    queryFn: () => getAllUserData(),
  })

  return { users }
}
