import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { Box, Button, Typography } from "@mui/material";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import HookFormInput from "../common/input/hook-form-input";

const ContactForm = () => {
  const schema = z.object({
    contactEmail: z
      .string()
      .email({ message: "メールアドレスの形式ではありません" }),
    message: z.string().min(1, { message: "メッセージは必須です" }),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    resolver: zodResolver(schema),
  });

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  };

  return (
    <Box
      component="form"
      display="flex"
      flexDirection="column"
      onSubmit={handleSubmit(onSubmit)}
      gap={3}
      mt={8}
      mx={2}
    >
      <Typography variant="h5" component={"h3"} fontWeight={"bold"}>
        リクエスト・お問い合わせ
      </Typography>
      <HookFormInput
        id="contactEmail"
        label="メールアドレス"
        errors={errors}
        required
        register={register}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        sx={{ width: { xs: "80%", lg: "35%" } }}
      />
      <HookFormInput
        id="message"
        label="リクエスト・お問い合わせ"
        errors={errors}
        required
        register={register}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        multiline
        rows={5}
      />
      <Button type="submit" fullWidth variant="contained" sx={{ mt: 1, mb: 2 }}>
        メール送信
      </Button>
    </Box>
  );
};

export default ContactForm;