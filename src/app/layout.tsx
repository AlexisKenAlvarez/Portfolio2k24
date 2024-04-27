import "@/styles/globals.css";

import { Poppins, Syne } from "next/font/google";

import Wrapper from "@/components/Wrapper";
import { TRPCReactProvider } from "@/trpc/react";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-sans",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-secondary",
});

export const metadata = {
  title: "Alexis Ken Alvarez",
  description: "Fullstack Web Developer",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${syne.variable} ${poppins.variable}`}>
        <TRPCReactProvider>
          <Wrapper>
            <section className="bg-bg">{children}</section>
          </Wrapper>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
