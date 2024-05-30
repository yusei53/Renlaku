import { IconButton, Tooltip } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { useState, useCallback, RefObject } from "react";

type TProps = {
  textRef: RefObject<HTMLDivElement>;
};

const CopyButton: React.FC<TProps> = ({ textRef }) => {
  const [openTip, setOpenTip] = useState(false);

  const copyToClipboard = () => {
    const text = textRef.current?.innerText || "";
    navigator.clipboard.writeText(text);
    setOpenTip(true);
    setTimeout(() => setOpenTip(false), 1000);
  };

  return (
    <Tooltip
      open={openTip}
      placement="top"
      title="Copied!"
      sx={{ position: "absolute", top: 12, right: 15 }}
    >
      <IconButton color="primary" size="medium" onClick={copyToClipboard}>
        <ContentCopyIcon fontSize="medium" />
      </IconButton>
    </Tooltip>
  );
};

export default CopyButton;
