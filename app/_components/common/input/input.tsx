import { TextField } from "@mui/material";
import { FieldValues, UseFormRegister } from "react-hook-form";

type TProps = {
  id: string;
  label: string;
  type?: string;
  disabled?: boolean;
  required?: boolean;
  value?: string;
  register: UseFormRegister<FieldValues>;
  errors: any;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input: React.FC<TProps> = ({
  id,
  label,
  type = "text",
  disabled,
  required,
  value,
  register,
  errors,
  onChange,
}) => {
  return (
    <TextField
      id={id}
      label={label}
      type={type}
      disabled={disabled}
      defaultValue={value || ""}
      {...register(id, { required })}
      error={errors[id]}
      helperText={errors[id]?.message}
      onChange={onChange}
      size="small"
    />
  );
};

export default Input;
