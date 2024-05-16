import { User } from "@/interfaces/data";

const getUsers = (): User[] => {
  const users = sessionStorage.getItem("users");

  if (!users || users === "undefined") {
    return [];
  }

  return JSON.parse(users);
};

export default getUsers;
