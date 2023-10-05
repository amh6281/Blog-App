import { prisma } from "@/utils/connect";
import { NextRequest, NextResponse } from "next/server";

// Get Single Post
export const GET = async (
  req: NextRequest,
  { params }: { params: { slug: string } }
) => {
  const { slug } = params;

  try {
    const post = await prisma.post.findUnique({
      where: { slug },
      include: { user: true },
    });
    return new NextResponse(JSON.stringify(post), { status: 200 });
  } catch (err) {
    console.log(err);
    return new NextResponse(JSON.stringify({ message: "잘못된 접근입니다." }), {
      status: 500,
    });
  }
};
