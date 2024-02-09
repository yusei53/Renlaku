import { Box } from "@mui/material/index";
import getCurrentUser from "../_feature/actions/getCurrentUser";
import UniversityMailContainer from "../_components/skip-class/university-mail-container";
import UniversityFirstView from "../_components/skip-class/university-firstview";

const SkipClassPage = async () => {
  const currentUser = await getCurrentUser();
  return (
    <Box>
      <UniversityFirstView currentUser={currentUser} />
      <UniversityMailContainer currentUser={currentUser} />
    </Box>
  );
};

export default SkipClassPage;
