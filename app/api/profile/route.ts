import getCurrentUser from "@/app/_feature/actions/getCurrentUser";
import { NextResponse } from "next/server";
import prisma from "@/app/_lib/prisma";

export async function PATCH(request: Request) {
  try {
    const body = await request.json();
    const {
      userName,
      name,
      university,
      grade,
      universityNumber,
      privateEmail,
      universityEmail,
      phoneNumber,
    } = body;

    const currentUser = await getCurrentUser();

    if (!currentUser?.id || !currentUser?.email) {
      return new NextResponse("認証していません", { status: 401 });
    }

    //ユーザーの編集
    const response = await prisma.user.update({
      where: {
        id: currentUser.id,
      },
      data: {
        userName,
        name,
        university,
        grade,
        universityNumber,
        privateEmail,
        universityEmail,
        phoneNumber,
      },
    });

    return NextResponse.json(response);
  } catch (error) {
    console.log(error);
    return new NextResponse("Error", { status: 500 });
  }
}
