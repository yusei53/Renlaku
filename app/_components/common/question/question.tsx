"use client";
import { Box, Typography, styled } from "@mui/material";
import Image from "next/image";
import LpButton from "../menu/LpButton";
import Check from "./check";
import QuestionBar from "./questionBar";

export const Question = () => {
  return (
    <Container>
      <Box display="flex" alignItems="center" flexDirection={"column"}>
        <Typography
          mt={2}
          fontSize={30}
          fontWeight={"bold"}
          component={"h2"}
          letterSpacing={2}
          mb={5}
        >
          学生のよくある悩み
        </Typography>
        <QuestionBar label="教授や人事に送るメールの文が正しいかわからない" />
        <QuestionBar label="毎回メールの正しい文を考えるのが面倒くさい" />
        <QuestionBar label="メールを作成するのに思った以上に時間がかかる" />
      </Box>
    </Container>
  );
};

const Container = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "3% 7%",
  backgroundColor: "#f7f7f7",
  [theme.breakpoints.down("md")]: {},
}));
