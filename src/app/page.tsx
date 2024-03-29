"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/bem-vinda");
    }, 3000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <main
      style={{
        backgroundImage: 'url("/image/bg.jpg")',
        backgroundPosition: "center center",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
      }}
      className="flex min-h-screen flex-col items-center justify-between p-24 animate-fadeIn"
    ></main>
  );
}
