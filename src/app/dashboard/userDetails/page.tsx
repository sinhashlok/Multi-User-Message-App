"use client";
import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

import { checkUserExists } from "@/hooks/useCheckUserExsits";

const CreateNewUser = () => {
  const { userId, signOut } = useAuth();

  const router = useRouter();

  useEffect(() => {
    async function callCheckUserExists() {
      try {
        const isUserExists = await checkUserExists({ userId: userId || "" });
        if (isUserExists) {
          return router.push("/dashboard");
        }
      } catch (error) {
        toast.error("Something went wrong. Please try again later");
        signOut();
      }
    }
    callCheckUserExists();
  }, []);

  return (
    <div>
      <Toaster />
    </div>
  );
};

export default CreateNewUser;
