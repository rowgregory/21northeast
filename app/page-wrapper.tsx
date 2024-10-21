"use client";

import React, { ReactNode } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import PageSlideWrapper from "./page-slide-wrapper";

const PageWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <Provider store={store}>
      <ChakraProvider>
        <PageSlideWrapper>{children}</PageSlideWrapper>
      </ChakraProvider>
    </Provider>
  );
};

export default PageWrapper;
