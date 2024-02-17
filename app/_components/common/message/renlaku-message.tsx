import { Typography, styled, useMediaQuery, useTheme } from "@mui/material";

const RenlakuMessage = (props: { highlightTitle: string }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      {isSmallScreen ? (
        <Typography
          color={"white"}
          fontSize={{ xs: 20, md: 24 }}
          py={2}
          textAlign={"center"}
        >
          <Highlight>Renlaku</Highlight>で
          <HighlightTitle>{props.highlightTitle}</HighlightTitle>
          <br />
          のメール文を作成しよう！
        </Typography>
      ) : (
        <Typography color={"white"} fontSize={27} py={2}>
          <Highlight>Renlaku</Highlight>で
          <HighlightTitle>{props.highlightTitle}</HighlightTitle>
          のメール文を作成しよう！
        </Typography>
      )}
    </>
  );
};

const Highlight = styled("span")(({ theme }) => ({
  color: "#FEDD49",
  fontWeight: "bold",
  fontSize: 30,
  [theme.breakpoints.down("sm")]: {
    fontSize: 25,
  },
}));

const HighlightTitle = styled("span")(({ theme }) => ({
  fontWeight: "bold",
  fontSize: 30,
  [theme.breakpoints.down("sm")]: {
    fontSize: 24,
  },
}));

export default RenlakuMessage;
