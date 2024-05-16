const getCurrentUser = () =>
  JSON.parse(sessionStorage.getItem("currentUser") || "{}");

export default getCurrentUser;
