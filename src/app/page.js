"use client";
import { useState } from "react";

import Image from "next/image";
import Header from "./components/headerComponent";
import Button from "./components/buttonComponent";

import Dot from "./components/dotComponent";

export default function Home() {
  const [activeImage, setActiveImage] = useState("/navy.png");
  return (
    <main className="grid-container m-10 max-h-screen">
      <Header />
      <section className="col-span-full grid grid-cols-subgrid">
        <h1 className="col-start-1 col-end-2 self-start leading-[1.2]">
          <strong className="font-semibold">The Perfect Moment</strong>
          <br />
          Between Past And Future.
        </h1>

        <Image
          width={500}
          height={500}
          src={activeImage}
          alt="Watch"
          className="col-start-2 col-end-3"
        />

        <div className="col-start-3 col-end-4 flex flex-col place-items-start justify-center gap-4">
          <Dot
            color="blue"
            activeImage={activeImage}
            setActiveImage={setActiveImage}
            relatedImage={"/navy.png"}
          />
          <Dot
            color="green"
            activeImage={activeImage}
            setActiveImage={setActiveImage}
            relatedImage={"/mint.png"}
          />
          <Dot
            color="pink"
            activeImage={activeImage}
            setActiveImage={setActiveImage}
            relatedImage={"/pink.png"}
          />
        </div>
      </section>

      <Button />

      <section className="col-span-full grid grid-cols-subgrid self-end py-20">
        <div className="arrows grid-column-1 flex items-end gap-4 text-xl text-white">
          <button >←</button>
          <span >1</span>
          <button>→</button>
        </div>

        <ul className="watches col-start-2 col-end-3 m-0 flex list-none justify-center gap-4 p-0">
          <li className="aspect-video relative w-full rounded-2xl overflow-visible place-items-end" style={{ background: "rgba(67, 69, 88, 0.6)" }}>
            <Image
              width={300}
              height={300}
              onClick={() => setActiveImage("/navy.png")}
              src={"/navy.png"}
              alt="Watch"
              className="absolute w-32 place-self-center h-auto block object-contain translate-y-6"
            />
          </li>
          <li
            className="aspect-video relative w-full rounded-2xl overflow-visible place-items-end"
            style={{ background: "rgba(106, 221, 204, 0.6)" }}
          >
            <Image
              width={300}
              height={300}
              onClick={() => setActiveImage("/mint.png")}
              src={"/mint.png"}
              alt="Watch"
              className="absolute w-32 place-self-center h-auto block object-contain translate-y-6"
            />
          </li>
          <li
            className="aspect-video relative w-full rounded-2xl overflow-visible place-items-end"
            style={{ background: "rgba(249, 205, 196, 0.6)" }}
          >
            <Image
              width={300}
              height={300}
              onClick={() => setActiveImage("/pink.png")}
              src={"/pink.png"}
              alt="Watch"
              className="absolute w-32 place-self-center h-auto block object-contain translate-y-6"
            />
          </li>
        </ul>
      </section>
    </main>
  );
}
