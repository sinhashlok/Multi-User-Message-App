"use client";
import { useUser } from "@clerk/nextjs";
import { UpdateUserDetailsForm } from "@/components/UpdateUserDetailsForm";
import FormSkeleton from "@/components/skeleteons/FormSkeleton";

const CreateNewUser = () => {
  const { user } = useUser();

  const id = user?.id;
  const username = user?.username;
  const email = user?.emailAddresses[0].emailAddress;
  const fullName = user?.fullName;
  const hasImage = user?.hasImage;
  const imgUrl = user?.imageUrl;

  if (!id) {
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
