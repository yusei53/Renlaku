"use client";
import {
  Box,
  Typography,
  styled,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import LpButton from "../menu/LpButton";
import SolutionGridCard from "./solutionGridCard";

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
            m={4}
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
        width={{ xs: "100%", sm: "85%" }}
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
            pt={5}
            letterSpacing={3.5}
            fontFamily={'"Helvetica Neue", Helvetica, Arial, sans-serif'}
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
        <SolutionGridCard />
        <LpButton
          label="新規登録 / ログイン"
          onClick={() => {}}
          hover
          props={{
            fontSize: { xs: "16px", sm: "18px" },
            p: { xs: "12px", sm: "14px", lg: "15px" },
            fontWeight: "bold",
            borderRadius: 2,
            mx: { xs: 5, sm: 20, md: 30, lg: "350px" },

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
  p: "3% 5%",
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
