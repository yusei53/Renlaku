"use client";
import useLoginModal from "@/app/hooks/useLoginModal";
import useSignupModal from "@/app/hooks/useSignupModal";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";
import Modal from "./modal";
import { Box, Typography } from "@mui/material";
import { FcGoogle } from "react-icons/fc";
import Button from "../button/button";
import Input from "../input/input";

const schema = z.object({
  email: z.string().email({ message: "メールアドレスの形式ではありません" }),
  password: z.string().min(6, { message: "6文字以上入力する必要があります" }),
});

const LoginModal = () => {
  const router = useRouter();
  const loginModal = useLoginModal();
  const signupModal = useSignupModal();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(schema),
  });

  const onToggle = useCallback(() => {
    loginModal.onOpen();
    signupModal.onClose();
  }, [loginModal, signupModal]);

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setLoading(true);

    try {
      //ログイン
      const res = await signIn("credentials", {
        ...data,
        redirect: false,
      });

      if (res?.error) {
        toast.error("エラーが発生しました" + res.error);
        return;
      }

      toast.success("ログインしました");
      loginModal.onClose();
      router.push("/test2");
      router.refresh();
    } catch (error) {
      toast.error("エラーが発生しました" + error);
    } finally {
      setLoading(false);
    }
  };

  const bodyContent = (
    <Box component={"form"} display="flex" flexDirection="column" gap={3}>
      <Input
        id="email"
        label="メールアドレス"
        disabled={loading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="password"
        label="パスワード"
        type="password"
        disabled={loading}
        register={register}
        errors={errors}
        required
      />
    </Box>
  );

  const footerContent = (
    <Box display="flex" flexDirection="column" gap={3} mt={2}>
      {/* Googleログイン */}
      <Button
        label="Googleでログイン"
        icon={FcGoogle}
        onClick={() => signIn("google")}
      />

      <Box mt={4} textAlign={"center"}>
        <Typography
          onClick={onToggle}
          sx={{ cursor: "pointer", "&:hover": { textDecoration: "underline" } }}
        >
          すでにアカウントを作成済みの方はこちら
        </Typography>
      </Box>
    </Box>
  );

  return (
    <Modal
      disabled={loading}
      isOpen={loginModal.isOpen}
      title="ログイン"
      primaryLabel="ログインする"
      onClose={loginModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    ></Modal>
  );
};

export default LoginModal;
