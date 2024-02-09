import { Grid, useMediaQuery, useTheme } from "@mui/material";
import SolutionCard from "./solution-card";

const SolutionGridCard = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid container spacing={1} padding={"2% 4%"}>
      <Grid item xs={12} sm={12} md={12} lg={4} xl={4} py={2}>
        <SolutionCard
          title="メールを高速で作成"
          firstContent="必要な項目のみ入力で"
          secondContent="文が自動生成"
        />
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={4} xl={4} py={2}>
        <SolutionCard
          title="使い回し可能"
          firstContent="プロフィール項目登録で"
          secondContent="都度コピーするだけ"
          smallScreen={isSmallScreen ? false : true}
        />
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={4} xl={4} py={2}>
        <SolutionCard
          title="バリエーションが豊富"
          firstContent="学生がよく送るメールの"
          secondContent="テンプレートを用意"
          smallScreen={isSmallScreen ? false : true}
        />
      </Grid>
    </Grid>
  );
};

export default SolutionGridCard;
