import sortByDate from "@/utils/sortByDate";
import { useRouter } from "next/router";
import { useCallback, useEffect, useMemo, useState } from "react";
import { CurrentUser, Friend, Post, User } from "@/interfaces/data";
import getPosts from "@/api/getPosts";
import getUsers from "@/api/getUsers";
import { useAuth } from "@/auth/AuthContext";
import withAuth from "@/auth/withAuth";
import usePosts from "@/hooks/usePosts";

const UserProfile = () => {
  const router = useRouter();
  const { username } = router.query;
  const { posts } = usePosts();
  const [isFriend, setIsFriend] = useState(false);
  const { currentUser } = useAuth();

  const sortedPosts = useMemo(() => {
    return sortByDate(
      posts.filter((post: Post) => post.author.name === currentUser?.name)
    );
  }, [posts, currentUser]);

  useEffect(() => {
    const users = getUsers();

    const currentUserData = users.find(
      (user: CurrentUser) => user.name === currentUser?.name
    );

    setIsFriend(
      currentUserData?.friends.some((item: Friend) => item.name === username)
    );
  }, [currentUser, username]);

  const handleFriendToggle = useCallback(() => {
    const users = getUsers();

    const updatedUsers = users.map((item: User) => ({
      ...item,
      friends: isFriend
        ? item.friends.filter((friend: Friend) => friend.name !== username)
        : [...item.friends, { name: username }],
    }));
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    setIsFriend(!isFriend);
  }, [isFriend, username]);

  return (
    <div>
      <h1>{username}</h1>
      {currentUser?.name && username !== currentUser?.name ? (
        <button onClick={handleFriendToggle}>
          {isFriend ? "Unfriend" : "Befriend"}
        </button>
      ) : (
        <ul>
          {!sortedPosts?.length
            ? "no posts yet"
            : sortedPosts.map((post: Post) => (
                <li key={post.date}>
                  {post.date}: {post.description}
                </li>
              ))}
        </ul>
      )}
    </div>
  );
};

export default withAuth(UserProfile);
