import getUsers from "@/utils/getUsers";
import { useEffect, useState } from "react";
import { useAuth } from "@/auth/AuthContext";
import { useRouter } from "next/router";
import { User } from "@/interfaces/data";

const Signup = () => {
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

  const handleSubmit = (e: React.FormEvent) => {
    const users = getUsers();

    e.preventDefault();
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
      const user = {
        id: Math.random().toString(36),
        name: username,
        password,
      };
      users.push({ ...user, friends: [] });
      setCurrentUser(user);
      localStorage.setItem("users", JSON.stringify(users));
      sessionStorage.setItem("currentUser", JSON.stringify(user));
      setError("");
      router.push("/");
    }
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
