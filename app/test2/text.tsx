import { Box } from "@mui/material";
import { UserDataType } from "../types";
import UniversityMailText from "./UniversityMailText";

type InputComponentProps = {
  userData: UserDataType;
};

const TextComponent: React.FC<InputComponentProps> = ({ userData }) => (
  <Box>
    <UniversityMailText
      university={userData.university}
      name={userData.name}
      teacher={userData.teacher}
      grade={userData.grade}
    />
  </Box>
);

export default TextComponent;
