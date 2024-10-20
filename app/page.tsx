import { Button, HStack, Input, VStack } from "@chakra-ui/react";
import FlightTable from "../components/FlightTable";

export default function Page() {
  return (
    <VStack spacing={10}>
      <HStack>
        <Input w="min" placeholder="From" />
        <Input w="min" placeholder="To" />
        <Button w="min">Find Flights</Button>
      </HStack>
      <FlightTable />
    </VStack>
  );
}
