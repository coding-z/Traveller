import { Button, Card, CardBody, Input, Stack } from "@chakra-ui/react";

export default function FlightSearcher() {
  return (
    <Card w={["90%", "md", "2xl", "4xl", "6xl"]}>
      <CardBody>
        <Stack direction={["column", null, "row"]}>
          <Input placeholder="From" size="lg" />
          <Input placeholder="To" size="lg" />
          <Button w="full" colorScheme="blue" size="lg">Find Flights</Button>
        </Stack>
      </CardBody>
    </Card>
  );
}
