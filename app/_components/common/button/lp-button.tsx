import { Box, BoxProps } from "@mui/material";

type TProps = {
  label: string;
  onClick: () => void;
  bgColor?: string;
  color?: string;
  hover?: boolean;
  sx?: BoxProps;
};

const LpButton: React.FC<TProps> = ({
  label,
  onClick,
  bgColor = "#ff5e00",
  color = "white",
  hover = false,
  sx,
}) => {
  return (
    <Box
      component={"button"}
      margin={"8px"}
      p={"8px 14px"}
      border={"none"}
      bgcolor={bgColor}
      color={color}
      borderRadius={1}
      boxShadow={"none"}
      fontSize={"0.9rem"}
      sx={{
        cursor: "pointer",
        transition: "0.3s",
        "&:hover": {
          backgroundColor: hover ? "#F84A01" : bgColor,
        },
      }}
      onClick={onClick}
      {...sx}
    >
      {label}
    </Box>
  );
};

export default LpButton;
