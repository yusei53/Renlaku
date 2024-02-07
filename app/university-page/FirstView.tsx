"use client";
import { Box } from "@mui/material";
import { User } from "@prisma/client";
import Greeting from "./Greeting";
import Message from "./Message";
import ProfileLinkOrSignup from "./ProfileLinkOrSignup";

type TProps = {
  currentUser: User | null;
};

const FirstView: React.FC<TProps> = ({ currentUser }) => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      bgcolor={"#016fe5"}
      py={6}
    >
      <Greeting currentUser={currentUser} />
      <Message highlightTitle={"大学を休む時"} />
      <ProfileLinkOrSignup
        currentUser={currentUser}
        profileLinkContent={"プロフィール編集はこちらから"}
        signupModalContent={"新規登録/ログインでより速くメールを作成しよう"}
      />
    </Box>
  );
};

export default FirstView;
