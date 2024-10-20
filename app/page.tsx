import { Button, Flex, HStack, Input, VStack } from "@chakra-ui/react";
import FlightTable from "../components/FlightTable";

export default function Page() {
  return (
    <VStack w="full" h="full" spacing={100}>
      <Flex w="full" h={300} bgImage="url('/aircraft-background-image.jpg')" bgSize="cover" bgPosition="center" justifyContent="center" alignItems="center">
        <HStack bgColor="white" p={50} borderRadius="lg">
          <Input w="min" placeholder="From" />
          <Input w="min" placeholder="To" />
          <Button w="min">Find Flights</Button>
        </HStack>
      </Flex>
      <FlightTable />
    </VStack>
  );
}
