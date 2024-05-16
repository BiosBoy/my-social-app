import { User } from "@/interfaces/data";

const setUsers = (data: User[]) =>
  localStorage.setItem("users", JSON.stringify(data));

export default setUsers;
