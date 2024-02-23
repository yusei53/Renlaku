import { Typography } from "@mui/material";
import { User } from "@prisma/client";

type TProps = {
  currentUser: User | null;
};

const GreetingMessage: React.FC<TProps> = ({ currentUser }) => {
  return (
    <>
      {currentUser ? (
        <Typography color={"white"} fontSize={{ xs: 20, md: 27 }}>
          {currentUser.userName ? (
            <>{currentUser.userName}さんこんにちは！</>
          ) : currentUser.name ? (
            <>{currentUser.name}さんこんにちは！</>
          ) : (
            <>{currentUser.email}さんこんにちは！</>
          )}
        </Typography>
      ) : (
        <Typography color={"white"} fontSize={{ xs: 20, md: 27 }}>
          Renlakuへようこそ !
        </Typography>
      )}
    </>
  );
};

export default GreetingMessage;
