import { Container } from "@chakra-ui/react";
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
      <HowWorks />
      <Video />
      <Plans />
      <Support />
      <Footer />
    </div>
  );
}
