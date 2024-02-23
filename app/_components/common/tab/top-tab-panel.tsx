import { Box } from "@mui/material";
import { User } from "@prisma/client";
import CancelOfferFirstView from "../../cancel-job-offer/cancel-offer-firstview";
import UniversityFirstView from "../../skip-class/university-firstview";
import PartTimeFirstView from "../../skip-part-time/part-time-firstview";

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
      {value === "skip-part-time" && (
        <PartTimeFirstView currentUser={currentUser} />
      )}
    </Box>
  );
};

export default TopTabPanel;
