import Image from "next/image";
import Header from "./Pages/Header";
import Hero from "./Pages/Hero";
import Card from "./Pages/Card";
import About from "./Pages/About";
import Service from "./Pages/Service"
import ClientSection from "./Pages/ClientSection";
import ClientCard from "./pages/ClientCard";
export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Card />
      <About/>
      <Service/>
      <ClientSection/>
      <ClientCard/>
    </>
  );
}
