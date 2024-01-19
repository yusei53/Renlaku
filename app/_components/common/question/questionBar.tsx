import { Box, Typography } from "@mui/material";
import Check from "./check";

type TProps = {
  label: string;
};

const QuestionBar: React.FC<TProps> = ({ label }) => {
  return (
    <Box
      width={600}
      paddingY={3}
      paddingLeft={28}
      display={"flex"}
      alignItems={"center"}
      bgcolor={"white"}
      boxShadow="0px 4px 10px rgba(0, 0, 0, 0.1)"
      marginY={2}
      position="relative"
    >
      <Box position="absolute" left={160}>
        <Check />
      </Box>
      <Typography fontSize={18}>{label}</Typography>
    </Box>
  );
};

export default QuestionBar;
