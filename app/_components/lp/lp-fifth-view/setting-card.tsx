import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  styled,
  Box,
} from "@mui/material";

type TProps = {
  number: string;
  content: string;
};

const SettingCard: React.FC<TProps> = ({ number, content }) => {
  return (
    <Card
      sx={{
        width: "auto",
        height: "100%",
        borderRadius: 3,
        border: "solid 4px #006EE3",
      }}
    >
      <CardMedia component="img" image="/test.png" alt="card image" />
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <NumberCircle>
          <Typography fontSize={27}>{number}</Typography>
        </NumberCircle>
        <Typography fontSize={18} fontWeight={"bold"} pt={1}>
          {content}
        </Typography>
      </CardContent>
    </Card>
  );
};

const NumberCircle = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: 45,
  height: 45,
  borderRadius: "50%",
  backgroundColor: "#006EE3",
  color: "white",
  fontWeight: "bold",
  border: "solid 2px white",
  marginBottom: 10,
  marginTop: "-35px",
});

export default SettingCard;
