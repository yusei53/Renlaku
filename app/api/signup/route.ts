import bcrypt from "bcrypt";
import prisma from "@/app/_lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    //リクエストボディの取得
    const body = await request.json();
    const { email, password } = body;

    //パスワードのハッシュ化(セキュリティ強化)
    const hashedPassword = await bcrypt.hash(password, 12);

    //ユーザーの作成
    const response = await prisma.user.create({
      data: {
        email,
        hashedPassword,
      },
    });

    return NextResponse.json(response);
  } catch (error) {
    return new NextResponse("Error", { status: 500 });
  }
}
