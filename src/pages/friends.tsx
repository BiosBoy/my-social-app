import { Friend } from '@/interfaces/data'
import withAuth from '@/auth/withAuth'
import useFriends from '@/hooks/useFriends'

const Friends = () => {
  const { friends, onFriendsChange } = useFriends()

  return (
    <div>
      <h1>My Friends</h1>

      <ul>
        {!friends?.length ? (
          <p>No friends yet</p>
        ) : (
          friends.map((friend: Friend, index) => (
            <li key={index}>
              {friend.name}
              <button onClick={() => onFriendsChange(friend)}>Unfriend</button>
            </li>
          ))
        )}
      </ul>
    </div>
  )
}

export default withAuth(Friends)
