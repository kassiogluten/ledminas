import {
  Box,
  Flex,
  Heading,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";

import React from "react";
import { DurationSvg, LoopSvg, TimeSvg, UpdateSvg } from "../icons";

export function HowWorks() {
  return (
    <Box align="center" w="100%" bg="white">
      <Flex
        p="7rem 1rem"
        align="center"
        maxW={950}
        justify="center"
        flexDir={{ base: "column", lg: "row" }}
        id="como-funciona"
      >
        <VStack>

        <HStack lineHeight="48px">
            <Text fontSize="36px" color="texto">
              Como{" "}
            </Text>
            <Text fontSize="36px" fontWeight="700" color="laranja">
              funciona?
            </Text>
          </HStack>

          <Box w={65} h="4px" bg="amarelo" />
          <Text size="14px" color="texto" py={10}>
            A Led Minas é um espaço de divulgação{" "}
            <strong>privilegiado e exclusivo</strong>, portanto as vagas de
            anúncios são limitadas para que a sua marca{" "}
            <strong>seja vista</strong> a todo momento.
          </Text>

         

          <Flex justify="center" flexWrap="wrap">
            <Card
              icon={<TimeSvg />}
              title="Horário de funcionamento"
              desc1="O telão funciona 18 horas por dia, de 6h00 às 0h00. Seu anúncio poderá ser visto nos horários com maior fluxo de pessoas."
            />
            <Card
              icon={<LoopSvg />}
              title="Número de repetições"
              desc1="Se todas as vagas estiverem preenchidas, cada anúncio será repetido, no mínimo a cada 10 minutos, totalizando 3.200 inserções ao mês."
            />
            <Card
              icon={<UpdateSvg />}
              title="Atualização dos vídeos"
              desc1="A Led Minas oferece uma enorme flexibilidade para atualizar seus anúncios. Os vídeos podem ser trocados sem custo adicional."
            />
            <Card
              icon={<DurationSvg />}
              title="Tempo de duração"
              desc1="Para que todo conteúdo possa ser visto por todos, o anúncio precisa ser objetivo, portanto cada vídeo terá a duração de 15 segundos."
            />
          </Flex>
        </VStack>
      </Flex>
    </Box>
  );
}

const Card = ({ icon, title, desc1 }) => (
  <HStack maxW={400} p={{base:"10px 0", sm:"32px"}} m={5} textAlign="start" align="start">
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
