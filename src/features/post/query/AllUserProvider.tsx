/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, ReactNode, useMemo } from "react"
import { UserType } from "@/entities/post/model/type"
import { useGetAllUser } from "../api/use-get-all-user"

interface AllUserContextType {
  users: UserType[]
}

const AllUserContext = createContext<AllUserContextType | undefined>(undefined)

export const useUserControl = () => {
  const control = useContext(AllUserContext)
  if (!control) {
    throw new Error("post control 내부에서 사용하세요.")
  }

  return control
}

export const AllUserProvider = ({ children }: { children: ReactNode }) => {
  const { users } = useGetAllUser()

  const memoizedValues = useMemo(() => ({ users: users ?? [] }), [users])

  return <AllUserContext.Provider value={memoizedValues}>{children}</AllUserContext.Provider>
}
