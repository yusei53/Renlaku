import { Box } from "@mui/material";
import { User } from "@prisma/client";
import CancelOfferContainer from "../../cancel-job-offer/cancel-offer-container";
import UniversityMailContainer from "../../skip-class/university-mail-container";

type TProps = {
  value: string;
  currentUser: User | null;
};

const BottomTabPanel: React.FC<TProps> = ({ value, currentUser }) => {
  return (
    <Box role="tabpanel">
      {value === "skip-class" && (
        <UniversityMailContainer currentUser={currentUser} />
      )}
      {value === "cancel-job-offer" && (
        <CancelOfferContainer currentUser={currentUser} />
      )}
    </Box>
  );
};

export default BottomTabPanel;
