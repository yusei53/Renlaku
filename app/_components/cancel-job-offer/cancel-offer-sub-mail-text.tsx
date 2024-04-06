import { forwardRef } from "react";
import { Typography } from "@mui/material";
import { CancelJobOfferUserType } from "../../_feature/types/types";

type CancelOfferSubMailTextType = Pick<CancelJobOfferUserType, "reasonText">;

const CancelOfferSubMailText = forwardRef<
  HTMLDivElement,
  CancelOfferSubMailTextType
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
