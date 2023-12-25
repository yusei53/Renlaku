import { Container, Box, Typography, Button } from "@mui/material";

const NotFound = () => {
  return (
    <Container maxWidth="sm">
      <Box display="flex" flexDirection="column" alignItems="center">
        <Typography
          fontSize={"2.5rem"}
          component="h2"
          gutterBottom
          fontWeight={"bold"}
          whiteSpace={"nowrap"}
        >
          404 Not Found
        </Typography>
        <Typography
          fontSize={"1.2rem"}
          gutterBottom
          fontWeight={"bold"}
          whiteSpace={"nowrap"}
        >
          お探しのページは見つかりませんでした。
        </Typography>
        <Button variant="contained" color="primary" href="/">
          ホームに戻る
        </Button>
      </Box>
    </Container>
  );
};

export default NotFound;
