import { Box, Typography } from "@mui/material";
import { useCallback } from "react";
import Button from "../components/common/button/button";

type TProps = {
  onSubmit: () => void;
  title?: string;
  body: React.ReactElement;
  primaryLabel: string;
  disabled?: boolean;
};

const ProfilePage: React.FC<TProps> = ({
  onSubmit,
  title,
  body,
  primaryLabel,
  disabled,
}) => {
  const handleSubmit = useCallback(() => {
    if (disabled) {
      return;
    }
    onSubmit();
  }, [onSubmit, disabled]);

  return (
    <Box>
      <Typography component="h2">{title}</Typography>
      <Box>{body}</Box>
      <Box>
        <Button
          disabled={disabled}
          label={primaryLabel}
          onClick={handleSubmit}
        />
      </Box>
    </Box>
  );
};

export default ProfilePage;
