"use client";

import * as React from "react";
import { Box, AppBar, Toolbar, Typography, Button } from "@mui/material";

const Header = () => {
  return (
    <Box component={"header"}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Renlaku
          </Typography>
          <Button color="inherit">ログイン</Button>
          <Button color="inherit">新規登録</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
