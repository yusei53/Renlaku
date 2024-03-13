"use client";
import { Typography, styled } from "@mui/material";
import ServiceCard from "./service-card";

export const ServiceContainer = () => {
  return (
    <Container>
      <Typography
        mt={2}
        fontSize={{ xs: 24, sm: 30 }}
        fontWeight={"bold"}
        component={"h2"}
        letterSpacing={2}
        mb={5}
      >
        Renlakuの特徴
      </Typography>
      <ServiceCard
        number={"01"}
        firstTitle={"メール作成"}
        secondTitle={"たった30秒で完結"}
        content={
          "Renlakuは、メールを作成する時間を大幅に短縮するアプリです。煩雑な作業を解消し、あなたの大切な時間を節約します。また、一度ログインしてプロフィールを設定すれば、次回からは迅速にメールを作成できます。入力部分は特定箇所のみ。時間を大切に、コピー＆ペーストで手間を省きます。"
        }
        image={"/student2.png"}
        alt={"メール作成。たった30秒で完結"}
      />
      <ServiceCard
        number={"02"}
        firstTitle={"豊富な"}
        secondTitle={"テンプレート"}
        content={
          "大学生が遭遇する様々なシチュエーションに対応するメールテンプレートを提供しています。授業やアルバイトの欠席連絡、内定の取消しをはじめ、大学生活に必要不可欠なテンプレートを用意しています。学生のニーズは時代と共に変化します。そのため、ユーザーからのリアルタイムフィードバックに基づき、テンプレートのラインナップを継続的に更新し、柔軟に対応していきます。"
        }
        image={"/mail.png"}
        alt={"豊富なテンプレート"}
      />
      <ServiceCard
        number={"03"}
        firstTitle={"使いやすさに特化"}
        secondTitle={"らくでストレスフリー"}
        content={
          "忙しい日々の中でもRenlakuでメール作成の時間を削減し、効率的な学生生活をサポート。大学生のニーズに特化し、文書作成の手間を減らしながら教授や人事に悪印象を与えないメールを作成します。ブックマーク機能でお気に入りのテンプレートをすぐに再利用。忙しいあなたの時間をもっと有効にしましょう。"
        }
        image={"/student.png"}
        border={false}
        alt={"使いやすさに特化。らくでストレスフリー"}
      />
    </Container>
  );
};

const Container = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "4% 20%",
  paddingBottom: "5%",
  backgroundColor: "#f7f7f7",
  [theme.breakpoints.down("md")]: {
    padding: "4% 10%",
  },
}));
