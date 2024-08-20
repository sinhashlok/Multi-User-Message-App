import NavbarLoggedIn from "@/components/NavbarLoggedIn";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="h-screen w-screen">
        <NavbarLoggedIn />
        {children}
      </body>
    </html>
  );
}
