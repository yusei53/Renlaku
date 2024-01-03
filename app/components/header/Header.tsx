"use client";

import { Box, AppBar, Toolbar, Typography } from "@mui/material";
import { User } from "@prisma/client";
import { useState } from "react";
import useSignupModal from "@/app/hooks/useSignupModal";
import MenuButton from "../menu/menuButton";
import useLoginModal from "@/app/hooks/useLoginModal";

const Header = () => {
  const signupModal = useSignupModal();
  const [isOpen, setIsOpen] = useState(false);
  const loginModal = useLoginModal();

  return (
    <Box component={"header"}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Renlaku
          </Typography>
          <MenuButton
            onClick={() => {
              loginModal.onOpen();
              setIsOpen(false);
            }}
            label="ログイン"
          />
          <MenuButton
            onClick={() => {
              signupModal.onOpen();
              setIsOpen(false);
            }}
            label="新規登録"
          />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
