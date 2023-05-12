"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";

interface SignInButtonProps {
  className?: string;
}

export function SignInButton({ className }: SignInButtonProps) {
  const { data: session, status } = useSession();
  console.log(session, status);
  if (status === "loading") {
    return <>...</>;
  }
  if (status === "authenticated") {
    return (
      <Link className={className} href={"/dashboard"}>
        <Image
          // In order to use the image from github you will need
          //To update your next config to include the domain
          className="rounded-full hover:rounded-lg"
          src={session.user?.image ?? "/mememan.webp"}
          alt={"Your Name"}
          width={32}
          height={32}
        />
      </Link>
    );
  }

  return (
    <button className={className} onClick={() => signIn()}>
      Sign in
    </button>
  );
}

interface SignOutButtonProps {
  className?: string;
}

export function SignOutButton({ className }: SignOutButtonProps) {
  return (
    <button className={className} onClick={() => signOut()}>
      Sign Out
    </button>
  );
}
