import { Post } from "@/interfaces/data";
import getPosts from "../utils/getPosts";

import { useEffect, useState } from "react";
import sortByDate from "@/utils/sortByDate";

const Home = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const storedPosts = getPosts();
    setPosts(sortByDate<Post>(storedPosts));
  }, []);

  return (
    <div>
      <h1>Home</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.date}>
            {post.date} {post.author.name}: {post.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
