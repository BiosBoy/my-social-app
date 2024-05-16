import { Post } from "@/interfaces/data";

const setPosts = (data: Post[]) =>
  localStorage.setItem("posts", JSON.stringify(data));

export default setPosts;
