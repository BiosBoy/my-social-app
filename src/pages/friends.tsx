import { CurrentUser, Friend, User } from "@/interfaces/data";
import { useCallback, useEffect, useState } from "react";
import getUsers from "@/utils/getUsers";
import { useAuth } from "@/auth/AuthContext";
import withAuth from "@/auth/withAuth";

const Friends = () => {
  const [friends, setFriends] = useState([]);
  const { currentUser } = useAuth();

  useEffect(() => {
    const users = getUsers();

    const currentUserData = users.find(
      (user: CurrentUser) => user.name === currentUser?.name
    );

    setFriends(currentUserData?.friends || []);
  }, [currentUser]);

  const handleUnfriend = useCallback(
    (friend: Friend) => {
      const users = getUsers();

      const updatedUsers = users.map((user: User) =>
        user.name === currentUser?.name
          ? {
              ...user,
              friends: user.friends.filter(
                (item: Friend) => item.name !== friend.name
              ),
            }
          : user
      );

      localStorage.setItem("users", JSON.stringify(updatedUsers));
      setFriends(
        updatedUsers.find((user: User) => user.name === currentUser?.name)
          .friends
      );
    },
    [currentUser?.name]
  );

  return (
    <div>
      <h1>My Friends</h1>
      <ul>
        {friends.map((friend: Friend, index) => (
          <li key={index}>
            {friend.name}
            <button onClick={() => handleUnfriend(friend)}>Unfriend</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default withAuth(Friends);
