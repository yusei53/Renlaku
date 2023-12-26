import { Box, Typography } from "@mui/material";
import getCurrentUser from "./actions/getCurrentUser";

export const Home = async () => {
  const currentUser = await getCurrentUser();
  return (
    <Box>
      {currentUser ? (
        <Typography>認証中</Typography>
      ) : (
        <Typography>未認証</Typography>
      )}
    </Box>
  );
};

export default Home;
