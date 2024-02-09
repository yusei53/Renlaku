import { Box, Divider, Typography } from "@mui/material";

const CustomDivider = (props: { content: string }) => {
  return (
    <Box display={"flex"} alignItems={"center"} mt={5} mb={2}>
      <Box flexGrow={1}>
        <Divider />
      </Box>
      <Box mx={1}>
        <Typography color="text.secondary" fontSize={13}>
          {props.content}
        </Typography>
      </Box>
      <Box flexGrow={1}>
        <Divider />
      </Box>
    </Box>
  );
};

export default CustomDivider;
