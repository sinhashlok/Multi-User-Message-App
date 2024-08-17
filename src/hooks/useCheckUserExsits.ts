"use server";

import prisma from "@/lib/db";

interface checkUserExistsProps {
  userId: string;
}

export async function checkUserExists({ userId }: checkUserExistsProps) {
  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      return false;
    }

    return true;
  } catch (error: any) {
    console.log("Error while checkUserExists", error);
    throw new Error("Something went wrong");
  }
}
