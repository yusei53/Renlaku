import { TextField } from "@mui/material";

type TProps = {
  label: string;
  value: string | null;
  type?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const CustomInput: React.FC<TProps> = ({
  label,
  value,
  type = "text",
  onChange,
}) => {
  return (
    <TextField
      type={type}
      value={value || ""}
      label={label}
      onChange={onChange}
      fullWidth
      size="small"
    />
  );
};

export default CustomInput;
