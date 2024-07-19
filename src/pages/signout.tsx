import useSignout from '@/hooks/useSignout'

const Signout = () => {
  useSignout()

  return (
    <div>
      <p>You have been signed out.</p>
    </div>
  )
}

export default Signout
