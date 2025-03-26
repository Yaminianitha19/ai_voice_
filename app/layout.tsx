import { Toaster } from "sonner";
import type { Metadata } from "next";
import { inter } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Voice Assistant",
  description: "An AI-powered voice assistant application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans`}>
        {children}

        <Toaster />
      </body>
    </html>
  );
}
