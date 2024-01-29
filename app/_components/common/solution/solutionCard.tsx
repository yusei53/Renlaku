import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box, styled } from "@mui/material";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";

type TProps = {
  title: string;
  firstContent: string;
  secondContent: string;
  smallScreen?: boolean;
};

const SolutionCard: React.FC<TProps> = ({
  title,
  firstContent,
  secondContent,
  smallScreen = true,
}) => (
  <>
    {smallScreen && (
      <Box textAlign={"center"}>
        <KeyboardDoubleArrowDownIcon
          sx={{
            color: "#006ee3",
            fontSize: 50,
          }}
        />
      </Box>
    )}
    <Card
      sx={{
        width: "100%",
        height: "auto",
        borderRadius: 3,
        border: "solid 1px #006ee3",
      }}
    >
      <Box textAlign={"center"} bgcolor={"#006ee3"}>
        <Typography
          component={"h4"}
          fontSize={22}
          p={"10px 5px"}
          fontWeight={"bold"}
          color={"#FEDD49"}
        >
          {title}
        </Typography>
      </Box>
      <CardContent>
        <StyledContent>{firstContent}</StyledContent>
        <StyledContent>{secondContent}</StyledContent>
      </CardContent>
    </Card>
  </>
);

const StyledContent = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  fontSize: 18,
  fontWeight: "bold",
  letterSpacing: 1.5,
  padding: "15px",
  [theme.breakpoints.down("md")]: {},
}));

export default SolutionCard;
