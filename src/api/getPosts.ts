import { Post } from "@/interfaces/data";

const getPosts = (): Post[] => {
  const posts = localStorage.getItem("posts");

  if (!posts || posts === "undefined") {
    return [];
  }

  return JSON.parse(posts);
};

export default getPosts;
