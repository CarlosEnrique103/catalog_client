import type { Metadata } from "next";
import "./globals.css";
import Providers from "./Providers";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "Catalog Client",
  description: "Catalog Client for the Catalog API",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white">
        <Toaster position="top-left" duration={2500} />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
