import { useAuth } from "@/auth/AuthContext";
import { CurrentUser } from "@/interfaces/data";
import getUsers from "@/api/getUsers";
import { useRouter } from "next/navigation";
import router from "next/router";
import { useState, useEffect } from "react";

const useSignin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const { currentUser, setCurrentUser } = useAuth();

  useEffect(() => {
    if (currentUser) {
      router.push("/"); // Redirect to sign-in page if not authenticated
    }
  }, [currentUser]);

  const onSubmit = () => {
    const users = getUsers();
    const user = users.find(
      (user: CurrentUser) =>
        user.name === username && user.password === password
    );

    if (user) {
      setCurrentUser(user);
      sessionStorage.setItem("currentUser", JSON.stringify(user));
      setError("");
      router.push("/");
    } else {
      setError("Invalid credentials.");
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

export default useSignin;
