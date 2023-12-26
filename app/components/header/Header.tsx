"use client";

import * as React from "react";
import { Box, AppBar, Toolbar, Typography, Button } from "@mui/material";
import Link from "next/link";

const Header = () => {
  return (
    <Box component={"header"}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Renlaku
          </Typography>
          <Link href={"/signup"}>ログイン</Link>
          <Button color="inherit">新規登録</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
