"use client";
import { Box } from "@mui/material";

type TProps = {
  label: string;
  onClick: () => void;
};

const MenuButton: React.FC<TProps> = ({ label, onClick }) => {
  return (
    <Box sx={{ cursor: "pointer" }} onClick={onClick}>
      {label}
    </Box>
  );
};

export default MenuButton;
