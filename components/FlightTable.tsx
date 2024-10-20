import { Card, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";

export default function FlightTable() {
  return (
    <Card>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>From</Th>
              <Th>To</Th>
              <Th>Date</Th>
              <Th>Price</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>somewhere</Td>
              <Td>somewhere else</Td>
              <Td>now</Td>
              <Td>expensive</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Card>
  );
}
