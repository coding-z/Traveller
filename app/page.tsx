import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";

export default function Page() {
  return (
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
  );
}
