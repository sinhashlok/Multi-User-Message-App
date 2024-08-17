import {
  SignInButton,
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

const Navbar = () => {
  return (
    <nav className="flex w-screen justify-between px-2 md:px-40 items-center py-2 md:py-4">
      <Link href="/">
        <Image src={img} alt="web-chat-logo" width={52} height={52} />
      </Link>
      <div className="flex items-center">
        <SignedOut>
          <Button className="mr-2">
            <SignInButton />
          </Button>
          <Button className="mr-2">
            <SignUpButton />
          </Button>
        </SignedOut>
        <SignedIn>
          <Button className="mr-2">
            <UserButton />
          </Button>
        </SignedIn>
        <div className="hidden md:flex">
        <ModeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
