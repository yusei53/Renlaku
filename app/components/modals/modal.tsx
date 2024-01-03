"use client";

import { Box, Typography, Dialog } from "@mui/material";
import { useCallback, useState } from "react";
import { IoMdClose } from "react-icons/io";
import Button from "../button/button";

type TProps = {
  isOpen?: boolean;
  onClose: () => void;
  onSubmit: () => void;
  title?: string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  primaryLabel: string;
  secondaryAction?: () => void;
  secondaryLabel?: string;
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
  secondaryAction,
  secondaryLabel,
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

  const handleSecondaryAction = useCallback(() => {
    if (disabled || !secondaryAction) {
      return;
    }
    secondaryAction();
  }, [secondaryAction, disabled]);

  if (!isOpen) {
    return null;
  }

  return (
    <Dialog open fullWidth>
      <Box>
        <IoMdClose size={20} onClick={handleClose} />
        <Typography component="h2">{title}</Typography>
        <Box>{body}</Box>
        <Box>
          {secondaryAction && secondaryLabel && (
            <Button
              disabled={disabled}
              label={secondaryLabel}
              onClick={handleSecondaryAction}
              outline
            />
          )}
          <Button
            disabled={disabled}
            label={primaryLabel}
            onClick={handleSubmit}
            del={del}
          />
        </Box>
        <Box>{footer}</Box>
      </Box>
    </Dialog>
  );
};

export default Modal;
