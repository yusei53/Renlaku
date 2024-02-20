import { Box } from "@mui/material";
import { User } from "@prisma/client";
import CancelOfferFirstView from "../../cancel-job-offer/cancel-offer-firstview";
import UniversityFirstView from "../../skip-class/university-firstview";

type TProps = {
  value: string;
  currentUser: User | null;
};

const TopTabPanel: React.FC<TProps> = ({ value, currentUser }) => {
  return (
    <Box role="tabpanel">
      {value === "skip-class" && (
        <UniversityFirstView currentUser={currentUser} />
      )}
      {value === "cancel-job-offer" && (
        <CancelOfferFirstView currentUser={currentUser} />
      )}
    </Box>
  );
};

export default TopTabPanel;
