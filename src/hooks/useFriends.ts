import { useAuth } from "@/auth/AuthContext";
import { CurrentUser, Friend, User } from "@/interfaces/data";
import getUsers from "@/api/getUsers";
import { useState, useEffect, useCallback } from "react";

const useFriends = () => {
  const [friends, setFriends] = useState([]);
  const { currentUser } = useAuth();

  useEffect(() => {
    const users = getUsers();

    const currentUserData = users.find(
      (user: CurrentUser) => user.name === currentUser?.name
    );

    setFriends(currentUserData?.friends || []);
  }, [currentUser]);

  const onFriendsChange = useCallback(
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

  return { friends, onFriendsChange };
};

export default useFriends;
