import { Box } from "@mui/material";
import { UserDataType } from "../types";
import UniversityMailText from "./UniversityMailText";

type InputComponentProps = {
  userData: UserDataType;
};

const UniversityMailBox: React.FC<InputComponentProps> = ({ userData }) => (
  <Box
    display={"flex"}
    alignItems={"center"}
    justifyContent={"center"}
    mx={2}
    bgcolor={"#D7EEFF"}
  >
    <UniversityMailText
      teacher={userData.teacher || "{ 教授の名前 }"}
      university={userData.university || "{ 大学/学部/学科 }"}
      name={userData.name || "{ 氏名 }"}
      grade={userData.grade || "{ 学年 }"}
      reasonText={userData.reasonText || "{ ここに欠席理由が挿入されます }"}
      date={userData.date || "{ 日付 }"}
      time={userData.time || "{ 何限目 }"}
      lesson={userData.lesson || "{ 講義名 }"}
      id={userData.id || "{ 学籍番号 }"}
      mail={userData.mail || "{ メールアドレス }"}
      number={userData.number || "{ 電話番号 }"}
    />
  </Box>
);

export default UniversityMailBox;
