import getCurrentUser from "@/api/getCurrentUser";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const withAuth = (WrappedComponent: React.ComponentType<any>) => {
  const AuthComponent = (props: any) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const router = useRouter();

    useEffect(() => {
      const { name } = getCurrentUser();

      setIsAuthenticated(!!name);

      if (!name) {
        router.push("/signin"); // Redirect to sign-in page if not authenticated
      }
    }, []);

    // Render the wrapped component if authenticated
    return isAuthenticated ? <WrappedComponent {...props} /> : null;
  };

  return AuthComponent;
};

export default withAuth;
