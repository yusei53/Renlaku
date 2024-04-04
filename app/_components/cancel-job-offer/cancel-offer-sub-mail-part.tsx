import { Box } from "@mui/material";
import { CancelJobOfferUserType } from "../../_feature/types/types";
import { useRef } from "react";
import CopyButton from "../common/copy-button/copy-button";
import CancelOfferSubMailText from "./cancel-offer-sub-mail-text";

type TProps = {
  userData: CancelJobOfferUserType;
};

const CancelOfferSubMailPart: React.FC<TProps> = ({ userData }) => {
  const textRef = useRef<HTMLDivElement>(null);

  return (
    <Box mt={2} bgcolor={"#D7EEFF"} borderRadius={1} position={"relative"}>
      <CopyButton textRef={textRef} />
      <CancelOfferSubMailText
        ref={textRef}
        company={null}
        companyUserName={null}
        university={null}
        name={null}
        grade={null}
        reasonText={userData.reasonLabel || "{ 辞退理由 }"}
        privateEmail={null}
        phoneNumber={null}
        reasonLabel={null}
      />
    </Box>
  );
};

export default CancelOfferSubMailPart;
