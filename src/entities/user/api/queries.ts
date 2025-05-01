import { UserResponseType } from "../model/type"

export const getUserData = async (userId: number): Promise<UserResponseType> => {
  const response = await fetch(`/api/users/${userId}`)
  const userData = (await response.json()) as UserResponseType

  return userData
}
