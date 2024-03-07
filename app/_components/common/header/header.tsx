"use client";
import { AppBar, Box, Toolbar } from "@mui/material";
import { User } from "@prisma/client";
import { useState } from "react";
import useSignupModal from "@/app/_feature/hooks/useSignupModal";
import useLoginModal from "@/app/_feature/hooks/useLoginModal";
import { signOut } from "next-auth/react";
import LpButton from "../button/lp-button";
import { useRouter } from "next/navigation";
import { CustomLink } from "../link/custom-link";
import Link from "next/link";

type TProps = {
  currentUser: User | null;
};

export const Header: React.FC<TProps> = ({ currentUser }) => {
  const signupModal = useSignupModal();
  const loginModal = useLoginModal();
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  return (
    <AppBar position="static" color="inherit" sx={{ p: 0.4 }}>
      <Toolbar>
        <Box flexGrow={1}>
          <Link
            href="/"
            style={{
              color: "black",
              fontSize: "1.9rem",
              fontFamily: "system-ui",
              letterSpacing: "0.5px",
              textDecoration: "none",
            }}
          >
            Renlaku
          </Link>
        </Box>
        <LpButton
          bgColor="white"
          color="black"
          sx={{ display: { xs: "none", sm: "block" } }}
          onClick={() => router.push("/")}
          label="サービスについて"
        />
        {currentUser ? (
          <>
            <LpButton
              bgColor="white"
              color="black"
              sx={{ display: { xs: "none", sm: "block" } }}
              onClick={() => router.push("/profile")}
              label="プロフィール編集"
            />
            <LpButton
              bgColor="white"
              color="black"
              sx={{ display: { xs: "none", sm: "block" } }}
              onClick={() => {
                signOut();
                setIsOpen(false);
              }}
              label="ログアウト"
            />
          </>
        ) : (
          <>
            <LpButton
              bgColor="white"
              color="black"
              sx={{ display: { xs: "none", sm: "block" } }}
              onClick={() => {
                loginModal.onOpen();
                setIsOpen(false);
              }}
              label="ログイン"
            />
            <LpButton
              bgColor="white"
              color="black"
              sx={{ display: { xs: "none", sm: "block" } }}
              onClick={() => {
                signupModal.onOpen();
                setIsOpen(false);
              }}
              label="新規登録"
            />
          </>
        )}
        <LpButton
          label="まずは使ってみる"
          onClick={() => router.push("/create-mail?category=skip-class")}
          hover
          sx={{ m: { xs: "12px 0", sm: "12px" } }}
        />
      </Toolbar>
    </AppBar>
  );
};
