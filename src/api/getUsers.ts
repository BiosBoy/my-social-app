import { User } from "@/interfaces/data";

const getUsers = (): User[] => {
  const users = localStorage.getItem("users");

  console.log(users, "TST");

  if (!users || users === "undefined") {
    return [];
  }

  return JSON.parse(users);
};

export default getUsers;
