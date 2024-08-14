import Image from "next/image";
import Header from "./Pages/Header";
import Hero from "./Pages/Hero";
import Card from "./Pages/Card";
import About from "./Pages/About";
import Styles from "./Pages/Styles.css";
import Service from "./Pages/Service"
import Project from "./Pages/Project";
import Index from "./Pages/Index.css";
import Testimonial from "./Pages/Testimonial";
import Team from "./Pages/Team";
import Footer from "./Pages/Footer";
import OurClientCards from "./Pages/OurClients";
import Navbar from "./Pages/NavBar";
export default function Home() {
  return (
    <>
    <Navbar/>
      <Header />
      <Hero />
      <Card />
      <About/>
      <Styles/>
      <Service/>
      <OurClientCards/>
      <Project/>
      <Testimonial/>
      <Team/>
      <Footer/>
     
    </>
  );
}
