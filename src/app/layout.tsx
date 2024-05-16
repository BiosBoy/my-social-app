import { Inter } from "next/font/google";

import "../styles/global.css";
import { AuthProvider } from "@/auth/AuthContext";
import useDataInitialize from "@/hooks/useDataInitialize";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useDataInitialize();

  return (
    <AuthProvider>
      <Header />
      <div className={inter.className}>{children}</div>
    </AuthProvider>
  );
}
