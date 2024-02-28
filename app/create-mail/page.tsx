import { Metadata } from "next";
import CreateMailContainer from "../_components/create-mail/create-mail-container";
import getCurrentUser from "../_feature/actions/getCurrentUser";

export const metadata: Metadata = {
  title: "メール作成",
};

const CreateMailPage = async () => {
  const currentUser = await getCurrentUser();
  return <CreateMailContainer currentUser={currentUser} />;
};
export default CreateMailPage;
