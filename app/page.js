import Image from "next/image";
import Header from "./Pages/Header";
import Hero from "./Pages/Hero";
import Card from "./Pages/Card";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Card />
    </>
  );
}
