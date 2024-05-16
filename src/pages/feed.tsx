import { CurrentUser, Friend, Post } from "@/interfaces/data";
import { useMemo } from "react";
import sortByDate from "@/utils/sortByDate";
import withAuth from "@/auth/withAuth";
import getUsers from "@/api/getUsers";
import { useAuth } from "@/auth/AuthContext";
import usePosts from "@/hooks/usePosts";

const Feed = () => {
  const { posts } = usePosts();
  const { currentUser } = useAuth();

  const sortedPosts = useMemo(() => {
    const users = getUsers();

    const currentUserData = users.find(
      (user: CurrentUser) => user.name === currentUser?.name
    );

    return sortByDate(
      posts.filter((post: Post) =>
        currentUserData?.friends?.some(
          (item: Friend) => item.name === post.author.name
        )
      )
    );
  }, [posts, currentUser]);

  return (
    <div>
      <h1>Feed</h1>
      <ul>
        {!sortedPosts.length ? (
          <p>Nothing to show yet</p>
        ) : (
          sortedPosts.map((post: Post) => (
            <li key={post.date}>
              {post.author.name}: {post.description}
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default withAuth(Feed);
