import useSignin from '@/hooks/useSignin'
import { ChangeEvent } from 'react'

const Signin = () => {
  const {
    username,
    password,
    onUsernameChange,
    onPasswordChange,
    onSubmit,
    error,
  } = useSignin()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit()
  }

  const handleChangeUsername = (e: ChangeEvent<HTMLInputElement>) =>
    onUsernameChange(e.target.value)

  const handleChangePassword = (e: ChangeEvent<HTMLInputElement>) =>
    onUsernameChange(e.target.value)

  return (
    <div>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Sign In</button>
      </form>
    </div>
  )
}

export default Signin
