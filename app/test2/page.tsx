import { Box } from "@mui/material";
import getCurrentUser from "../actions/getCurrentUser";
import FirstView from "./FirstView";
import UniversityMail from "./UniversityMail";

const Page = async () => {
  const currentUser = await getCurrentUser();
  return (
    <>
      <Box>
        <FirstView currentUser={currentUser} />
        <UniversityMail currentUser={currentUser} />
      </Box>
    </>
  );
};

export default Page;
