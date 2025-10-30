import Image from "next/image";
import Header from "./components/headerComponent";
import Hero from "./components/heroComponent";
import Button from "./components/buttonComponent";
import Bottom from "./components/bottomComponent";

export default function Home() {
  return (
    <main className="grid-container">
  <Header />
  
  <Hero />
  <Button />
  <Bottom />
    
  </main>
  );
}
