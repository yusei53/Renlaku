"use client";
import useLoginModal from "@/app/_feature/hooks/useLoginModal";
import useSignupModal from "@/app/_feature/hooks/useSignupModal";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";
import { Box, Typography } from "@mui/material";
import { FcGoogle } from "react-icons/fc";
import Button from "../button/custom-button";
import Input from "../input/hook-form-input";
import Modal from "./custom-modal";

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
    loginModal.onClose();
    signupModal.onOpen();
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
      router.push("/university-page");
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
        sx={{ m: 1 }}
      />
      <Input
        id="password"
        label="パスワード"
        type="password"
        disabled={loading}
        register={register}
        errors={errors}
        required
        sx={{ m: 1 }}
      />
    </Box>
  );

  const footerContent = (
    <Box gap={3}>
      {/* Googleログイン */}
      <Button
        label="Googleでログイン"
        icon={FcGoogle}
        onClick={() => signIn("google")}
        sx={{
          width: "100%",
          color: "black",
          border: "1px solid #c4c4c4",
        }}
      />
      <Box mt={5} mb={3}>
        <Typography
          fontSize={14}
          onClick={onToggle}
          sx={{
            cursor: "pointer",
            textDecoration: "underline",
            "&:hover": { color: "#006ee1" },
          }}
        >
          アカウントをお持ちでない方はこちら
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
