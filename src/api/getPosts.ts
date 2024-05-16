const getPosts = () => JSON.parse(localStorage.getItem("posts") || "[]");

export default getPosts;
