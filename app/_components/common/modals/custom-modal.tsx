"use client";
import { Box, Typography, Dialog } from "@mui/material";
import { useCallback } from "react";
import { IoMdClose } from "react-icons/io";
import Button from "../button/custom-button";
import CustomDivider from "./custom-divider";

type TProps = {
  isOpen?: boolean;
  onClose: () => void;
  onSubmit: () => void;
  title?: string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  primaryLabel: string;
  disabled?: boolean;
  del?: boolean;
};

const Modal: React.FC<TProps> = ({
  isOpen,
  onClose,
  onSubmit,
  title,
  body,
  footer,
  primaryLabel,
  disabled,
  del = false,
}) => {
  const handleClose = useCallback(() => {
    if (disabled) {
      return;
    }
    onClose();
  }, [onClose, disabled]);

  const handleSubmit = useCallback(() => {
    if (disabled) {
      return;
    }
    onSubmit();
  }, [onSubmit, disabled]);

  if (!isOpen) {
    return null;
  }

  return (
    <Dialog open fullWidth maxWidth={"xs"}>
      <Box p={2}>
        <IoMdClose size={20} onClick={handleClose} />
        <Box textAlign={"center"}>
          <Typography component="h2" fontSize={20} pt={1} pb={2}>
            {title}
          </Typography>
          <Box px={{ xs: 2, md: 3 }}>
            <Box py={3}>{body}</Box>
            <Box>
              <Button
                disabled={disabled}
                label={primaryLabel}
                onClick={handleSubmit}
                sx={{
                  width: "100%",
                  bgcolor: "#006EE2",
                  color: "white",
                  "&:hover": { bgcolor: "#0067c0" },
                }}
              />
            </Box>
            <CustomDivider content="または" />
            <Box>{footer}</Box>
          </Box>
        </Box>
      </Box>
    </Dialog>
  );
};

export default Modal;
