import { forwardRef } from "react";
import { Typography } from "@mui/material";
import { SkipClassUserType } from "../../_feature/types/types";

const UniversityMailText = forwardRef<HTMLDivElement, SkipClassUserType>(
  (
    {
      teacher,
      university,
      grade,
      name,
      reasonText,
      date,
      time,
      lesson,
      universityNumber,
      universityEmail,
      phoneNumber,
    },
    ref
  ) => {
    return (
      <Typography
        ref={ref}
        py={6}
        px={{ xs: 3, sm: 5 }}
        fontSize={{ xs: "15px", sm: "16px" }}
      >
        {teacher}先生 <br />
        お忙しいところ失礼致します。{university} {grade}年の{name}です。 <br />
        <br />
        {reasonText}
        <br />
        申し訳ありませんが、{date} {time}限の{lesson}
        の講義は欠席させてください。
        また、今回の課題がございましたら教えていただけると幸いです。
        <br />
        <br />
        お手数おかけしますが、どうぞ宜しくお願いいたします。
        <br />
        <br />
        --------------------------------------------------------
        <br />
        {name}
        <br />
        {university} {grade}年
        <br />
        学籍番号 : {universityNumber}
        <br />
        メールアドレス : {universityEmail}
        <br />
        電話番号 : {phoneNumber}
        <br />
        --------------------------------------------------------
      </Typography>
    );
  }
);

UniversityMailText.displayName = "UniversityMailText";

export default UniversityMailText;
