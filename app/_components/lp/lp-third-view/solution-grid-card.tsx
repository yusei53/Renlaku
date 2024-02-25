import { Grid, useMediaQuery, useTheme } from "@mui/material";
import SolutionCard from "./solution-card";

const SolutionGridCard = () => {
  const theme = useTheme();
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Grid container spacing={2} p={4}>
      <Grid item xs={12} md={4}>
        <SolutionCard
          title="メールを高速で作成"
          firstContent="必要な項目のみ入力で"
          secondContent="文を簡単に作成"
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <SolutionCard
          title="誰でも簡単登録"
          firstContent="プロフィール登録が"
          secondContent="誰でも1分で完了"
          smallScreen={isMediumScreen ? false : true}
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <SolutionCard
          title="使い回し可能"
          firstContent="プロフィール登録をして"
          secondContent="都度コピーするだけ"
          smallScreen={isMediumScreen ? false : true}
        />
      </Grid>
    </Grid>
  );
};

export default SolutionGridCard;
