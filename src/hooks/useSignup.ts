import { useAuth } from "@/auth/AuthContext";
import { User } from "@/interfaces/data";
import getUsers from "@/api/getUsers";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import setUsers from "@/api/setUsers";
import setCurrentUserAPI from "@/api/setCurrentUser";

const useSignup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { currentUser, setCurrentUser } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (currentUser) {
      router.push("/"); // Redirect to sign-in page if authenticated
    }
  }, [currentUser]);

  const validatePassword = (password: string) => {
    if (/(.).*\1{2}/.test(password) || /(.)\1/.test(password)) {
      return false;
    }
    return true;
  };

  const onSubmit = () => {
    const users = getUsers();

    if (!/^[\w_]+$/.test(username)) {
      setError(
        "Username must contain only alphanumeric characters and underscores."
      );
      return;
    }
    if (!validatePassword(password)) {
      setError("Password requirements not met.");
      return;
    }
    if (users.some((item: User) => item.name === username)) {
      setError("User name is taken.");
      return;
    }
    if (username.length > 3 && password.length > 3 && !error) {
      const user: User = {
        id: Math.random().toString(36),
        name: username,
        password,
      };
      users.push({ ...user, friends: [] });
      setCurrentUserAPI(user);
      setUsers(users);
      setCurrentUser(user);
      setError("");
      router.push("/");
    }
  };

  return {
    username,
    password,
    onSubmit,
    onUsernameChange: setUsername,
    onPasswordChange: setPassword,
    error,
  };
};

export default useSignup;
