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
import Input from "../input/hook-form-input";
import Button from "../button/custom-button";
import { FcGoogle } from "react-icons/fc";
import useSignupModal from "@/app/_feature/hooks/useSignupModal";
import useLoginModal from "@/app/_feature/hooks/useLoginModal";
import Modal from "./custom-modal";

const schema = z.object({
  userName: z.string().min(1, { message: "ユーザーネームを入力してください" }),
  email: z.string().email({ message: "メールアドレスの形式ではありません" }),
  password: z.string().min(6, { message: "6文字以上入力する必要があります" }),
});

const SignupModal = () => {
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
    defaultValues: { userName: "", email: "", password: "" },
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
        await signIn("credentials", {
          ...data,
          redirect: false,
        });
        toast.success("アカウントを作成しました！");
        signupModal.onClose();
        router.push("/profile");
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
        id="userName"
        label="ユーザー名"
        disabled={loading}
        register={register}
        errors={errors}
        required
      />
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
    <Box gap={3}>
      {/* Googleログイン */}
      <Button
        label="Googleで新規登録"
        icon={FcGoogle}
        onClick={() =>
          signIn("google", {
            callbackUrl: "/profile",
          })
        }
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
      primaryLabel="新規登録する"
      onClose={signupModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    />
  );
};

export default SignupModal;
