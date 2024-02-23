import { Typography } from "@mui/material";
import { User } from "@prisma/client";
import Link from "next/link";
import useSignupModal from "../../../_feature/hooks/useSignupModal";

type TProps = {
  currentUser: User | null;
  profileLinkContent: string;
  signupModalContent: string;
  reachContent: string;
};
const ProfileLinkOrSignup: React.FC<TProps> = ({
  currentUser,
  profileLinkContent,
  signupModalContent,
  reachContent,
}) => {
  const signupModal = useSignupModal();

  return (
    <>
      {currentUser ? (
        <Link href={"/profile"}>
          <Typography
            color={"white"}
            sx={{
              textDecoration: "underline",
              "&:hover": {
                color: "#FEDD49",
                cursor: "pointer",
              },
            }}
          >
            {profileLinkContent}
          </Typography>
        </Link>
      ) : (
        <>
          <Typography
            color={"white"}
            sx={{
              textDecoration: "underline",
              "&:hover": {
                color: "#FEDD49",
                cursor: "pointer",
              },
            }}
            onClick={() => {
              signupModal.onOpen();
            }}
          >
            {signupModalContent}
          </Typography>
          <Link href={"/"}>
            <Typography
              color={"white"}
              p={1}
              sx={{
                textDecoration: "underline",
                "&:hover": {
                  color: "#FEDD49",
                  cursor: "pointer",
                },
              }}
            >
              {reachContent}
            </Typography>
          </Link>
        </>
      )}
    </>
  );
};

export default ProfileLinkOrSignup;
