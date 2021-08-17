import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Heading,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";

import React from "react";

export function Plans() {
  return (
    <Box
      align="center"
      w="100%"
      bg="linear-gradient(281.49deg, #5C1331 -8.07%, #F35822 48.51%, #FA9D1C 106.56%)"
      id="planos"
    >
      <Flex px="1rem" maxW={1200} flexDir="column" py="80px">
        <VStack>
          <Text fontSize="36px" color="white">
            Conheça nossos planos para <strong>Caratinga</strong>
            <ChevronDownIcon />
          </Text>

          <Box w={65} h="4px" bg="amarelo" />
        </VStack>
        <Flex py="80px" flexWrap="wrap" justifyContent="space-evenly">
          <Card title="MENSAL" subtitle="Pagamento único" value="R$ 599,90" />

          <Card
            title="TRIMESTRAL "
            subtitle="Pagamento mensal por 3 meses "
            value="R$ 499,90"
            saveup="Economize R$ 300,00 em relação ao mensal"
          />

          <Card
            title="SEMESTRAL"
            subtitle="Pagamento mensal por 6 meses "
            value="R$ 449,90"
            saveup="Economize R$ 900,00 em relação ao mensal"
          />
          <Card
            title="ANUAL"
            subtitle="Pagamento mensal por 12 meses "
            value="R$ 399,90"
            saveup="Economize R$ 3000,00 em relação ao mensal"
          />
        </Flex>
      </Flex>
    </Box>
  );
}

const Card = ({ title, subtitle, value, saveup, desc2 }) => (
  <VStack w={270} h={360} p="30px" my={5} bg="white" borderRadius={5}>
    <Heading
      lineHeight="100%"
      textTransform="uppercase"
      fontSize={30}
      color="laranja"
    >
      {title}
    </Heading>
    <Text
      pb={5}
      fontSize="14px"
      lineHeight="100%"
      w="full"
      borderBottomWidth={2}
      borderColor="gray.100"
    >
      {subtitle}
    </Text>
    <Heading fontSize={36} color="laranja" py={5}>
      {value}
    </Heading>
    <Spacer />
    <Text pb={5} fontSize="14px">
      {saveup}
    </Text>
    <Button onClick={()=> alert('Em construção')}
      colorScheme="blackAlpha"
      color="white"
      p="25px 50px"
      bg="amarelo"
      fontSize="0.8rem"
    >
      Quero esse
    </Button>
  </VStack>
);
