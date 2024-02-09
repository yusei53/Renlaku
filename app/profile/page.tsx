import { Box } from "@mui/material/index";
import getCurrentUser from "../_feature/actions/getCurrentUser";
import ProfileContainer from "../_components/profile/profile-container";

export const ProfilePage = async () => {
  const currentUser = await getCurrentUser();

  return (
    <Box>
      <ProfileContainer currentUser={currentUser} />
    </Box>
  );
};

export default ProfilePage;
