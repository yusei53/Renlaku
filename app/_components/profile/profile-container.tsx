"use client";
import { Box } from "@mui/material";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { User } from "@prisma/client";
import HookFormInput from "../common/input/hook-form-input";
import ProfileItem from "./profile-item";

type TProps = {
  currentUser: User | null;
};

const ProfileContainer: React.FC<TProps> = ({ currentUser }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
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

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setValue(name, value);
  };

  const bodyContent = (
    <Box
      component={"form"}
      display="flex"
      flexDirection="column"
      gap={3.5}
      py={5}
    >
      <HookFormInput
        id="name"
        label="名前"
        disabled={loading}
        register={register}
        errors={errors}
        required
        value={currentUser?.name}
        onChange={handleInputChange}
      />
      <HookFormInput
        id="university"
        label="大学学部学科"
        disabled={loading}
        register={register}
        errors={errors}
        required
        value={currentUser?.university}
        onChange={handleInputChange}
      />
      <HookFormInput
        id="grade"
        label="学年"
        disabled={loading}
        register={register}
        errors={errors}
        type="number"
        required
        value={currentUser?.grade}
        onChange={handleInputChange}
      />
      <HookFormInput
        id="universityNumber"
        label="学籍番号"
        disabled={loading}
        register={register}
        errors={errors}
        required
        value={currentUser?.universityNumber}
        onChange={handleInputChange}
      />
      <HookFormInput
        id="privateEmail"
        label="メールアドレス"
        disabled={loading}
        register={register}
        errors={errors}
        required
        value={currentUser?.privateEmail}
        onChange={handleInputChange}
      />
      <HookFormInput
        id="universityEmail"
        label="大学用メールアドレス"
        disabled={loading}
        register={register}
        errors={errors}
        required
        value={currentUser?.universityEmail}
        onChange={handleInputChange}
      />
      <HookFormInput
        id="phoneNumber"
        label="電話番号"
        disabled={loading}
        register={register}
        errors={errors}
        required
        value={currentUser?.phoneNumber}
        onChange={handleInputChange}
      />
    </Box>
  );

  return (
    <ProfileItem
      disabled={loading}
      title="プロフィール編集"
      primaryLabel="更新する"
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
    />
  );
};

export default ProfileContainer;
