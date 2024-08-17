import NavbarLoggedIn from "@/components/NavbarLoggedIn";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="h-full w-full flex flex-col items-center justify-center">
        <NavbarLoggedIn />
        {children}
      </body>
    </html>
  );
}
