import {
  Box,
  Flex,
  Text,
} from "@chakra-ui/react";

import React from "react";

export function Footer() {
  return (
    <Box
      align="center"
      w="100vw"
      bg="linear-gradient(281.49deg, #5C1331 -8.07%, #F35822 48.51%, #FA9D1C 106.56%)"
    >
      <Flex fontSize="14px" color="white" px="1rem" maxW={500} py="25px" justify="space-between">
        <Text>Led Minas - Todos direitos reservados</Text>
        <Text px={2}>|</Text>
        <Text>Feito por <strong>Suricato Agência</strong>  </Text>
      </Flex>
    </Box>
  );
}
