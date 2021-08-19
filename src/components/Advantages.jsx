import { Box, Flex, Heading, Text, VStack } from "@chakra-ui/react";

import React from "react";
import { useMyContext } from "../contexts/Context";
import { CoinSvg, EyeSvg, ScreenSvg } from "../icons";

export function Advantages() {
  const { selectedCity } = useMyContext();
  return (
    <Box
      align="center"
      w="100%"
      bg="linear-gradient(281.49deg, #5C1331 -8.07%, #F35822 48.51%, #FA9D1C 106.56%)"
      id="vantagens"
    >
      <Flex
        px="1rem"
        maxW={1100}
        flexDir={{ base: "column", sm: "row" }}
        py="80px"
        flexWrap="wrap"
        justifyContent="space-evenly"
      >
        <Card
          icon={<EyeSvg />}
          title="Maior visibilidade"
          desc1="Seu anúncio pode ser visto a metros do telão."
          desc2="Sua alta resolução, cores, imagens e efeitos vão fazer com que qualquer
      pessoa pare e olhe a sua mensagem."
        />

        <Card
          icon={<CoinSvg />}
          title="Ótimo custo-benefício"
          desc1="É possível divulgar por mais tempo e ser visto mais vezes do que na TV, jornal e rádios."
        />

        <Card
          icon={<ScreenSvg />}
          title="Localização privilegiada"
          desc1={`O painel está localizado na ${selectedCity === "Caratinga" ? "Praça Cesário Alvim, nº 80, no Center Posto (antigo posto Esso)." : "Praça Israel Nunes"} `}
          desc2="Um local com tráfego intenso durante todo o dia."
        />
      </Flex>
    </Box>
  );
}

const Card = ({ icon, title, desc1, desc2 }) => (
  <VStack
    maxW={330}
    p="44px 32px"
    m={2}
    textAlign="start"
    align="start"
    bg="white"
    borderRadius={5}
  >
    {icon}
    <Heading py={3} textTransform="uppercase" size={18} color="laranja">
      {title}
    </Heading>
    <Text>{desc1}</Text>
    <Text>{desc2}</Text>
  </VStack>
);
