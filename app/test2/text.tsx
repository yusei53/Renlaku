import { Box } from "@mui/material";
import { UserDataType } from "../types";

type InputComponentProps = {
  userData: UserDataType;
};

const TextComponent: React.FC<InputComponentProps> = ({ userData }) => (
  <Box>
    <Box>{userData.name}</Box>
    <Box>{userData.university}</Box>
  </Box>
);

export default TextComponent;
