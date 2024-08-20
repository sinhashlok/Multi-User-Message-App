"use client";

import { useTransition } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useAuth } from "@clerk/nextjs";
import { RotatingLines } from "react-loader-spinner";
import toast, { Toaster } from "react-hot-toast";
import { z } from "zod";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { UpdateUserDetailsSchema } from "@/schema/UpdateUserDetailsSchema";

import { updateUserDetails } from "@/actions/updateUserDetails";

interface UpdateUserDetailsFormProps {
  id: string;
  username: string;
  email: string;
  fullName: string;
  hasImage: boolean;
  imgUrl: string;
}

export function UpdateUserDetailsForm({
  id,
  username,
  email,
  fullName,
  hasImage,
  imgUrl,
}: UpdateUserDetailsFormProps) {
  const { signOut } = useAuth();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const formSchema = UpdateUserDetailsSchema;
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: username,
      fullName: fullName,
      phone: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      startTransition(async () => {
        const data = {
          id: id,
          username: values.username,
          email: email,
          fullName: values.fullName,
          imgUrl: imgUrl,
          phone: values.phone,
        };

        const res = await updateUserDetails(data);
        if (res.success) {
          console.log("User created successfully");
          return router.push("/dashboard");
        }
      });
    } catch (error) {
      toast.error("Something went wrong. Please try again later");
      signOut();
    }
  }

  return (
    <div className="border-2 w-full md:w-96 py-6 px-4 rounded-md">
      <Toaster />
      <h1 className="text-center text-2xl mb-2">
        Hi, {fullName} 👋
        <br />
        <span className="text-sm">Please fill your details</span>
      </h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          {/* TODO: Add Profile img upload */}
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" {...field} />
                </FormControl>
                <FormDescription className="text-sm">
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Fullname</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {isPending ? (
            <Button disabled type="submit" className="w-full">
              <RotatingLines width="20" ariaLabel="three-dots-loading" />{" "}
              <span className="ml-2">Processing</span>
            </Button>
          ) : (
            <Button type="submit" className="w-full">
              Submit
            </Button>
          )}
        </form>
      </Form>
    </div>
  );
}
