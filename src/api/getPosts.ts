import { Post } from '@/interfaces/data'
import { isNull } from '@/utils/isNull'

const getPosts = (): Post[] => {
  const posts = localStorage.getItem('posts')

  return isNull(posts) ? [] : JSON.parse(posts!)
}

export default getPosts
