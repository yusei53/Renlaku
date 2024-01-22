import { Box, Typography } from "@mui/material";
import Check from "./check";

type TProps = {
  label: string;
};

const QuestionBar: React.FC<TProps> = ({ label }) => {
  return (
    <Box
      width="100%"
      maxWidth={600}
      paddingY={3}
      paddingLeft={{ xs: 3, sm: 17, lg: 28 }}
      display={"flex"}
      alignItems={"center"}
      bgcolor={"white"}
      boxShadow="0px 4px 10px rgba(0, 0, 0, 0.1)"
      marginY={2}
      position="relative"
    >
      <Box position="absolute" left={{ xs: 23, sm: 120, md: 130, lg: 160 }}>
        <Check />
      </Box>
      <Typography
        fontSize={{ xs: 15, sm: 18 }}
        paddingX={{ xs: 4, md: 5, lg: 0 }}
      >
        {label}
      </Typography>
    </Box>
  );
};

export default QuestionBar;
