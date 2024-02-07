"use client";
import {
  Box,
  Typography,
  styled,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { User } from "@prisma/client";
import Link from "next/link";
import useSignupModal from "../hooks/useSignupModal";

type TProps = {
  currentUser: User | null;
};

const FirstView: React.FC<TProps> = ({ currentUser }) => {
  const signupModal = useSignupModal();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      bgcolor={"#016fe5"}
      py={6}
    >
      {currentUser ? (
        <Typography color={"white"} fontSize={{ xs: 20, md: 24 }}>
          {currentUser.email}さんこんにちは！
        </Typography>
      ) : (
        <Typography color={"white"} fontSize={27}>
          Renlakuへようこそ !
        </Typography>
      )}
      {isSmallScreen ? (
        <Typography
          color={"white"}
          fontSize={{ xs: 20, md: 24 }}
          py={2}
          textAlign={"center"}
        >
          <Highlight>Renlaku</Highlight>
          を使って
          <HighlightCategory>大学を休む時</HighlightCategory>
          の<br />
          メール文を作成しよう！
        </Typography>
      ) : (
        <Typography color={"white"} fontSize={27} py={2}>
          <Highlight>Renlaku</Highlight>
          を使って
          <HighlightCategory>大学を休む時</HighlightCategory>の
          メール文を作成しよう！
        </Typography>
      )}
      {currentUser ? (
        <Link href={"/profile"}>
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
      ) : (
        <Typography
          color={"white"}
          sx={{
            textDecoration: "underline",
            "&:hover": {
              color: "#FEDD49",
              cursor: "pointer",
            },
          }}
          onClick={() => {
            signupModal.onOpen();
          }}
        >
          新規登録/ログインでより速くメール文を作成
        </Typography>
      )}
    </Box>
  );
};

const Highlight = styled("span")(({ theme }) => ({
  color: "#FEDD49",
  fontWeight: "bold",
  fontSize: 30,
  [theme.breakpoints.down("sm")]: {
    fontSize: 25,
  },
}));

const HighlightCategory = styled("span")(({ theme }) => ({
  fontWeight: "bold",
  fontSize: 30,
  [theme.breakpoints.down("sm")]: {
    fontSize: 24,
  },
}));

export default FirstView;
