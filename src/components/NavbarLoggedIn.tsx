import {
  SignInButton,
  SignOutButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import Image from "next/image";

import img from "../../public/logo/web-chat-logo.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ModeToggle } from "@/components/theme/ModeToggle";

const NavbarLoggedIn = () => {
  return (
    <nav className="flex w-screen justify-between px-2 md:px-40 items-center py-2 md:py-4">
      <Link href="/">
        <Image src={img} alt="web-chat-logo" width={52} height={52} />
      </Link>
      <div className="flex items-center">
        <div className="hidden md:flex mr-2">
          <ModeToggle />
        </div>
        <Button className="dark:bg-black dark:text-white dark:border-2">
          <SignOutButton />
        </Button>
      </div>
    </nav>
  );
};

export default NavbarLoggedIn;
