"use client";

import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import axios from "axios";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";
import { signIn } from "next-auth/react";
import { Box, Typography } from "@mui/material";
import Input from "../input/input";
import Button from "../button/button";
import { FcGoogle } from "react-icons/fc";
import useSignupModal from "@/app/hooks/useSignupModal";
import useLoginModal from "@/app/hooks/useLoginModal";
import Modal from "./modal";

const schema = z.object({
  email: z.string().email({ message: "メールアドレスの形式ではありません" }),
  password: z.string().min(6, { message: "6文字以上入力する必要があります" }),
});

export const SignupModal = () => {
  const router = useRouter();
  const signupModal = useSignupModal();
  const loginModal = useLoginModal();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    //初期値
    defaultValues: { email: "", password: "" },
    //入力値の検証
    resolver: zodResolver(schema),
  });

  const onToggle = useCallback(() => {
    signupModal.onClose();
    loginModal.onOpen();
  }, [signupModal, loginModal]);

  //送信
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setLoading(true);

    try {
      //サインアップ
      const res = await axios.post("/api/signup", data);

      if (res.status == 200) {
        toast.success("アカウントを作成しました！");

        await signIn("credentials", {
          ...data,
          redirect: false,
        });

        signupModal.onClose();
        router.refresh();
      }
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
      isOpen={signupModal.isOpen}
      title="新規登録"
      primaryLabel="新規登録"
      onClose={signupModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    ></Modal>
  );
};

export default SignupModal;
