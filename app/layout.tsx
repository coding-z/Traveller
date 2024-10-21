"use client";

import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import "./global.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB" dir="ltr">
      <body id="body">
        <ChakraProvider>{children}</ChakraProvider>
      </body>
    </html>
  );
}
