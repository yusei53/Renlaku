import { Typography } from "@mui/material";
import { User } from "@prisma/client";

type TProps = {
  currentUser: User | null;
};

const Greeting: React.FC<TProps> = ({ currentUser }) => {
  return (
    <>
      {currentUser ? (
        <Typography color={"white"} fontSize={{ xs: 20, md: 24 }}>
          {currentUser.email}さんこんにちは！
        </Typography>
      ) : (
        <Typography color={"white"} fontSize={27}>
          Renlakuへようこそ !
        </Typography>
      )}
    </>
  );
};

export default Greeting;
