import { Flex, Heading } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Flex
      bgColor="gray.500"
      w="full"
      minH={16}
      direction="row"
      justify="center"
      align="center"
    >
      <Heading color="white" size="md">
        Footer
      </Heading>
    </Flex>
  );
}
