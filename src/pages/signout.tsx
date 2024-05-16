import { useEffect } from "react";
import { useRouter } from "next/router";
import { useAuth } from "@/auth/AuthContext";

const Signout = () => {
  const router = useRouter();
  const { setCurrentUser } = useAuth();

  useEffect(() => {
    sessionStorage.removeItem("currentUser");
    setCurrentUser(null);
    router.push("/");
  }, []);

  return (
    <div>
      <p>You have been signed out.</p>
    </div>
  );
};

export default Signout;
