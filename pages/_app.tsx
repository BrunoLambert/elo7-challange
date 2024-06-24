import type { Metadata } from "next";
import type { AppProps } from 'next/app'
import { Inter } from "next/font/google";
import "../app/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}