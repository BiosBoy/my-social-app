import { useAuth } from "@/auth/AuthContext";
import { Friend, User } from "@/interfaces/data";
import getUsers from "@/api/getUsers";
import { useState, useEffect, useCallback } from "react";
import setUsers from "@/api/setUsers";

const useFriends = () => {
  const [friends, setFriends] = useState<Friend[]>([]);
  const { currentUser } = useAuth();

  useEffect(() => {
    const users = getUsers();

    const currentUserData = users.find(
      (user) => user.name === currentUser?.name
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
              friends: user.friends?.filter(
                (item: Friend) => item.name !== friend.name
              ),
            }
          : user
      );

      setUsers(updatedUsers);
      setFriends(
        updatedUsers?.find((user) => user.name === currentUser?.name)
          ?.friends || []
      );
    },
    [currentUser?.name]
  );

  return { friends, onFriendsChange };
};

export default useFriends;
