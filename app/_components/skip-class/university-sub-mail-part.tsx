import { Box } from "@mui/material";
import { SkipClassUserType } from "../../_feature/types/types";
import { useRef } from "react";
import CopyButton from "../common/copy-button/copy-button";
import UniversitySubMailText from "./university-sub-mail-text";

type TProps = {
  userData: SkipClassUserType;
};

const UniversitySubMailPart: React.FC<TProps> = ({ userData }) => {
  const textRef = useRef<HTMLDivElement>(null);

  return (
    <Box mt={2} bgcolor={"#D7EEFF"} borderRadius={1} position={"relative"}>
      <CopyButton textRef={textRef} />
      <UniversitySubMailText
        ref={textRef}
        date={userData.date || "{ 日付 }"}
        time={userData.time || "{ 何限 }"}
        lesson={userData.lesson || "{ 講義名 }"}
      />
    </Box>
  );
};

export default UniversitySubMailPart;
