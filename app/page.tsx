"use client";

import { Box, Button, Flex, HStack, Input, VStack } from "@chakra-ui/react";
import FlightTable from "../components/FlightTable";
import { useState } from "react";
import { FlightDestinationsResult } from "amadeus-ts";
import FlightSearcher from "../components/FlightSearcher";

export default function Page() {
  const [result, setResult] = useState<FlightDestinationsResult>();
  
  function handleSearchFlights() {
    fetch("https://getflights-l2cuob5xda-uc.a.run.app")
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      return result;
    })
    .then(setResult)
    .catch(console.error);
  }
  
  return (
    <FlightSearcher />
    // <FlightTable result={result} />
  );
}
