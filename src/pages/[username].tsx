import sortByDate from "@/utils/sortByDate";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { CurrentUser, Friend, Post, User } from "@/interfaces/data";
import getPosts from "@/utils/getPosts";
import getUsers from "@/utils/getUsers";
import { useAuth } from "@/auth/AuthContext";
import withAuth from "@/auth/withAuth";

const UserProfile = () => {
  const router = useRouter();
  const { username } = router.query;
  const [posts, setPosts] = useState([]);
  const [isFriend, setIsFriend] = useState(false);
  const { currentUser } = useAuth();

  useEffect(() => {
    const storedPosts = getPosts();

    setPosts(
      sortByDate(
        storedPosts.filter(
          (post: Post) => post.author.name === currentUser?.name
        )
      )
    );

    const users = getUsers();
    const currentUserData = users.find(
      (user: CurrentUser) => user.name === currentUser?.name
    );
    setIsFriend(
      currentUserData?.friends.some((item: Friend) => item.name === username)
    );
  }, [username, currentUser]);

  const handleFriendToggle = () => {
    const users = getUsers();

    const updatedUsers = users.map((item: User) => ({
      ...item,
      friends: isFriend
        ? item.friends.filter((friend: Friend) => friend.name !== username)
        : [...item.friends, { name: username }],
    }));
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    setIsFriend(!isFriend);
  };

  return (
    <div>
      <h1>{username}</h1>
      {currentUser?.name && username !== currentUser?.name ? (
        <button onClick={handleFriendToggle}>
          {isFriend ? "Unfriend" : "Befriend"}
        </button>
      ) : (
        <ul>
          {!posts?.length
            ? "no posts yet"
            : posts.map((post: Post) => (
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
