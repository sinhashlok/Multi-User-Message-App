import z from "zod";

export const UpdateUserDetailsSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  fullName: z.string().min(3, {
    message: "Please enter full name",
  }),
  phone: z.string().length(10, {
    message: "Phone number should be 10 digits",
  }),
  // imgUrl: z.string({ message: "Please upload a profile pic" }),
});

export const UpdateUserDetailsServerSchema = z.object({
  id: z.string(),
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  fullName: z.string().min(3, {
    message: "Please enter full name",
  }),
  phone: z.string().length(10, {
    message: "Phone number should be 10 digits",
  }),
  imgUrl: z.string(),
});
