import Image from "next/image";
import NavyWatch from "../images/navy.png";
// import ColorIndicator from "../images/color-indicator.png";
import Dot from "./dotComponent";

const HeroComponent = () => {
  return (
    <section style={{ display: "grid", gridTemplateColumns: "subgrid", gridColumn: "1 / -1" }}>
      <h1 style={{ gridColumn: "1/2", alignSelf: "left", lineHeight: "1.2" }}>
        <strong style={{ fontWeight: "700" }}>The Perfect Moment</strong>
        <br />
        Between Past And Future.
      </h1>

      <Image src={NavyWatch} alt="Watch" style={{ gridColumn: "2/3" }} /> 
      {/* <Image src={NavyWatch} alt="Color Indicator" style={{ display: "grid", gridColumn: "3/4", justifySelf: 
      "start"}} /> */}

      <div style={{gridColumn:"3", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"start", gap:"1rem"}}>

      <Dot color="#434558" relatedImage={NavyWatch} />

      <Dot color="#434558" relatedImage={NavyWatch} />

      <Dot color="#434558" relatedImage={NavyWatch} />
      </div>
    </section>
  );
};

export default HeroComponent;
