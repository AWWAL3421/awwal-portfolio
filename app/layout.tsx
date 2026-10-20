import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "Awwal Yahya | Software Engineer",
  description: "Full-Stack Software & IT Infrastructure Engineer portfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      {/* suppressHydrationWarning stops browser extensions from breaking the app */}
      <body suppressHydrationWarning className="font-sans bg-white text-slate-700 antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}