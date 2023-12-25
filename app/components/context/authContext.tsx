"use client";
import { SessionProvider } from "next-auth/react";

//ユーザー認証とセッション管理するためのコンテキスト
type AuthContextProps = {
  children: React.ReactNode;
};

const AuthContext = ({ children }: AuthContextProps) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default AuthContext;
