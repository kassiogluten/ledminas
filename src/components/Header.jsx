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
    
      <Box pos="absolute" align="center" w="100vw">
        <Flex
          p="1rem"
          w="full"
          align="center"
          maxW={1200}
          justify="space-between"
        >
          <LogoSvg />
          <HStack fontSize="14px" color="white" fontWeight="700" display={{ base: "none", sm: "flex" }} spacing={10}>
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
    
  );
}

const Menu = () => (
  <>
    <Text as="a" href="#">
      Vantagens
    </Text>
    <Text as="a" href="#">
      Como funciona
    </Text>
    <Text as="a" href="#">
      Planos
    </Text>
    <Text as="a" href="#">
      Fale conosco
    </Text>
    
  </>
);
