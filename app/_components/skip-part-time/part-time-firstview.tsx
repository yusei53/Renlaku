"use client";
import { Box } from "@mui/material";
import { User } from "@prisma/client";
import Greeting from "../common/message/greeting-message";
import Message from "../common/message/renlaku-message";
import ProfileLinkOrSignup from "../common/message/profile-link-or-signup";

type TProps = {
  currentUser: User | null;
};

const PartTimeFirstView: React.FC<TProps> = ({ currentUser }) => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      bgcolor={"#016fe5"}
      pt={6}
      pb={4}
    >
      <Greeting currentUser={currentUser} />
      <Message highlightTitle={"アルバイトを休むとき"} />
      <ProfileLinkOrSignup
        currentUser={currentUser}
        profileLinkContent={"プロフィール編集はこちらから"}
        signupModalContent={"新規登録/ログインでより速くメールを作成"}
        reachContent={"Renlakuとは"}
      />
    </Box>
  );
};

export default PartTimeFirstView;
