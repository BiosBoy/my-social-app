import { useAuth } from "@/auth/AuthContext";
import { Post } from "@/interfaces/data";
import getPosts from "@/api/getPosts";
import sortByDate from "@/utils/sortByDate";
import { useState, useEffect } from "react";

const usePosts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const { currentUser } = useAuth();

  useEffect(() => {
    const storedPosts = getPosts();
    setPosts(sortByDate<Post>(storedPosts));
  }, []);

  const onUpdatePosts = ({
    title,
    description,
  }: {
    title: string;
    description: string;
  }) => {
    const posts = getPosts();
    posts.push({
      author: {
        name: currentUser?.name,
        id: currentUser?.id,
      },
      title,
      description,
      date: new Date().toISOString(),
    });
    localStorage.setItem("posts", JSON.stringify(posts));
    window.location.reload();
  };

  return { posts, onUpdatePosts };
};

export default usePosts;
