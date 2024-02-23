import { forwardRef } from "react";
import { Typography } from "@mui/material";
import { SkipPartTimeUserType } from "../../_feature/types/types";

const PartTimeMailText = forwardRef<HTMLDivElement, SkipPartTimeUserType>(
  ({ name, reasonText }, ref) => {
    return (
      <Typography
        ref={ref}
        py={{ xs: 4, sm: 6 }}
        px={{ xs: 3, sm: 5 }}
        fontSize={{ xs: "15px", sm: "16px" }}
      >
        お疲れ様です。{name}です。
        <br />
        <br />
        {reasonText}
        <br />
        <br />
        お手数おかけしますが、ご確認のほど宜しくお願いいたします。
      </Typography>
    );
  }
);

PartTimeMailText.displayName = "PartTimeMailText";

export default PartTimeMailText;
