import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Enigma do Amor | Instruções",
  description: "Sreá sueeocgn qeu eovc hinardav?i",
};

export default function EnigmaLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
