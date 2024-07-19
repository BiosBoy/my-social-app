import useSignup from '@/hooks/useSignup'
import { ChangeEvent } from 'react'

const Signup = () => {
  const {
    username,
    password,
    onSubmit,
    onUsernameChange: setUsername,
    onPasswordChange: setPassword,
    error,
  } = useSignup()

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit()
  }

  const handleChangeUsername = (e: ChangeEvent<HTMLInputElement>) =>
    setUsername(e.target.value)

  const handleChangePassword = (e: ChangeEvent<HTMLInputElement>) =>
    setUsername(e.target.value)

  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSignup}>
        <div>
          <label>Username:</label>

          <input type="text" value={username} onChange={handleChangeUsername} />
        </div>

        <div>
          <label>Password:</label>

          <input
            type="password"
            value={password}
            onChange={handleChangePassword}
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Sign Up</button>
      </form>
    </div>
  )
}

export default Signup
