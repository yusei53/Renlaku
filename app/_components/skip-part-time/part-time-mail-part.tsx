import { Box } from "@mui/material";
import { SkipPartTimeUserType } from "../../_feature/types/types";
import { useRef } from "react";
import CopyButton from "../common/copy-button/copy-button";
import PartTimeMailText from "./part-time-mail-text";

type TProps = {
  userData: SkipPartTimeUserType;
};

const PartTimeMailPart: React.FC<TProps> = ({ userData }) => {
  const textRef = useRef<HTMLDivElement>(null);

  return (
    <Box mx={2} mt={1} bgcolor={"#D7EEFF"} position={"relative"}>
      <CopyButton textRef={textRef} />
      <PartTimeMailText
        ref={textRef}
        name={userData.name || "{ 氏名 }"}
        reasonText={userData.reasonText || "{ ここに欠席理由が挿入されます }"}
      />
    </Box>
  );
};

export default PartTimeMailPart;
