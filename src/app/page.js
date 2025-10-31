"use client";
import { useState } from "react";

import Image from "next/image";
import Header from "./components/headerComponent";
import Button from "./components/buttonComponent";


import Navy from "./images/navy.png";
import Mint from "./images/mint.png";
import Pink from "./images/pink.png";

import Dot from "./components/dotComponent";

export default function Home() {
  const [activeImage, setActiveImage] = useState(Navy);
  return (
    <main className="grid-container">
      <Header />
      <section style={{ display: "grid", gridTemplateColumns: "subgrid", gridColumn: "1 / -1" }}>
        <h1 style={{ gridColumn: "1/2", alignSelf: "left", lineHeight: "1.2" }}>
          <strong style={{ fontWeight: "700" }}>The Perfect Moment</strong>
          <br />
          Between Past And Future.
        </h1>

        <Image src={activeImage} alt="Watch" style={{ gridColumn: "2/3" }} />

        <div style={{ gridColumn: "3", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "start", gap: "1rem" }}>
          <Dot color="#434558" activeImage={activeImage} setActiveImage={setActiveImage} relatedImage={Navy} />

          <Dot color="#0b1cb5ff" activeImage={activeImage} setActiveImage={setActiveImage} relatedImage={Mint} />

          <Dot color="#881f5dff" activeImage={activeImage} setActiveImage={setActiveImage} relatedImage={Pink}/>
        </div>
      </section>

      <Button />

      <section style={{ display: "grid", gridTemplateColumns: "subgrid", gridColumn: "1 / -1", placeSelf: "end", padding: "5rem 0rem" }}>
        <div className="arrows" style={{ gridColumn: "1", placeItems: "end", display: "flex", fontSize: "inherit", gap: "1rem" }}>
          <button className="button-arrow">←</button>
          <span className="index" style={{ color: "#fff" }}>
            1
          </span>
          <button className="button-arrow">→</button>
        </div>

        <ul className="watches" style={{ gridColumn: "2", display: "flex", fontSize: "inherit", gap: "1rem", listStyle: "none", padding: 0, margin: 0 }}>
          <li className="card" style={{ background: "rgba(67, 69, 88, 0.6)" }}>
            <Image onClick={() => setActiveImage(Navy)} src={Navy} alt="Watch" className="img-watch-card" />
          </li>
          <li className="card" style={{ background: "rgba(106, 221, 204, 0.6)" }}>
            <Image onClick={() => setActiveImage(Mint)} src={Mint} alt="Watch" className="img-watch-card" />
          </li>
          <li className="card" style={{ background: "rgba(249, 205, 196, 0.6)" }}>
            <Image onClick={() => setActiveImage(Pink)} src={Pink} alt="Watch" className="img-watch-card" />
          </li>
        </ul>
      </section>
    </main>
  );
}
