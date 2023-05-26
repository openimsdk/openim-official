import prisma from "@/parisma";
import { ContactUser } from "@prisma/client";
import { NextResponse } from "next/server";

type ErrorType = {
  message: string;
};

export async function POST(req: Request) {
  try {
    const reqData = (await req.json()) as ContactUser;

    await prisma.contactUser.create({
      data: {
        ...reqData,
      },
    });
    return NextResponse.json({
      success: true,
      message: "",
    });
  } catch (error: unknown) {
    return new NextResponse(
      JSON.stringify({
        success: false,
        message: (error as ErrorType).message,
      }),
      { status: 500 },
    );
  }
}
