"use client";
import { Box, Typography, styled } from "@mui/material";
import QuestionBar from "./questionBar";

export const Question = () => {
  return (
    <Container>
      <Box display="flex" alignItems="center" flexDirection={"column"}>
        <Typography
          mt={2}
          fontSize={{ xs: 22, sm: 30 }}
          fontWeight={"bold"}
          component={"h2"}
          letterSpacing={2}
          mb={5}
        >
          学生のよくある悩み
        </Typography>
        <QuestionBar label="教授や人事に送るメールの文が正しいかわからない" />
        <QuestionBar
          label="毎回メールの正しい文を考えるのが面倒くさい"
          ImageSrc="/man.png"
          AltText="男性が悩む画像"
        />
        <QuestionBar label="メールを作成するのに思った以上に時間がかかる" />
      </Box>
    </Container>
  );
};

const Container = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "4% 7%",
  paddingBottom: "5%",
  backgroundColor: "#f7f7f7",
  [theme.breakpoints.down("md")]: {
    padding: "10% 7%",
    paddingBottom: "22%",
  },
  [theme.breakpoints.down("sm")]: {
    paddingBottom: "46%",
  },
}));
