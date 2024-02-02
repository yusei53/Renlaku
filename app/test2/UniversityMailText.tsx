import { Box, Typography } from "@mui/material";

type TProps = {
  teacher?: string | null;
  university?: string | null;
  grade?: string | null;
  name?: string | null;
  // reasonText?: string;
  // date?: string;
  // time?: string;
  // lesson?: string;
  // id?: string;
  // mail?: string;
  // number?: string;
};

const UniversityMailText: React.FC<TProps> = ({
  teacher,
  university,
  grade,
  name,
  // reasonText,
  // date,
  // time,
  // lesson,
  // id,
  // mail,
  // number,
}) => {
  return (
    <Box bgcolor={"#D7EEFF"}>
      <Typography p={"34px 24px"}>
        {teacher}先生 お忙しいところ失礼致します。 <br />
        {university} {grade}年 {name}です。
        <br />
        <br />
        {/* {reasonText} */}
        <br />
        {/* <br />
        申し訳ありませんが、{date} {time}限の{lesson} */}
        の講義は欠席させてください。
        <br />
        <br />
        また、本日の課題がございましたら教えていただけると幸いです。
        <br />
        お手数おかけしますが、どうぞ宜しくお願い致します。
        <br />
        <br />
        <br />
        <br />
        ーーーーーーーーーーーーーーーーーーーーー <br />
        <br />
        {name}
        <br />
        {/* {university} {grade}年 */}
        <br />
        {/* 学籍番号 : {id}
        <br />
        メールアドレス : {mail}
        <br />
        電話番号 : {number} */}
        <br />
        <br />
        ーーーーーーーーーーーーーーーーーーーーー
      </Typography>
    </Box>
  );
};

export default UniversityMailText;
