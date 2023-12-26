import { useRouter } from "next/navigation";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import axios from "axios";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";
import { signIn } from "next-auth/react";

const schema = z.object({
  email: z.string().email({ message: "メールアドレスの形式ではありません" }),
  password: z.string().min(6, { message: "6文字以上入力する必要があります" }),
});

export const Page = () => {
  const router = useRouter();
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
        router.refresh();
      }
    } catch (error) {
      toast.error("エラーが発生しました" + error);
    } finally {
      setLoading(false);
    }
  };
  return <div>test</div>;
};

export default Page;
