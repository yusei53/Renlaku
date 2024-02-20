import Test from "../_components/test";
import getCurrentUser from "../_feature/actions/getCurrentUser";

const Page = async () => {
  const currentUser = await getCurrentUser();
  return <Test currentUser={currentUser} />;
};
export default Page;
