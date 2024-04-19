import { Metadata } from "next";
import CreateMailContainer from "../_components/create-mail/create-mail-container";
import getCurrentUser from "../_feature/actions/getCurrentUser";
import { Suspense } from "react";
import Loading from "../loading";

export const metadata: Metadata = {
  title: "メール作成",
};

const CreateMailPage = async () => {
  const currentUser = await getCurrentUser();
  return (
    <Suspense fallback={<Loading />}>
      <CreateMailContainer currentUser={currentUser} />
    </Suspense>
  );
};
export default CreateMailPage;
