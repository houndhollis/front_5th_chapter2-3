/**
 * User 데이터
 */
export interface UserResponseType {
  image: string
  username: string
  firstName: string
  lastName: string
  age: number
  email: string
  phone: string
  address: {
    address: string
    state: string
    city: string
  }
  city: string
  company: {
    name: string
    title: string
  }
}
