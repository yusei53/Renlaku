import { OnboardingContainer } from "./_components/lp/lp-first-view";
import { QuestionContainer } from "./_components/lp/lp-second-view";
import { SolutionContainer } from "./_components/lp/lp-third-view";
import { ServiceContainer } from "./_components/lp/lp-fourth-view";
import { SettingContainer } from "./_components/lp/lp-fifth-view";
import React from "react";

const Home = () => {
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
