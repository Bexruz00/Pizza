"use client"
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ReactQueryProvider from "@/query";
import {Provider} from "react-redux"
import { store } from "@/store/store";
import { ContextProvider } from "@/context/Context";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Pizza</title>
        <link rel="icon" href="/logo.svg" sizes="any" />
        <link rel="apple-touch-icon" href="/logo.svg" />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >

            <Provider store={store}>
              <ReactQueryProvider>
                <ContextProvider>
                    {children}
                </ContextProvider>
              </ReactQueryProvider>
            </Provider>

      </body>
    </html>
  );
}
