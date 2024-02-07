import { TextField } from "@mui/material";

type TProps = {
  label: string;
  value: string | null;
  type?: string;
  fullWidth?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const CustomInput: React.FC<TProps> = ({
  label,
  value,
  type = "text",
  fullWidth,
  onChange,
}) => {
  return (
    <TextField
      type={type}
      size="small"
      label={label}
      value={value || ""}
      onChange={onChange}
      fullWidth={fullWidth}
    />
  );
};

export default CustomInput;
