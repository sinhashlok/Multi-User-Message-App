"use server";
import prisma from "@/lib/db";

import { UpdateUserDetailsServerSchema } from "@/schema/UpdateUserDetailsSchema";
import { NextResponse } from "next/server";

interface UpdateUserDetailsFormProps {
  id: string;
  username: string;
  email: string;
  fullName: string;
  imgUrl: string;
  phone: string;
}

export async function updateUserDetails(data: UpdateUserDetailsFormProps) {
  try {
    const isValidData = UpdateUserDetailsServerSchema.safeParse(data);
    if (!isValidData) {
      throw new Error("Something went wrong.");
    }

    const user = await prisma.user.create({
      data: {
        id: data.id,
        email: data.email,
        name: data.fullName,
        username: data.username,
        imgUrl: data.imgUrl,
        phone: data.phone,
      },
    });

    return { message: "User created", success: true };
  } catch (error) {
    console.log(error);
    throw new Error("Something went wrong.");
  }
}
