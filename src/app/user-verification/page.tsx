"use client";

import { checkUserExists } from "@/hooks/useCheckUserExsits";
import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { RotatingLines } from "react-loader-spinner";

const UserVerification = () => {
  const router = useRouter();
  const { signOut } = useAuth();

  useEffect(() => {
    async function callCheckUserExists() {
      try {
        const isUserExists = await checkUserExists();
        if (!isUserExists) {
          return router.push("/userDetails");
        } else {
          return router.push("/dashboard");
        }
      } catch (error) {
        toast.error("Something went wrong. Please try again later");
        signOut({ redirectUrl: "/" });
      }
    }

    callCheckUserExists();
  }, [router, signOut]);

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <Toaster />
      <RotatingLines width="60" ariaLabel="three-dots-loading" />
    </div>
  );
};

export default UserVerification;
