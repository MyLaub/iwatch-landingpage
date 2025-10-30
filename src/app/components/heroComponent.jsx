import Image from "next/image";
import NavyWatch from "../images/navy.png";
// import ColorIndicator from "../images/color-indicator.png";

const HeroComponent = () => {
  return (
    <section style={{ display: "grid", gridTemplateColumns: "subgrid", gridColumn: "1 / -1", }}>
      <h1 style={{gridColumn: "1/2", alignSelf: "left", lineHeight: "1.2" }}>
        <strong style={{ fontWeight: "700" }}>The Perfect Moment</strong>
        <br />
        Between Past And Future.
      </h1>

      <Image src={NavyWatch} alt="Watch" style={{gridColumn: "2/3" }} />
      {/* <Image src={ColorIndicator} alt="Color Indicator" style={{ display: "grid", gridColumn: "3/4", justifySelf: "start"}} /> */}
    </section>
  );
};

export default HeroComponent;
