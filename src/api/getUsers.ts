import { User } from "@/interfaces/data";

const getUsers = (): User[] =>
  JSON.parse(localStorage.getItem("users") || "[]");

export default getUsers;
