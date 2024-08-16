import ConditionalFooter from "@/components/ConditionalFooter";
import ConditionalNavbar from "@/components/ConditionalNavbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NextAuthProvider from "@/providers/NextAuthProvider";
import ReactQueryProvider from "@/providers/ReactQueryProviders";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Buy concert, sports, theater tickets on TixStation! ",
  description: "TixStation, buy and sell tickets platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextAuthProvider>
          <ReactQueryProvider>
            <ConditionalNavbar />
            {children}
            <ConditionalFooter/>
            <ToastContainer />
          </ReactQueryProvider>
        </NextAuthProvider>
      </body>
    </html>
  );
}
