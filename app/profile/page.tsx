import { Box } from "@mui/material/index";
import getCurrentUser from "../actions/getCurrentUser";
import Profile from "./profile";

export const Test = async () => {
  const currentUser = await getCurrentUser();

  return (
    <Box>
      <Profile currentUser={currentUser} />
    </Box>
  );
};

export default Test;
