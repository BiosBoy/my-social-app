import useSignin from "@/hooks/useSignin";

const Signin = () => {
  const {
    username,
    password,
    onUsernameChange,
    onPasswordChange,
    onSubmit,
    error,
  } = useSignin();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <div>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => onUsernameChange(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => onPasswordChange(e.target.value)}
          />
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default Signin;
