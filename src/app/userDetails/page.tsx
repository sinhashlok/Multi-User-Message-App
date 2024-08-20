"use client";
import { useAuth, useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

import { checkUserExists } from "@/hooks/useCheckUserExsits";
import { UpdateUserDetailsForm } from "@/components/UpdateUserDetailsForm";
import FormSkeleton from "@/components/skeleteons/FormSkeleton";

const CreateNewUser = () => {
  const router = useRouter();
  const { signOut } = useAuth();
  const { user } = useUser();
  const [dataLoaded, setDataLoaded] = useState(false);

  const id = user?.id;
  const username = user?.username;
  const email = user?.emailAddresses[0].emailAddress;
  const fullName = user?.fullName;
  const hasImage = user?.hasImage;
  const imgUrl = user?.imageUrl;

  useEffect(() => {
    async function callCheckUserExists() {
      try {
        const isUserExists = await checkUserExists({ userId: user?.id || "" });
        if (isUserExists) {
          return router.push("/dashboard");
        }
        setDataLoaded(true);
      } catch (error) {
        toast.error("Something went wrong. Please try again later");
        signOut({ redirectUrl: "/" });
      }
    }

    callCheckUserExists();
  }, [user]);

  if (!dataLoaded) {
    return (
      <div className="h-full flex items-center justify-center mx-4">
        <FormSkeleton />
      </div>
    );
  }

  return (
    <div className="h-full flex items-center justify-center mx-4">
      <UpdateUserDetailsForm
        id={id || ""}
        username={username || ""}
        email={email || ""}
        fullName={fullName || ""}
        hasImage={hasImage || false}
        imgUrl={imgUrl || ""}
      />
    </div>
  );
};

export default CreateNewUser;
