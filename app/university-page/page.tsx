import { Box } from "@mui/material/index";
import getCurrentUser from "../_feature/actions/getCurrentUser";
import UniversityMailContainer from "../_components/university-page/university-mail-container";
import UniversityFirstView from "../_components/university-page/university-firstview";

const Page = async () => {
  const currentUser = await getCurrentUser();
  return (
    <Box>
      <UniversityFirstView currentUser={currentUser} />
      <UniversityMailContainer currentUser={currentUser} />
    </Box>
  );
};

export default Page;
