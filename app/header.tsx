import { Link } from "@chakra-ui/next-js";
import { Flex } from "@chakra-ui/react";

export default function Header() {
  return (
    <Flex justifyContent="center" py={2}>
      <Link href="/" px={4} py={2}>Flights</Link>
    </Flex>
  );
}
