import {
  Button,
  Center,
  DarkMode,
  Heading,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import Head from "next/head";
import { Advantages } from "../components/Advantages";
import { CTA } from "../components/CTA";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { HowWorks } from "../components/HowWorks";
import { Plans } from "../components/Plans";
import { Support } from "../components/Support";
import { Video } from "../components/Video";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { useMyContext } from "../contexts/Context";
import { useEffect } from "react";

export default function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { setSelectedCity } = useMyContext();

  function handleCity(city) {
    onClose();
    setSelectedCity(city);
  }

  useEffect(() => {
    onOpen();
  }, [onOpen]);

  return (
    <>
      <Head>
        <title>Led Minas - Marketing Direto</title>
      </Head>
      <Header onCityOpen={onOpen} />
      <Hero />
      <Advantages />
      <CTA />
      <HowWorks />
      <Video />
      <Plans onOpen={onOpen} />
      <Support />
      <Footer />
      <Modal size="xl" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent p="30px">
          <ModalCloseButton
            size={14}
            boxSize={10}
            m={3}
            color="laranja"
            bg="cinza"
          />
          <ModalBody>
            <Heading
              fontSize={24}
              borderLeftWidth={5}
              ml="-54px"
              pl="30px"
              borderColor="laranja"
              color="texto"
              fontWeight={400}
              sx={{ strong: { color: "laranja", fontWeight: 700 } }}
            >
              Selecione sua <strong>cidade</strong>
            </Heading>
            <Text my={50}>
              Estamos em 2 cidades até o momento, de qual cidade você deseja ver
              nossos serviços ?
            </Text>
            <Button
              colorScheme="blackAlpha"
              bg="amarelo"
              w="full"
              fontSize={14}
              my={2}
              mr={3}
              p={6}
              onClick={() => handleCity("Caratinga")}
            >
              Caratinga / MG
            </Button>{" "}
            <Heading my={4} color="texto" fontSize={14} textAlign="center">
              OU
            </Heading>
            <Button
              colorScheme="blackAlpha"
              bg="bordo"
              w="full"
              fontSize={14}
              my={2}
              mr={3}
              p={6}
              onClick={() => handleCity("Vargem Alegre")}
            >
              Vargem Alegre / MG
            </Button>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
