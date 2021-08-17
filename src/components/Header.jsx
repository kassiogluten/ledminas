import {
  Box,
  Flex,
  Heading,
  HStack,
  IconButton,
  Text,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";

import { FiMenu } from "react-icons/fi";
import React from "react";
import { LogoSvg } from "../icons";

import { useMyContext } from "../contexts/Context";

export function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isModalOpen, setIsModalOpen } = useMyContext();
  return (
    <Box pos="absolute" align="center" w="100vw">
      <Flex
        p="1rem"
        w="full"
        align="center"
        maxW={1200}
        justify="space-between"
      >
        <LogoSvg />
        <HStack
          fontSize="14px"
          color="white"
          fontWeight="700"
          display={{ base: "none", sm: "flex" }}
          spacing={10}
        >
          <Menu />
        </HStack>
        <IconButton onClick={onOpen} display={{ base: "flex", sm: "none" }}>
          <FiMenu />
        </IconButton>
      </Flex>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody pt={50}>
            <VStack spacing={10}>
              <Menu />
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}

const Menu = () => (
  <>
    <Text as="a" href="#vantagens">
      Vantagens
    </Text>
    <Text as="a" href="#como-funciona">
      Como funciona
    </Text>
    <Text as="a" href="#planos">
      Planos
    </Text>
    <Text as="a" href="#fale-conosco">
      Fale conosco
    </Text>
  </>
);
