"use client";
import { Box, Typography, styled } from "@mui/material";
import { User } from "@prisma/client";
import Link from "next/link";

type TProps = {
  currentUser: User | null;
};

const FirstView: React.FC<TProps> = ({ currentUser }) => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      bgcolor={"#016fe5"}
      py={6}
    >
      {currentUser ? (
        <Typography color={"white"} fontSize={24}>
          {currentUser.email}さんこんにちは！
        </Typography>
      ) : (
        <Typography color={"white"} fontSize={27}>
          Renlakuへようこそ !
        </Typography>
      )}
      <Typography color={"white"} fontSize={24} py={2}>
        <Highlight>Renlaku</Highlight>
        を使って
        <HighlightCategory>大学を休む時</HighlightCategory>
        のメール文を作成しよう！
      </Typography>
      <Link href="/login">
        <Typography
          color={"white"}
          sx={{
            textDecoration: "underline",
            "&:hover": {
              color: "#FEDD49",
              cursor: "pointer",
            },
          }}
        >
          プロフィール編集はこちらから
        </Typography>
      </Link>
    </Box>
  );
};

const Highlight = styled("span")({
  color: "#FEDD49",
  fontWeight: "bold",
  fontSize: 30,
});

const HighlightCategory = styled("span")({
  fontWeight: "bold",
  fontSize: 30,
});

export default FirstView;
