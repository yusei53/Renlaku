"use client";
import {
  Box,
  Typography,
  styled,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import SettingGridCard from "./settingGridCard";
import LpButton from "../menu/LpButton";

export const Setting = () => {
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
            導入の流れ
          </Typography>
        </Box>
      </Box>
      <Box
        bgcolor={"white"}
        borderRadius={5}
        width={{ xs: "90%", sm: "85%" }}
        height={"auto"}
        display={"flex"}
        flexDirection={"column"}
      >
        <Box>
          <Typography
            textAlign={"center"}
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
                <Highlight>誰でも簡単登録</Highlight>!
                <br />
                設定は<Highlight>3つ</Highlight>だけ！
              </>
            ) : (
              <>
                <Highlight>誰でも簡単登録</Highlight> ! 設定は
                <Highlight>3つ</Highlight>
                だけ！
              </>
            )}
          </Typography>
        </Box>
        <SettingGridCard />
        <LpButton
          label="新規登録 / ログイン"
          onClick={() => {}}
          hover
          props={{
            fontSize: { xs: "16px", sm: "18px" },
            p: { xs: "12px", sm: "15px" },
            fontWeight: "bold",
            borderRadius: 2,
            mx: { xs: 5, sm: 20, md: 30, lg: "350px" },
            mt: 3,
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
  color: "#006EE3",
});

const NumberCircle = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: 45,
  height: 45,
  borderRadius: "50%",
  backgroundColor: "#006EE3",
  color: "white",
  fontWeight: "bold",
  border: "solid 2px white",
  marginBottom: 10,
  marginTop: "-35px",
});
