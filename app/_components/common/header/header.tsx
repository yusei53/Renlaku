"use client";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { User } from "@prisma/client";
import { Fragment, useState } from "react";
import useSignupModal from "@/app/_feature/hooks/useSignupModal";
import useLoginModal from "@/app/_feature/hooks/useLoginModal";
import { signOut } from "next-auth/react";
import LpButton from "../button/lp-button";

type TProps = {
  currentUser: User | null;
};

export const Header: React.FC<TProps> = ({ currentUser }) => {
  const signupModal = useSignupModal();
  const loginModal = useLoginModal();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <AppBar position="static" sx={{ bgcolor: "white", p: 0.5 }}>
      <Toolbar>
        <Typography flexGrow={1} color={"black"} fontSize={"1.8rem"}>
          Renlaku
        </Typography>
        <LpButton
          bgColor="white"
          color="black"
          props={{
            display: { xs: "none", sm: "none", md: "block" },
          }}
          onClick={() => {}}
          label="サービスについて"
        />
        {currentUser ? (
          <LpButton
            bgColor="white"
            color="black"
            props={{
              display: { xs: "none", sm: "block" },
            }}
            onClick={() => {
              signOut();
              setIsOpen(false);
            }}
            label="ログアウト"
          />
        ) : (
          <Fragment>
            <LpButton
              bgColor="white"
              color="black"
              props={{
                display: { xs: "none", sm: "block" },
              }}
              onClick={() => {
                loginModal.onOpen();
                setIsOpen(false);
              }}
              label="ログイン"
            />
            <LpButton
              bgColor="white"
              color="black"
              props={{
                display: { xs: "none", sm: "block" },
              }}
              onClick={() => {
                signupModal.onOpen();
                setIsOpen(false);
              }}
              label="新規登録"
            />
          </Fragment>
        )}
        <LpButton
          label="まずは使ってみる"
          onClick={() => {}}
          hover
          props={{
            m: { xs: "12px 0", sm: "12px" },
          }}
        />
      </Toolbar>
    </AppBar>
  );
};
