import getPosts from '@/api/getPosts'
import setPosts from '@/api/setPosts'
import { useAuth } from '@/auth/AuthContext'
import { Post } from '@/interfaces/data'
import { useEffect, useState } from 'react'

const usePosts = () => {
  const [posts, setStatePosts] = useState<Post[]>([])
  const { currentUser } = useAuth()

  useEffect(() => {
    setStatePosts(getPosts())
  }, [])

  const onUpdatePosts = ({
    title,
    description,
  }: {
    title: string
    description: string
  }) => {
    if (!currentUser) {
      return
    }

    const newPosts = [
      ...posts,
      {
        author: {
          name: currentUser?.name,
          id: currentUser?.id,
        },
        title,
        description,
        date: new Date().toISOString(),
      },
    ]

    setStatePosts(newPosts)
    setPosts(newPosts)
    window.location.reload()
  }

  return { posts, onUpdatePosts }
}

export default usePosts
