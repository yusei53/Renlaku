import getCurrentUser from "../_feature/actions/getCurrentUser";
import ProfileContainer from "../_components/profile/profile-container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "プロフィール編集",
};

const ProfilePage = async () => {
  const currentUser = await getCurrentUser();

  return <ProfileContainer currentUser={currentUser} />;
};

export default ProfilePage;
