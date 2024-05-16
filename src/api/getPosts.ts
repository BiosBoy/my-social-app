import { Post } from "@/interfaces/data";

const getPosts = (): Post[] =>
  JSON.parse(localStorage.getItem("posts") || "[]");

export default getPosts;
