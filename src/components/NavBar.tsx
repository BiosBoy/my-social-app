import Link from "next/link";
import { useAuth } from "@/auth/AuthContext";

const NavBar = () => {
  const { currentUser } = useAuth();

  console.log(currentUser?.name, "currentUser?.name");

  return (
    <nav>
      {currentUser?.name ? (
        <>
          <Link href="/">Home</Link>
          <Link href="/feed">My feed</Link>
          <Link href="/friends">My friends</Link>
          <Link href={`/${currentUser?.name}`}>My profile</Link>
          <Link href="/signout">Sign out</Link>
        </>
      ) : (
        <>
          <Link href="/">Home</Link>
          <Link href="/signin">Sign in</Link>
          <Link href="/signup">Sign up</Link>
        </>
      )}
    </nav>
  );
};

export default NavBar;
