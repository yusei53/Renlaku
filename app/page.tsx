import { Fragment } from "react";
import getCurrentUser from "./actions/getCurrentUser";
import { Onboarding } from "./_components/common/onBoarding";

const Home = async () => {
  const currentUser = await getCurrentUser();
  return (
    <Fragment>
      <Onboarding />
      {currentUser ? <div>認証中</div> : <div>未認証</div>}
    </Fragment>
  );
};

export default Home;
