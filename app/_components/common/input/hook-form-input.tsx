import { SxProps, TextField } from "@mui/material";
import { FieldValues, UseFormRegister } from "react-hook-form";

type TProps = {
  id: string;
  label: string;
  type?: string;
  disabled?: boolean;
  required?: boolean;
  multiline?: boolean;
  value?: string;
  register: UseFormRegister<FieldValues>;
  errors: any;
  rows?: number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  sx?: SxProps;
};

const HookFormInput: React.FC<TProps> = ({
  id,
  label,
  type = "text",
  disabled,
  required,
  value,
  register,
  errors,
  onChange,
  rows,
  sx,
  multiline,
}) => {
  return (
    <TextField
      id={id}
      label={label}
      type={type}
      disabled={disabled}
      defaultValue={value || ""}
      {...register(id, { required })}
      error={!!errors[id]}
      helperText={errors[id]?.message}
      onChange={onChange}
      size="small"
      multiline={multiline}
      rows={multiline ? rows : 1}
      sx={sx}
    />
  );
};

export default HookFormInput;
