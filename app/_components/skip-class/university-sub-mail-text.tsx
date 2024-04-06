import { forwardRef } from "react";
import { Typography } from "@mui/material";
import { SkipClassUserType } from "../../_feature/types/types";

type UniversitySubMailTextType = Pick<
  SkipClassUserType,
  "date" | "time" | "lesson"
>;

const UniversitySubMailText = forwardRef<
  HTMLDivElement,
  UniversitySubMailTextType
>(({ date, time, lesson }, ref) => {
  return (
    <Typography
      ref={ref}
      py={2}
      px={{ xs: 3, sm: 5 }}
      fontSize={{ xs: "15px", sm: "16px" }}
    >
      {date}
      {time}限{lesson}欠席のご連絡 <br />
    </Typography>
  );
});

UniversitySubMailText.displayName = "UniversitySubMailText";

export default UniversitySubMailText;
