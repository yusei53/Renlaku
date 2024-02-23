import CreateMailContainer from "../_components/create-mail/create-mail-container";
import getCurrentUser from "../_feature/actions/getCurrentUser";

const Page = async () => {
  const currentUser = await getCurrentUser();
  return <CreateMailContainer currentUser={currentUser} />;
};
export default Page;
