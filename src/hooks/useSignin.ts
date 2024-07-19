import { useAuth } from '@/auth/AuthContext'
import { CurrentUser } from '@/interfaces/data'
import getUsers from '@/api/getUsers'
import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import setCurrentUserAPI from '@/api/setCurrentUser'

const useSignin = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const router = useRouter()
  const { currentUser, setCurrentUser } = useAuth()

  useEffect(() => {
    if (currentUser?.name) {
      router.push('/') // Redirect to sign-in page if not authenticated
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser])

  const onSubmit = () => {
    const users = getUsers()
    const user = users.find(
      (user) => user.name === username && user.password === password
    )

    if (user) {
      setCurrentUserAPI(user as unknown as CurrentUser)
      setCurrentUser(user as unknown as CurrentUser)
      setError('')
      router.push('/')
    } else {
      setError('Invalid credentials.')
    }
  }

  return {
    username,
    password,
    onSubmit,
    onUsernameChange: setUsername,
    onPasswordChange: setPassword,
    error,
  }
}

export default useSignin
