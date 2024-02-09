import { Box, Container, Typography } from "@mui/material";
import { ReactElement, useCallback } from "react";
import Button from "../common/button/custom-button";

type TProps = {
  onSubmit: () => void;
  title?: string;
  body: ReactElement;
  primaryLabel: string;
  disabled?: boolean;
};

const ProfileItem: React.FC<TProps> = ({
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
    <Container sx={{ p: 5, textAlign: "center" }}>
      <Box mx={{ xs: 4, sm: 15, lg: 35 }}>
        <Typography component="h2" fontSize={22} letterSpacing={1.5}>
          {title}
        </Typography>
        <Box>{body}</Box>
      </Box>
      <Box mx={{ xs: 6, sm: 15, lg: 50 }}>
        <Box bgcolor={"#FE5E00"} borderRadius={1} sx={{ cursor: "pointer" }}>
          <Button
            disabled={disabled}
            label={primaryLabel}
            onClick={handleSubmit}
            sx={{ color: "white", fontSize: 16, py: 1 }}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default ProfileItem;
