"use client";
import { Box } from "@mui/material";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import ProfilePage from "./profilePage";
import { User } from "@prisma/client";
import { Input } from "../_components/common/input/input";

type TProps = {
  currentUser: User | null;
};

const Profile: React.FC<TProps> = ({ currentUser }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FieldValues>();

  useEffect(() => {
    if (currentUser) {
      reset({
        name: currentUser.name,
        university: currentUser.university,
        grade: currentUser.grade,
        universityNumber: currentUser.universityNumber,
        privateEmail: currentUser.privateEmail,
        universityEmail: currentUser.universityEmail,
        phoneNumber: currentUser.phoneNumber,
      });
    }
  }, [currentUser, reset]);

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setLoading(true);

    try {
      const res = await axios.patch("/api/profile", data);

      if (res.status == 200) {
        toast.success("プロフィールを更新しました！");
        router.refresh();
      }
    } catch (error) {
      toast.error("エラーが発生しました" + error);
      return;
    } finally {
      setLoading(false);
    }
  };

  const bodyContent = (
    <Box component={"form"} display="flex" flexDirection="column" gap={3}>
      <Input
        id="name"
        label="名前"
        disabled={loading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="grade"
        label="学年"
        disabled={loading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="university"
        label="名前"
        disabled={loading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="universityNumber"
        label="大学"
        disabled={loading}
        register={register}
        errors={errors}
        required
      />{" "}
      <Input
        id="privateEmail"
        label="名前"
        disabled={loading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="universityEmail"
        label="学年"
        disabled={loading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="phoneNumber"
        label="学年"
        disabled={loading}
        register={register}
        errors={errors}
        required
      />
    </Box>
  );

  return (
    <ProfilePage
      disabled={loading}
      title="プロフィール編集"
      primaryLabel="更新する"
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
    />
  );
};

export default Profile;
