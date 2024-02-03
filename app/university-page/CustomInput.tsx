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
      size="small"
      label={label}
      value={value || ""}
      onChange={onChange}
    />
  );
};

export default CustomInput;
