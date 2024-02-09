"use client";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

import { AppBar, Box } from "@mui/material";

export const Footer = () => {
  return (
    <Box position="relative">
      <AppBar
        component="footer"
        sx={{
          backgroundColor: "#F7F7F7",
          p: 6,
          position: "absolute",
        }}
      >
        <Container maxWidth="lg">
          <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
          >
            <Typography color="text.primary" gutterBottom>
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
          <Box mt={5}>
            <Typography color="text.secondary" align="center">
              {"Copyright © Leapcode inc "}
              {new Date().getFullYear()}.
            </Typography>
          </Box>
        </Container>
      </AppBar>
    </Box>
  );
};
