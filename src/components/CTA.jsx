import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";

import React from "react";
import { BillboardSVG } from "../icons";

export function CTA() {
  return (
    <Box align="center" w="100vw" bg="white">
      <Flex
        pt={100}
        px="1rem"
        align="center"
        maxW={1200}
        justify="space-between"
        h={700}
        flexDir={{ base: "column", lg: "row" }}
      >
        <VStack align="start" textAlign="start">
          <HStack lineHeight="48px">
            <Text fontSize={{base: "20px", sm: "30px", md: "48px"}} color="texto">
              Quem não é{" "}
            </Text>
            <Text fontSize={{base: "30px", sm: "48px", md: "72px"}} fontWeight="700" color="laranja">
              visto
            </Text>
          </HStack>
          <HStack overflow="visible" pb={5} lineHeight="58px">
            <Text fontSize={{base: "20px", sm: "30px", md: "48px"}} color="texto">
              não é{" "}
            </Text>
            <Text fontSize={{base: "30px", sm: "48px", md: "72px"}} fontWeight="700" color="laranja">
              lembrado.
            </Text>
          </HStack>

          <Box w={65} h="4px" bg="amarelo" />
          <Text color="texto" maxW={337} py={10}>
            Somos o único painel de led <strong>Full HD de Caratinga.</strong>{" "}
            Anuncie mais de 3.200 vezes por mês com a Led Minas
          </Text>
          <Button
            colorScheme="blackAlpha"
            color="white"
            p="30px 50px"
            bg="laranja"
            fontSize="14px"
          >
            Conheça nossos planos
          </Button>
        </VStack>
        <Box py={50} maxW="500px">
          <Image alt="Billboard" src="/billboard.svg" />
        </Box>
      </Flex>
    </Box>
  );
}
