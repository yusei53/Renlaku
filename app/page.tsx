import getCurrentUser from "./_feature/actions/getCurrentUser";
import { OnboardingContainer } from "./_components/lp/lp-first-view";
import { QuestionContainer } from "./_components/lp/lp-second-view";
import { SolutionContainer } from "./_components/lp/lp-third-view";
import { ServiceContainer } from "./_components/lp/lp-fourth-view";
import { SettingContainer } from "./_components/lp/lp-fifth-view";

const Home = async () => {
  const currentUser = await getCurrentUser();
  return (
    <>
      <OnboardingContainer />
      <QuestionContainer />
      <SolutionContainer />
      <ServiceContainer />
      <SettingContainer />
    </>
  );
};

export default Home;
