import { Flex } from "@chakra-ui/react";
import React from "react";
import Footer from "./footer";
import Header from "./header";

export default function RootTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Flex
      direction="column"
      w="full"
      justify="space-between"
      align="center"
      flexGrow={1}
    >
      <Header />
      {children}
      <Footer />
    </Flex>
  );
}
