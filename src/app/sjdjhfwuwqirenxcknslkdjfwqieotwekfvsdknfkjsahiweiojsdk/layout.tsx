import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "1 Ano do nosso amor!",
  description: "",
};

export default function ChaLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
