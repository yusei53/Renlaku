import { Box } from "@mui/material/index";
import getCurrentUser from "../actions/getCurrentUser";
import FirstView from "./FirstView";
import UniversityMailContainer from "./UniversityMailContainer";

const Page = async () => {
  const currentUser = await getCurrentUser();
  return (
    <Box>
      <FirstView currentUser={currentUser} />
      <UniversityMailContainer currentUser={currentUser} />
    </Box>
  );
};

export default Page;
