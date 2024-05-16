import { User } from "@/interfaces/data";

const getUsers = (): User[] => {
  const users = localStorage.getItem("users");

  if (!users || users === "undefined") {
    return [];
  }

  return JSON.parse(users);
};

export default getUsers;
