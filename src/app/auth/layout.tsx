import Navbar from "@/components/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="h-full w-full flex flex-col items-center justify-center">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
