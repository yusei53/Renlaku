import getCurrentUser from "../_feature/actions/getCurrentUser";
import ProfileContainer from "../_components/profile/profile-container";

export const ProfilePage = async () => {
  const currentUser = await getCurrentUser();

  return <ProfileContainer currentUser={currentUser} />;
};

export default ProfilePage;
