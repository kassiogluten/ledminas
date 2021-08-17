import {
  Box,
  Flex,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";

import React from "react";
import {
  AudioSvg,
  DurationSvg,
  LoopSvg,
  ResolutionSvg,
  TextSvg,
  TimeSvg,
  UpdateSvg,
} from "../icons";

export function Video() {
  return (
    <Box align="center" w="100vw" bg="white">
      <Flex
        p="1rem 1rem 7rem"
        align="center"
        maxW={1200}
        justify="center"
        flexDir={{ base: "column", lg: "row" }}
      >
        <VStack>
          <HStack lineHeight="48px">
            <Text fontSize="36px" color="texto">
              E o{" "}
            </Text>
            <Text fontSize="36px" fontWeight="700" color="laranja">
              vídeo?
            </Text>
          </HStack>

          <Box w={65} h="4px" bg="amarelo" />
          <Text maxW={950} size="14px" color="texto" py={10}>
            O anunciante deverá enviar um vídeo de 15 segundos para ser inserido
            no telão. Para ter um melhor aproveitamento do tempo de anúncio,
            recomendamos dividir as informações em 3 blocos: chamada, oferta e
            contato.
          </Text>
          <Image py={50} src="/video.svg" alt="Video"></Image>
          <Flex
          py={5}
            align="center"
            justify="center"
            flexDir={{ base: "column-reverse", lg: "row" }}
          >
            <Image
              width={{ base: 200, md: 320 }}
              transform={{ base: "translateX(20%)", md: "translateX(0)" }}
              py={50}
              src="/take.svg"
              alt="Take"
            />
            <Flex justify={{ base: "center", md: "start" }} flexWrap="wrap">
              <Card
                icon={<ResolutionSvg />}
                title="RESOLUÇÃO"
                desc1="Para que o vídeo encaixe perfeitamente no telão, ele deve ter a resolução de 430px x 290px. "
              />
              <Card
                icon={<AudioSvg />}
                title="ÁUDIO"
                desc1="O telão não possúi alto-falantes, portanto as imagens precisam ser claras. Se necessário, adicione textos para transmitir melhor sua mensagem."
              />
              <Card
                icon={<TextSvg />}
                title="TEXTOS"
                desc1="Os textos devem ser objetivos e com fontes grandes, fontes cursivas e/ou com muitos detalhes não são legíveis. Evite fundo branco, o brilho ofusca as informações."
              />
            </Flex>
          </Flex>
        </VStack>
      </Flex>
    </Box>
  );
}

const Card = ({ icon, title, desc1 }) => (
  <HStack
    maxW={350}
    p={{ base: "10px 0", sm: "12px" }}
    m={4}
    textAlign="start"
    align="start"
  >
    <Box pt={3} mr={5} h="100%">
      {icon}
    </Box>
    <VStack textAlign="start" align="start">
      <Heading py={1} textTransform="uppercase" size={18} color="laranja">
        {title}
      </Heading>
      <Text fontSize="14px">{desc1}</Text>
    </VStack>
  </HStack>
);
