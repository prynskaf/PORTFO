import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { UIProviders } from "@/contexts/nextUiContext/UiProviders";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Prince Portfolio",
  description: "Created by NextJS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={inter.className}>
        <UIProviders>
          <NavBar />
          {children}
          <Footer />
        </UIProviders>
      </body>
    </html>
  );
}
