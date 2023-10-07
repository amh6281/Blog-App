import { getAuthSession } from "@/utils/auth";
import { prisma } from "@/utils/connect";
import { NextRequest, NextResponse } from "next/server";

// Get All Comments Of a Posts
export const GET = async (req: NextRequest) => {
  const { searchParams } = new URL(req.url);
  const postSlug = searchParams.get("postSlug");

  try {
    const comments = await prisma.comment.findMany({
      where: { ...(postSlug && { postSlug }) },
      include: { user: true },
    });
    return new NextResponse(JSON.stringify(comments), { status: 200 });
  } catch (err) {
    console.log(err);
    return new NextResponse(JSON.stringify({ message: "잘못된 접근입니다." }), {
      status: 500,
    });
  }
};

// Create a Comment
export const POST = async (req: NextRequest) => {
  const session = await getAuthSession(); // await를 사용하여 Promise 해결

  if (!session || !session.user) {
    return new NextResponse(
      JSON.stringify({ message: "인증되지 않았습니다." }),
      {
        status: 401,
      }
    );
  }

  try {
    const body = await req.json();
    const comment = await prisma.comment.create({
      data: { ...body, userEmail: session.user.email },
    });
    return new NextResponse(JSON.stringify(comment), { status: 200 });
  } catch (err) {
    console.log(err);
    return new NextResponse(JSON.stringify({ message: "잘못된 접근입니다." }), {
      status: 500,
    });
  }
};
