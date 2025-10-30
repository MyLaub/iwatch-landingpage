import Image from "next/image";
import Header from "./components/headerComponent";
import Hero from "./components/heroComponent";

export default function Home() {
  return (
    <main className="grid-container">
  <Header />
  
  <Hero />
  </main>
  );
}
