import { User } from "@prisma/client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";

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
  } = useForm<FieldValues>();

  return <div></div>;
};

export default Profile;
