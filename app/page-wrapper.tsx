"use client";

import React, { ReactNode } from "react";
import Header from "./components/Header";
import { ChakraProvider } from "@chakra-ui/react";
import Footer from "./components/footer/Footer";

const PageWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <ChakraProvider>
      <Header />
      <main>{children}</main>
      <Footer />
    </ChakraProvider>
  );
};

export default PageWrapper;
