"use server";

import prisma from "@/lib/db";
import { currentUser } from "@clerk/nextjs/server";

export async function checkUserExists() {
  try {
    const user = await currentUser();
    const userExist = await prisma.user.findUnique({
      where: { id: user?.id },
    });

    if (!userExist) {
      return false;
    }

    return true;
  } catch (error: any) {
    console.log("Error while checkUserExists", error);
    throw new Error("Something went wrong");
  }
}
