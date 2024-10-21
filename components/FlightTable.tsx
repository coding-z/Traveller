import { Card, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { FlightDestinationsResult } from "amadeus-ts";

export default function FlightTable({ result }: { result: FlightDestinationsResult }) {
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
            {
              result &&
              result.data.map((flight) => (
                <Tr key={flight.origin + flight.destination}>
                  <Td>{flight.origin}</Td>
                  <Td>{flight.destination}</Td>
                  <Td>{flight.departureDate}</Td>
                  <Td>{flight.price.total}</Td>
                </Tr>
              ))
            }
          </Tbody>
        </Table>
      </TableContainer>
    </Card>
  );
}
