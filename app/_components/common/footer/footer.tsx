import Link from "@mui/material/Link";
import { Box, Typography } from "@mui/material";

export const Footer = () => {
  return (
    <Box component="footer" bgcolor={"#F7F7F7"} py={5} pl={8}>
      <Box display={"flex"} flexDirection={"column"} justifyContent={"center"}>
        <Typography color="text.primary" fontSize={20} mb={1}>
          Renlaku
        </Typography>
        <Box py={1}>
          <Link href="/" color="text.secondary" underline="hover">
            Renlakuとは
          </Link>
        </Box>
        <Box>
          <Link
            href="https://twitter.com/yuseidayo53"
            color="text.secondary"
            underline="hover"
          >
            開発者
          </Link>
        </Box>
      </Box>
      <Typography color="text.secondary" textAlign={"center"} mt={4}>
        {"Copyright © Leapcode inc "}
        {new Date().getFullYear()}.
      </Typography>
    </Box>
  );
};
