import { Flex } from "@chakra-ui/react";
import React from "react";
import Header from "./header";

export default function RootTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Flex flexDirection="column" justifyContent="flex-start" w="full" h="full">
      <Header />
      {children}
    </Flex>
  );
}
