import { Box, Button as MuiButton, SxProps } from "@mui/material";
import { IconType } from "react-icons";

type TProps = {
  label: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  outline?: boolean;
  del?: boolean;
  icon?: IconType;
  sx?: SxProps;
};

const Button: React.FC<TProps> = ({
  label,
  onClick,
  disabled,
  icon: Icon,
  sx,
}) => {
  return (
    <MuiButton
      disabled={disabled}
      onClick={onClick}
      sx={{ position: "relative", textTransform: "none", fontSize: 15, ...sx }}
    >
      {Icon && (
        <Box
          display={"flex"}
          alignItems={"center"}
          position={"absolute"}
          left={{ xs: 25, sm: 75 }}
        >
          <Icon size={25}></Icon>
        </Box>
      )}
      {label}
    </MuiButton>
  );
};

export default Button;
