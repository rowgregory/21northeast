"use client";

import React, { ReactNode } from "react";
import Header from "./components/Header";
import { ChakraProvider } from "@chakra-ui/react";

const PageWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <ChakraProvider>
      <Header />
      <main>{children}</main>
    </ChakraProvider>
  );
};

export default PageWrapper;
