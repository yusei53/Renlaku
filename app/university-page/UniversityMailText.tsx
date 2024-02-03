import { Typography } from "@mui/material";

type TProps = {
  teacher: string;
  university: string;
  grade: string;
  name: string;
  reasonText: string;
  date: string;
  time: string;
  lesson: string;
  id: string;
  mail: string;
  number: string;
};

const UniversityMailText: React.FC<TProps> = ({
  teacher,
  university,
  grade,
  name,
  reasonText,
  date,
  time,
  lesson,
  id,
  mail,
  number,
}) => {
  return (
    <Typography p={{ xs: 4, sm: 6 }} fontSize={{ xs: "15px", sm: "16px" }}>
      {teacher}先生 <br />
      お忙しいところ失礼致します。{university} {grade}年の{name}です。 <br />
      <br />
      {reasonText}
      <br />
      申し訳ありませんが、{date} {time}限の{lesson}
      の講義は欠席させてください。
      <br />
      また、今回の課題がございましたら教えていただけると幸いです。
      <br />
      お手数おかけしますが、どうぞ宜しくお願い致します。
      <br />
      <br />
      -------------------------------------------
      <br />
      {name}
      <br />
      {university} {grade}年
      <br />
      学籍番号 : {id}
      <br />
      メールアドレス : {mail}
      <br />
      電話番号 : {number}
      <br />
      -------------------------------------------
    </Typography>
  );
};

export default UniversityMailText;
