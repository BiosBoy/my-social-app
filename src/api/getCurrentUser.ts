import { CurrentUser } from "@/interfaces/data";

const getCurrentUser = (): CurrentUser => {
  const currentUser = sessionStorage.getItem("currentUser");

  if (!currentUser || currentUser === "undefined") {
    return {} as CurrentUser;
  }

  return JSON.parse(currentUser);
};

export default getCurrentUser;
