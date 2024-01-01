import { TextField } from "@mui/material";
import { FieldValues, UseFormRegister } from "react-hook-form";

type TProps = {
  id: string;
  label: string;
  type?: string;
  disabled?: boolean;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: any;
};

export const Input: React.FC<TProps> = ({
  id,
  label,
  type = "text",
  disabled,
  required,
  register,
  errors,
}) => {
  return (
    <TextField
      id={id}
      label={label}
      type={type}
      disabled={disabled}
      {...register(id, { required })}
      error
      helperText={errors[id].message}
    />
  );
};

export default Input;
