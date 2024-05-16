const getUsers = () => JSON.parse(localStorage.getItem("users") || "[]");

export default getUsers;
