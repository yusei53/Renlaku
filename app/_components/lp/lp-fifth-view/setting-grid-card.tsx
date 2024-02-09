import { Grid } from "@mui/material";
import SettingCard from "./setting-card";

const SettingGridCard = () => {
  return (
    <Grid container px={{ xs: 1, sm: 7 }}>
      <Grid item xs={12} sm={12} md={4} lg={4} xl={4} p={4}>
        <SettingCard number="1" content="新規登録/ログイン" />
      </Grid>
      <Grid item xs={12} sm={12} md={4} lg={4} xl={4} p={4}>
        <SettingCard number="2" content="プロフィール登録" />
      </Grid>
      <Grid item xs={12} sm={12} md={4} lg={4} xl={4} p={4}>
        <SettingCard number="3" content="ホーム画面に追加" />
      </Grid>
    </Grid>
  );
};

export default SettingGridCard;
