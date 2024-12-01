import { Header } from "@/components/header";
import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/footer";
import { AudioProvider } from "@/lib/contexts/audio-context";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Voodoo Lab | Home",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex justify-center">
        <AudioProvider>
          <div className="max-w-[1440px] w-full">
            <Header />
            <Suspense>{children}</Suspense>
            <Footer />
          </div>
        </AudioProvider>
      </body>
    </html>
  );
}
