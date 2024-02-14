import { Box } from "@mui/material";
import { CancelJobOfferUserType } from "../../_feature/types/types";
import CancelOfferMailText from "./cancel-offer-mail-text";

type TPops = {
  userData: CancelJobOfferUserType;
};

const CancelOfferMailPart: React.FC<TPops> = ({ userData }) => (
  <Box
    display={"flex"}
    alignItems={"center"}
    justifyContent={"center"}
    mx={2}
    mt={1}
    bgcolor={"#D7EEFF"}
  >
    <CancelOfferMailText
      company={userData.company || "{ 会社名(株式会社〇〇) }"}
      companyUserName={userData.companyUserName || "{ 担当者名 }"}
      university={userData.university || "{ 大学/学部/学科 }"}
      name={userData.name || "{ 氏名 }"}
      grade={userData.grade || "{ 学年 }"}
      reasonText={userData.reasonText || "{ ここに理由が挿入されます }"}
      privateEmail={userData.privateEmail || "{ メールアドレス }"}
      phoneNumber={userData.phoneNumber || "{ 電話番号 }"}
    />
  </Box>
);

export default CancelOfferMailPart;
