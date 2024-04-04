import { forwardRef } from "react";
import { Typography } from "@mui/material";
import { CancelJobOfferUserType } from "../../_feature/types/types";

const CancelOfferSubMailText = forwardRef<
  HTMLDivElement,
  CancelJobOfferUserType
>(({ reasonText }, ref) => {
  return (
    <Typography
      ref={ref}
      py={2}
      px={{ xs: 3, sm: 5 }}
      fontSize={{ xs: "15px", sm: "16px" }}
    >
      {reasonText}のご連絡 <br />
    </Typography>
  );
});

CancelOfferSubMailText.displayName = "CancelOfferSubMailText";

export default CancelOfferSubMailText;
