"use client";
import { Box, Typography, styled } from "@mui/material";
import Image from "next/image";
import LpButton from "../menu/LpButton";

export const Onboarding = () => {
  return (
    <Container>
      <Box mb={5}>
        <Typography
          mt={2}
          fontSize={21}
          fontWeight={"bold"}
          lineHeight={1.5}
          color={"white"}
        >
          時間を節約したい、忙しい学生のためのメールアシスタント
        </Typography>
        <Typography
          component={"h1"}
          fontSize={54}
          mt={5}
          fontWeight={"bold"}
          lineHeight={1.5}
          color={"white"}
          fontFamily={"monospace"}
        >
          メール作成が
        </Typography>
        <Typography
          component={"h1"}
          fontSize={50}
          fontWeight={"bold"}
          lineHeight={1.5}
          color={"white"}
          fontFamily={"monospace"}
          mb={8}
        >
          これまでになく簡単に
        </Typography>
        <Line>
          <Typography
            component={"h2"}
            fontSize={25}
            fontWeight={"bold"}
            p={1}
            lineHeight={1.5}
            color={"white"}
          >
            直感的操作でメールを素早く作成できます
          </Typography>
        </Line>
        <Box pt={5}>
          <LpButton
            label="まずは使ってみる"
            onClick={() => {}}
            hover
            props={{
              mr: "25px",
              fontSize: "22px",
              p: "15px 30px",
              fontWeight: "bold",
              borderRadius: 2,
            }}
          />
          <LpButton
            label="新規登録 / ログイン"
            onClick={() => {}}
            hover
            props={{
              fontSize: "22px",
              p: "15px 30px",
              fontWeight: "bold",
              borderRadius: 2,
            }}
          />
        </Box>
      </Box>
      <Image src="/pc.png" alt={"test"} height={450} width={490} />
    </Container>
  );
};

const Container = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "3% 7%",
  backgroundColor: "#006EE3",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
}));

const Line = styled(Box)(({ theme }) => ({
  borderTop: `2px solid white`,
  borderBottom: `2px solid white`,
}));
