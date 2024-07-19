import { useEffect } from 'react'
import { useRouter } from 'next/router'

const HomePage = () => {
  const router = useRouter()

  useEffect(() => {
    router.push('/') // Redirect to root page ("/")
  }, [])

  // Render nothing on the homepage, as it will immediately redirect
  return null
}

export default HomePage
