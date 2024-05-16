import { CurrentUser } from "@/interfaces/data";

const getCurrentUser = (user: CurrentUser) =>
  sessionStorage.setItem("currentUser", JSON.stringify(user));

export default getCurrentUser;
