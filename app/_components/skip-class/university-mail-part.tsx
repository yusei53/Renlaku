import { Box } from "@mui/material";
import { SkipClassUserType } from "../../_feature/types/types";
import UniversityMailText from "./university-mail-text";
import { useRef } from "react";
import CopyButton from "../common/copy-button/copy-button";

type TProps = {
  userData: SkipClassUserType;
};

const UniversityMailPart: React.FC<TProps> = ({ userData }) => {
  const textRef = useRef<HTMLDivElement>(null);

  return (
    <Box mt={1} bgcolor={"#D7EEFF"} borderRadius={1} position={"relative"}>
      <CopyButton textRef={textRef} />
      <UniversityMailText
        ref={textRef}
        teacher={userData.teacher || "{ 教授の名前 }"}
        university={userData.university || "{ 大学/学部/学科 }"}
        name={userData.name || "{ 氏名 }"}
        grade={userData.grade || "{ 学年 }"}
        reasonText={userData.reasonText || "{ ここに欠席理由が挿入されます }"}
        date={userData.date || "{ 日付 }"}
        time={userData.time || "{ 何限目 }"}
        lesson={userData.lesson || "{ 講義名 }"}
        universityNumber={userData.universityNumber || "{ 学籍番号 }"}
        universityEmail={userData.universityEmail || "{ メールアドレス }"}
        phoneNumber={userData.phoneNumber || "{ 電話番号 }"}
      />
    </Box>
  );
};

export default UniversityMailPart;
