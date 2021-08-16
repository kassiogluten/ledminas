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

import { FaThList } from "react-icons/fa";
import React from "react";
import { LogoSvg } from "../icons";

import { useMyContext } from "../contexts/Context";

export function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isModalOpen, setIsModalOpen } = useMyContext();
  return (
    <header>
      <Box pos="fixed" align="center" w="100vw" bg="gray.100">
        <Flex
          p="1rem"
          w="full"
          align="center"
          maxW={1200}
          bg="gray.50"
          justify="space-between"
        >
          <LogoSvg />
          <HStack display={{ base: "none", sm: "flex" }} spacing={10}>
            <Menu />
          </HStack>
          <IconButton onClick={onOpen} display={{ base: "flex", sm: "none" }}>
            <FaThList />
          </IconButton>
        </Flex>
        <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Menu</DrawerHeader>

            <DrawerBody>
              <VStack spacing={10}>
                <Menu />
              </VStack>
              <Button variant="outline" mr={3} onClick={onClose}>
                Botao1
              </Button>
              <Button colorScheme="blue">Botao2</Button>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>
    </header>
  );
}

const Menu = () => (
  <>
    <Text as="a" href="#">
      Link1
    </Text>
    <Text as="a" href="#">
      Link2
    </Text>
    <Text onClick={() => setIsModalOpen(!isModalOpen)} as="a" href="#">
      Link3
    </Text>
  </>
);