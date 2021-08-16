import { Container } from "@chakra-ui/react";
import Head from "next/head";
import { Advantages } from "../components/Advantages";
import { CTA } from "../components/CTA";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Led Minas - Marketing Direto</title>
      </Head>
      <Header />
      <Hero />
      <Advantages />
      <CTA />
    </div>
  );
}
