import useLoginModal from "@/app/_feature/hooks/useLoginModal";
import { Box, Typography, Button } from "@mui/material";

const NotFoundProfile = () => {
  const loginModal = useLoginModal();

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      height={"45vh"}
      m={10}
    >
      <Typography
        fontSize={"1.6rem"}
        component="h2"
        fontWeight={"bold"}
        whiteSpace={"nowrap"}
        letterSpacing={0.7}
      >
        アカウントが見つかりません
      </Typography>
      <Typography
        fontSize={"1.6rem"}
        component="h2"
        fontWeight={"bold"}
        whiteSpace={"nowrap"}
        letterSpacing={0.7}
      >
        ログインしてください
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => loginModal.onOpen()}
        sx={{
          m: 2,
        }}
      >
        新規登録/ログイン
      </Button>
    </Box>
  );
};

export default NotFoundProfile;
