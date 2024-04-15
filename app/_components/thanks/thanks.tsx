import { Box, Typography, Button } from "@mui/material";

const Thanks = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      height={"45vh"}
      my={8}
      mx={3}
    >
      <Typography
        fontSize={{ xs: "1.3rem", sm: "1.6rem" }}
        component="h1"
        fontWeight={"bold"}
        whiteSpace={"nowrap"}
        color={"#1976D2"}
        mb={3}
      >
        お問い合わせありがとうございました！
      </Typography>
      <Typography
        fontSize={{ xs: "1rem", sm: "1.1rem" }}
        component="h2"
        gutterBottom
      >
        この度はRenlakuに関するお問い合わせをいただき、誠にありがとうございます。
      </Typography>
      <Typography
        fontSize={{ xs: "1rem", sm: "1.1rem" }}
        gutterBottom
        component="h2"
      >
        ご記入いただいた情報は無事送信されました。ご利用いただきありがとうございました。
      </Typography>
      <Box display={"flex"} flexDirection={{ xs: "column", sm: "row" }} my={3}>
        <Button variant="contained" color="primary" href="/" sx={{ m: 1 }}>
          ホームに戻る
        </Button>
        <Button
          variant="contained"
          color="primary"
          href="/create-mail?category=skip-class"
          sx={{ m: 1 }}
        >
          メール作成画面に戻る
        </Button>
      </Box>
    </Box>
  );
};

export default Thanks;
