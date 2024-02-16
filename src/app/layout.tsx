import type { Metadata } from "next";
import { MedievalSharp } from "next/font/google";
import "./globals.css";
import { AlertsContainers } from "@/utils/AlertsContainers";

const inter = MedievalSharp({
  weight: ["400"],
  subsets: ["latin"],
  style: ["normal"],
});

export const metadata: Metadata = {
  title: "Enigma do Amor | Marcos",
  description: "",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <head>
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>
        {children} <AlertsContainers />
      </body>
    </html>
  );
}
