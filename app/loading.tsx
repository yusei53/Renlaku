import { Box, CircularProgress } from "@mui/material";

const Loading = () => {
  return (
    <Box
      height={"60vh"}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <CircularProgress color="primary" />
    </Box>
  );
};

export default Loading;
