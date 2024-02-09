"use client";
import { Box } from "@mui/material";
import { User } from "@prisma/client";
import Greeting from "../common/message/greeting-message";
import Message from "../common/message/renlaku-message";
import ProfileLinkOrSignup from "../common/message/profile-link-or-signup";

type TProps = {
  currentUser: User | null;
};

const UniversityFirstView: React.FC<TProps> = ({ currentUser }) => {
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

export default UniversityFirstView;
