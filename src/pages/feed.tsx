import { CurrentUser, Friend, Post } from "@/interfaces/data";
import { useEffect, useState } from "react";
import sortByDate from "@/utils/sortByDate";
import withAuth from "@/auth/withAuth";
import getPosts from "../utils/getPosts";
import getUsers from "@/utils/getUsers";
import { useAuth } from "@/auth/AuthContext";

const Feed = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const { currentUser } = useAuth();

  useEffect(() => {
    const users = getUsers();
    const storedPosts = getPosts();

    const currentUserData = users.find(
      (user: CurrentUser) => user.name === currentUser?.name
    );

    setPosts(
      sortByDate(
        storedPosts.filter((post: Post) =>
          currentUserData?.friends.some(
            (item: Friend) => item.name === post.author.name
          )
        )
      )
    );
  }, [currentUser]);

  return (
    <div>
      <h1>Feed</h1>
      <ul>
        {posts.map((post: Post) => (
          <li key={post.date}>
            {post.author.name}: {post.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default withAuth(Feed);
