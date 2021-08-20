import React, { useState } from "react";
import {
  Text,
  VStack,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Heading,
  Button,
  Input,
  FormLabel,
  useToast,
  Textarea,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";

import axios from "axios";

export function Form({ isOpen, onOpen, onClose }) {
  const {
    register,
    trigger,
    reset,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "all" });
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();

  async function handleSendMessage(data) {
    setIsLoading(true);

    try {
      const { Nome, Email, Telefone, Empresa, Assunto, Mensagem } = data;

      await axios.post("/api/mail/contact", {
        name: Nome,
        phone: Telefone,
        email: Email, 
        company: Empresa, 
        subject: Assunto, 
        message: Mensagem, 
      });

      toast({
        title: "Obrigado.",
        description: "Sua mensagem foi enviada",
        status: "success",
        isClosable: true,
        position: "top",
      });

      reset({ Nome: "", Telefone: "" });

      onClose();
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      toast({
        title: "Ocorreu um erro.",
        description:
          "Por favor, tente novamente mais tarde ou entre em contato com a gente através do WhatsApp.",
        status: "error",
        isClosable: true,
        position: "top",
      });
    }
  }

  return (
    <Drawer size="md" isOpen={isOpen} placement="right" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton
          size={14}
          boxSize={10}
          m={7}
          color="laranja"
          bg="cinza"
        />
        <DrawerBody
          pt={50}
          px={14}
          as="form"
          onSubmit={handleSubmit(handleSendMessage)}
        >
          <VStack py={8} align="start">
            <Heading
              fontSize={24}
              borderLeftWidth={7}
              ml="-57px"
              pl="40px"
              borderColor="laranja"
              color="texto"
              sx={{ strong: { color: "laranja" } }}
            >
              Fale com a <strong>gente</strong>
            </Heading>
            <Text>
              Para falar com a gente, basta preencher o formulário. Retonaremos
              em breve pelo seu e-mail ou número.
            </Text>

            <FormLabel htmlFor="Nome">Nome</FormLabel>
            <Input
              id="Nome"
              borderColor={errors.Nome ? "red" : "inherit"}
              p="25px"
              placeholder="Qual seu nome"
              type="text"
              {...register("Nome", { required: true })}
            />
            {errors.Nome && <Text color="red">Nome obrigatório!</Text>}

            <FormLabel htmlFor="Email">E-mail</FormLabel>
            <Input
              id="Email"
              borderColor={errors.Email ? "red" : "inherit"}
              p="25px"
              placeholder="Qual seu melhor e-mail ?"
              type="text"
              {...register("Email", { required: true })}
            />
            {errors.Email && <Text color="red">Email obrigatório!</Text>}

            <FormLabel htmlFor="Telefone">Telefone</FormLabel>
            <Input
              id="Telefone"
              borderColor={errors.Telefone ? "red" : "inherit"}
              p="25px"
              placeholder="Digite seu Telefone"
              type="text"
              {...register("Telefone", { required: true })}
            />
            {errors.Telefone && <Text color="red">Telefone obrigatório!</Text>}

            <FormLabel htmlFor="Empresa">Nome da empresa</FormLabel>
            <Input
              id="Empresa"
              p="25px"
              placeholder="Qual nome da sua empresa"
              type="text"
              {...register("Empresa")}
            />

            <FormLabel htmlFor="Assunto">Assunto</FormLabel>
            <Input
              id="Assunto"
              p="25px"
              placeholder="Qual seria o assunto?"
              type="text"
              {...register("Assunto")}
            />

            <FormLabel htmlFor="Assunto">Mensagem</FormLabel>
            <Textarea
              id="Mensagem"
              placeholder="Deixe sua mensagem?"
              {...register("Mensagem")}
            />
          </VStack>
          {!isValid ? (
            <Button
              sx={{ cursor: "not-allowed" }}
              opacity=".3"
              bg="laranja"
              colorScheme="white"
              h="56px"
              w="100%"
              fontSize="14px"
              onClick={() => {
                trigger();
              }}
            >
              Enviar mensagem
            </Button>
          ) : (
            <Button
              isLoading={isLoading}
              bg="laranja"
              colorScheme="white"
              h="56px"
              w="100%"
              type="submit"
              fontSize="14px"
            >
              Enviar mensagem
            </Button>
          )}
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}
