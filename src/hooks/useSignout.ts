import { useAuth } from "@/auth/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const useSignout = () => {
  const router = useRouter();
  const { setCurrentUser } = useAuth();

  useEffect(() => {
    sessionStorage.removeItem("currentUser");
    setCurrentUser(null);
    router.push("/");
  }, []);
};

export default useSignout;
