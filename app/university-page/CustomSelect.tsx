import { Select, SelectChangeEvent } from "@mui/material";
import React from "react";

type TProps = {
  value: string | null;
  onChange: (e: SelectChangeEvent<string>) => void;
  children: React.ReactNode;
};

const CustomSelect: React.FC<TProps> = ({ value, onChange, children }) => {
  return (
    <Select
      value={value || ""}
      onChange={onChange}
      size="small"
      sx={{ textAlign: "left" }}
    >
      {children}
    </Select>
  );
};

export default CustomSelect;
