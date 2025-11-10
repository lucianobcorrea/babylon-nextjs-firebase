"use client";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/app/firebase/config";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { signOut } from "firebase/auth";
import { useEffect } from "react";

export default function Home() {
  const [user] = useAuthState(auth);
  const router = useRouter();

  useEffect(() => {
    const userSession = sessionStorage.getItem("user");
    if (!user && !userSession) {
      router.replace("/sign-in");
    }
  }, []);

  function removeSession() {
    signOut(auth);
    sessionStorage.removeItem("user");
    router.replace("/sign-in");
  }

  return (
    <section className="p-10">
      <h1>
        Hey, <strong>{user?.displayName}</strong>! You’re successfully logged in
      </h1>

      <Button
        onClick={() => removeSession()}
        type="submit"
        className="mt-5 flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
      >
        <Image
          className="dark:invert"
          src="/vercel.svg"
          alt="Vercel logomark"
          width={16}
          height={16}
        />
        Logout
      </Button>
    </section>
  );
}
