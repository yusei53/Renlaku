import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";

type TProps = {
  title: string;
  description: React.ReactNode;
  smallScreen: boolean;
};

const SolutionCard: React.FC<TProps> = ({
  title,
  description,
  smallScreen,
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
        <Typography
          textAlign={"center"}
          fontSize={18}
          fontWeight={"bold"}
          letterSpacing={1.5}
          p={"15px"}
        >
          {description}
        </Typography>
      </CardContent>
    </Card>
  </>
);

export default SolutionCard;
