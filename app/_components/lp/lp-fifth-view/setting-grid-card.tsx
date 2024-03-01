import { Grid } from "@mui/material";
import SettingCard from "./setting-card";

const SettingGridCard = () => {
  return (
    <Grid container spacing={4} py={5} px={{ xs: 4, sm: 10 }}>
      <Grid item xs={12} md={4}>
        <SettingCard
          image="login.png"
          number="1"
          content="新規登録/ログイン"
          alt="新規登録/ログイン"
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <SettingCard
          image="profile.png"
          number="2"
          content="プロフィール登録"
          alt="プロフィール登録"
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <SettingCard
          image="login.png"
          number="3"
          content="ホーム画面に追加"
          alt="ホーム画面に追加"
        />
      </Grid>
    </Grid>
  );
};

export default SettingGridCard;
