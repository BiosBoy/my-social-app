import { Post } from "@/interfaces/data";

const setPosts = (data: Post[]) =>
  sessionStorage.setItem("posts", JSON.stringify(data));

export default setPosts;
