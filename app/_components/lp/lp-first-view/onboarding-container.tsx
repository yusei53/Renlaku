"use client";
import {
  Box,
  Typography,
  styled,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import LpButton from "../../common/button/lp-button";
import { useRouter } from "next/navigation";
import useSignupModal from "@/app/_feature/hooks/useSignupModal";

export const OnboardingContainer = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const router = useRouter();
  const signupModal = useSignupModal();
  return (
    <Container>
      <Box mb={4}>
        <Typography
          mt={3}
          fontSize={{ xs: 16, sm: 19, lg: 21 }}
          fontWeight={"bold"}
          lineHeight={1.5}
          color={"white"}
        >
          {isSmallScreen ? (
            <>
              時間を節約したい、
              <br />
              忙しい学生のためのメールアシスタント
            </>
          ) : (
            "時間を節約したい、忙しい学生のためのメールアシスタント"
          )}
        </Typography>
        <Typography mt={3} {...styledTitle}>
          メール作成が
        </Typography>
        <Typography mb={7} {...styledTitle}>
          これまでになく簡単に
        </Typography>
        <Typography
          component={"h2"}
          fontSize={{ xs: 16, sm: 22, lg: 25 }}
          fontWeight={"bold"}
          p={1}
          lineHeight={1.5}
          color={"white"}
          borderTop={`2px solid white`}
          borderBottom={`2px solid white`}
        >
          直感的操作でメールを素早く作成できます
        </Typography>
        <Box pt={3}>
          <LpButton
            label="まずは使ってみる"
            onClick={() => router.push("/university-page")}
            hover
            sx={{ ...styledButton }}
          />
          <LpButton
            label="新規登録 / ログイン"
            onClick={() => signupModal.onOpen()}
            hover
            sx={{ ...styledButton }}
          />
        </Box>
      </Box>
      <ResponsiveImage src="/pc.png" alt={"test"} height={450} width={490} />
    </Container>
  );
};

const styledTitle = {
  components: "h1",
  fontSize: { xs: 35, sm: 45, lg: 50 },
  fontWeight: "bold",
  lineHeight: 1.5,
  color: "white",
  fontFamily: "monospace",
};

const styledButton = {
  fontSize: { xs: "14px", sm: "18px", lg: "20px" },
  p: { xs: "12px 15px", sm: "14px 28px", lg: "15px 30px" },
  fontWeight: "bold",
  borderRadius: 2,
};

const Container = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "3% 5%",
  backgroundColor: "#006EE3",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
}));

const ResponsiveImage = styled(Image)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    width: "90%",
    height: "auto",
    marginTop: "-4%",
  },
}));
