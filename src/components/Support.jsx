import {
  Box,
  Button,
  Flex,
  HStack,
  Image,
  Text,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";

import React from "react";
import { EmailSvg, PhoneSvg, PinSvg, ZapSvg } from "../icons";
import { Form } from "./Form";

export function Support() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box align="center" w="100%" bg="white" id="fale-conosco">
      <Flex p="7rem 1rem" align="center" maxW={1200} flexDir="column">
        <HStack lineHeight="48px">
          <Text fontSize="36px" color="texto">
            Precisa de{" "}
          </Text>
          <Text fontSize="36px" fontWeight="700" color="laranja">
            ajuda?
          </Text>
        </HStack>

        <Box w={65} h="4px" bg="amarelo" />

        <Flex
          w="full"
          py={5}
          align="center"
          justify="space-between"
          flexDir={{ base: "column-reverse", lg: "row" }}
        >
          <VStack align="start">
            <Text fontSize="1.2rem" pb={10}>
              Fale com a gente pelos meios abaixo.
            </Text>
            <EmailSvg />
            <Text
              target="_blank"
              as="a"
              href="mailto:anuncie@ledminas.com.br"
              pb={3}
            >
              anuncie@ledminas.com.br
            </Text>
            <HStack>
              <PhoneSvg /> <ZapSvg />
            </HStack>
            <Text target="_blank" as="a" href="tel:33998169889" pb={3}>
              33 99816-9889
            </Text>
            <PinSvg />
            <Text
              target="_blank"
              as="a"
              href="https://goo.gl/maps/bv7YGcHKVyFYoNaH8"
            >
              Praça Cesário Alvim nº 80, Caratinga
            </Text>
            <Text
              target="_blank"
              as="a"
              href="https://goo.gl/maps/LRadog8oiivBXQzP6"
              pb={30}
            >
              Praça Israel Nunes, Vargem Alegre
            </Text>
            <Button
              onClick={onOpen}
              colorScheme="blackAlpha"
              color="white"
              p="30px 50px"
              bg="laranja"
              fontSize="14px"
            >
              Enviar uma mensagem
            </Button>
          </VStack>
          <Box>
            <Image py={50} src="/support.svg" alt="Fale conosco" />
          </Box>
        </Flex>
      </Flex>
      <Form isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
    </Box>
  );
}
