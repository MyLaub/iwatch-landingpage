"use client";
import Image from "next/image";
import Navy from "../images/navy.png";
import Mint from "../images/mint.png";
import Pink from "../images/pink.png"; 

const BottomComponent = () => {
    return ( 
        <section style={{display: "grid", gridTemplateColumns: "subgrid", gridColumn: "1 / -1",  placeSelf: "end", padding: "5rem 0rem",}}>
            <div className="arrows" style={{gridColumn: "1", placeItems: "end", display:"flex", fontSize:"inherit", gap:"1rem"}}>
          <button className="button-arrow">←</button>
          <span className="index" style={{color:"#fff"}}>1</span>
          <button className="button-arrow">→</button>
        </div>

         <ul className="watches" style={{gridColumn:"2", display:"flex", fontSize:"inherit", gap:"1rem", listStyle:"none", padding:0, margin:0}}>
          <li className="card" style={{ background: "rgba(67, 69, 88, 0.6)"}}>
            <Image src={Navy}  alt="Watch" className="img-watch-card" />
          </li>
          <li className="card" style={{ background: "rgba(106, 221, 204, 0.6)"}}>
            <Image src={Mint}  alt="Watch" className="img-watch-card"/>
          </li>
            <li className="card"  style={{ background: "rgba(249, 205, 196, 0.6)"}}>
            <Image src={Pink}alt="Watch" className="img-watch-card"/>
          </li>
        </ul>
        </section>

     );
}
 
export default BottomComponent;