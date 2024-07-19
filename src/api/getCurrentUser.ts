import { CurrentUser } from '@/interfaces/data'
import { isNull } from '@/utils/isNull'

const getCurrentUser = (): CurrentUser => {
  const currentUser = sessionStorage.getItem('currentUser')

  return isNull(currentUser)
    ? ({} as CurrentUser)
    : (JSON.parse(currentUser!) as CurrentUser)
}

export default getCurrentUser
