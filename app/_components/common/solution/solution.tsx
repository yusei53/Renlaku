"use client";
import {
  Box,
  Grid,
  Typography,
  styled,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import SolutionCard from "./solutionCard";
import LpButton from "../menu/LpButton";

export const Solution = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Container>
      <Box color={"white"} paddingY={3}>
        <Box mb={2}>
          <Typography
            fontSize={{ xs: 24, sm: 30 }}
            fontWeight="bold"
            letterSpacing={1.5}
            component={"h2"}
          >
            {isSmallScreen ? (
              <>
                Renlakuなら
                <br />
                <Highlight>学生の悩み</Highlight>
                を解決します！
              </>
            ) : (
              <>
                Renlakuなら
                <Highlight>学生の悩み</Highlight>
                を解決します！
              </>
            )}
          </Typography>
        </Box>
      </Box>
      <Box
        bgcolor={"white"}
        borderRadius={5}
        width={{ xs: "100%", sm: "90%" }}
        height={"auto"}
        display={"flex"}
        flexDirection={"column"}
      >
        <Box textAlign={"center"}>
          <Typography
            display={"inline-block"}
            component={"h3"}
            fontSize={{ xs: 22, sm: 27 }}
            fontWeight={"bold"}
            pt={3}
            letterSpacing={3.5}
            fontFamily={'"Helvetica Neue", Helvetica, Arial, sans-serif'}
            paddingX={0.5}
            lineHeight={1.2}
          >
            {isSmallScreen ? (
              <>
                Renlakuに登録で
                <Border />
                <br />
                圧倒的時間短縮
                <Border />
              </>
            ) : (
              <>
                Renlakuに登録で圧倒的時間短縮
                <Border />
              </>
            )}
          </Typography>
        </Box>
        <Grid container spacing={1} padding={"2% 4%"}>
          <Grid item xs={12} sm={12} md={12} lg={4} xl={4} paddingY={2}>
            <SolutionCard
              title="メールを高速で作成"
              description={
                <span>
                  必要な項目のみ入力で
                  <br />
                  文が自動生成
                </span>
              }
              smallScreen
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={4} xl={4} paddingY={2}>
            <SolutionCard
              title="使い回し可能"
              description={
                <span>
                  プロフィール項目登録で
                  <br />
                  都度コピーするだけ
                </span>
              }
              smallScreen={isSmallScreen ? false : true}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={4} xl={4} paddingY={2}>
            <SolutionCard
              title="バリエーションが豊富"
              description={
                <span>
                  学生がよく送るメールの
                  <br />
                  テンプレートを用意
                </span>
              }
              smallScreen={isSmallScreen ? false : true}
            />
          </Grid>
        </Grid>
        <LpButton
          label="新規登録 / ログイン"
          onClick={() => {}}
          hover
          props={{
            fontSize: { xs: "16px", sm: "18px", lg: "20px" },
            p: { xs: "12px", sm: "14px", lg: "15px" },
            fontWeight: "bold",
            borderRadius: 2,
            marginX: { xs: 5, sm: 20, md: 30, lg: 40 },
            mb: 5,
          }}
        />
      </Box>
    </Container>
  );
};

const Container = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "3% 5%",
  paddingBottom: "5%",
  backgroundColor: "#006EE3",
  [theme.breakpoints.down("md")]: {
    paddingBottom: "10%",
  },
}));

const Highlight = styled("span")({
  color: "#FEDD49",
});

const Border = styled("div")({
  borderBottom: "solid 9px #006EE3",
});
