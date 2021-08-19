import { Box, Flex, Heading } from "@chakra-ui/react";

import React from "react";
import { useMyContext } from "../contexts/Context";

export function Hero() {
  const { selectedCity } = useMyContext();
  return (
    <Box
      h="90vh"
      minH={400}
      maxH={900}
      bg={`url(/banner${selectedCity === 'Caratinga' ? '1' : '2'}.jpg) center center`}
      bgSize="cover"
    >
      <Flex
        pt={100}
        px="1rem"
        align="center"
        maxW={1200}
        justify="space-between"
        maxH={900}
        flexDir={{ base: "column", sm: "row" }}
      ></Flex>
    </Box>
  );
}
