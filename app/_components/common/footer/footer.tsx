import Link from "@mui/material/Link";
import { Box, Typography } from "@mui/material";

export const Footer = () => {
  return (
    <Box component="footer" bgcolor={"#F7F7F7"} p={6}>
      <Box display={"flex"} flexDirection={"column"} justifyContent={"center"}>
        <Typography color="text.primary" fontSize={20}>
          Renlaku
        </Typography>
        <Link href="/" color="text.secondary" underline="hover" py={1}>
          Renlakuとは
        </Link>
        <Link
          href="https://twitter.com/yuseidayo53"
          color="text.secondary"
          underline="hover"
        >
          開発者
        </Link>
      </Box>
      <Typography color="text.secondary" textAlign={"center"} mt={4}>
        {"Copyright © Leapcode inc "}
        {new Date().getFullYear()}.
      </Typography>
    </Box>
  );
};
