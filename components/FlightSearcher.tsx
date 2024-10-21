import { Button, Card, CardBody, Input, Stack } from "@chakra-ui/react";

export default function FlightSearcher() {
  return (
    <Card w={["90%", null, "2xl", "4xl", "6xl"]}>
      <CardBody>
        <Stack direction={["column", null, null, null, "row"]} justify="space-between">
          <Stack direction={["column", null, null, "row"]} justify="space-between" flexGrow={1}>
            <Stack direction={["column", "row"]} flexGrow={1}>
              <Input placeholder="From" />
              <Input placeholder="To" />
            </Stack>
            <Stack direction={["column", "row"]} flexGrow={1}>
              <Input placeholder="Date" type="date" />
              <Input placeholder="Adults" type="number" />
            </Stack>
          </Stack>
          <Button colorScheme="blue" w={["full", null, null, null, "3xs"]}>Search</Button>
        </Stack>
      </CardBody>
    </Card>
  );
}
