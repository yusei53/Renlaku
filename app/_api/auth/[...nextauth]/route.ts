import NextAuth, { NextAuthOptions } from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "@/app/lib/prisma";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

export const authOptions: NextAuthOptions = {
  //prismaを使うための設定
  adapter: PrismaAdapter(prisma),
  //認証プロバイダー
  providers: [
    // Google認証
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    //メールアドレス認証
    CredentialsProvider({
      name: "credentials",
      credentials: {
        // メールアドレスとパスワード
        email: { label: "email", type: "text" },
        password: { label: "password", type: "password" },
      },

      async authorize(credentials) {
        //メールアドレスとパスワードがない場合のエラー
        if (!credentials?.email || !credentials?.password) {
          throw new Error("メールアドレスとパスワードが存在しません");
        }
        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        });

        //ユーザーが存在しないエラー
        if (!user || !user?.hashedPassword) {
          throw new Error("ユーザーが存在しません");
        }

        //パスワードが一致しない時のエラー
        const isCorrectPassword = await bcrypt.compare(
          credentials.password,
          user.hashedPassword
        );

        if (!isCorrectPassword) {
          throw new Error("パスワードが一致しません");
        }

        return user;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
