import { getUserData } from "@/entities/user/api/queries"
import { useQuery } from "@tanstack/react-query"
import { useState } from "react"

export const useGetUser = (userId: number) => {
  const [showUserModal, setShowUserModal] = useState(true)

  const { data: userData, isLoading } = useQuery({
    queryKey: [`user-${userId}`],
    queryFn: () => {
      return getUserData(userId)
    },
  })

  return {
    userData,
    isLoading,
    showUserModal,
    setShowUserModal,
  }
}
