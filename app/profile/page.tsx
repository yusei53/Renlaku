import getCurrentUser from "../actions/getCurrentUser";
import Profile from "./profile";

export const Test = async () => {
  const currentUser = await getCurrentUser();

  return (
    <>
      <Profile currentUser={currentUser} />
    </>
  );
};

export default Test;
