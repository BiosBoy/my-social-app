import { User } from '@/interfaces/data'
import { isNull } from '@/utils/isNull'

const getUsers = (): User[] => {
  const users = localStorage.getItem('users')

  return isNull(users) ? [] : JSON.parse(users!)
}

export default getUsers
