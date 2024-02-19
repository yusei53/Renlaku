import { CancelJobOfferUserType } from "@/app/_feature/types/types";
import { Typography } from "@mui/material";
import { forwardRef } from "react";

const CancelOfferMailText = forwardRef<HTMLDivElement, CancelJobOfferUserType>(
  (
    {
      reasonText,
      company,
      companyUserName,
      university,
      grade,
      name,
      privateEmail,
      phoneNumber,
    },
    ref
  ) => {
    return (
      <Typography
        ref={ref}
        p={{ xs: 4, sm: 5 }}
        fontSize={{ xs: "15px", sm: "16px" }}
      >
        {company} 人事部 採用ご担当 {companyUserName}様
        <br />
        <br />
        お世話になっております。{university}
        {grade}年{name}です。
        <br />
        この度は、内定のご連絡をいただき、誠にありがとうございます。
        <br />
        <br />
        {reasonText}
        <br />
        選考では、書類に目を通していただいたり面接を実施していただいたりと、ご多忙な中でお時間を割いていただきながら、このような形となり申し訳ございません。
        <br />
        <br />
        本来であれば、直接お伺いしお詫びをするべきところではございますが、このようにメールでのご連絡となりましたことを、何卒ご容赦いただきたくお願い申し上げます。
        <br />
        末筆ながら、貴社の益々のご発展をお祈り申し上げます。
        <br />
        <br />
        ------------------------------------------------------
        <br />
        {name}
        <br />
        {university}
        {grade}年
        <br />
        メールアドレス : {privateEmail}
        <br />
        電話番号 : {phoneNumber}
        <br />
        ------------------------------------------------------
      </Typography>
    );
  }
);

CancelOfferMailText.displayName = "CancelOfferMailText";

export default CancelOfferMailText;
