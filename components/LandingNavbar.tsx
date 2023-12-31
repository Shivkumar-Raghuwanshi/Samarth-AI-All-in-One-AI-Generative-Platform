"use client";

import { cn } from "@/lib/utils";
import { useAuth } from "@clerk/nextjs";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

const font = Montserrat({
  weight: "600",
  subsets: ["latin"],
});
export const LandingNavbar = () => {
  const { isSignedIn } = useAuth();

  return (
    <nav className="p-4  flex items-center justify-between bg-blue-600">
      <Link href="/" className="flex items-center">
        <div className="relative h-9 w-9 mr-4">
          <Image src="/logo.png" alt="logo" width={36} height={36}/>
        </div>
        <h1 className={cn("text-2xl font-bold text-white", font.className)}>Samarth AI</h1>
      </Link>
      <div className="flex items-center gap-x-2">
        <Link href={isSignedIn?"/dashboard":"/sign-up"}>
            <Button variant="outline" className="rounded-full">Get Started</Button>
        </Link>

      </div>
    </nav>
  );
};
