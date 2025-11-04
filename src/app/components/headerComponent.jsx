import Image from "next/image";
import Logo from "../images/Logo.png";
import Search from "../images/search.png";
import Bag from "../images/shopping-bag.png";
import { DiApple } from "react-icons/di";
import { SlMagnifier } from "react-icons/sl";
import { SlBag } from "react-icons/sl";

const HeaderComponent = () => {
  return (
    <header className="header" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1.5rem 0rem", gridColumn: "1 / -1" }}>
      <a href="/" className="logo" styling={{ gridColumn: "1", justifySelf: "start" }}>
        {/* <Image src={Logo} alt="Logo" width={48} height={48} /> */}
        <DiApple size={60} color="white" />
      </a>

      <nav className="nav" style={{ gridColumn: "2", justifySelf: "center" }}>
        <ul style={{ display: "flex", gap: "5rem", listStyle: "none", margin: 0, padding: 0, textDecoration: "none" }}>
          <li style={{ textDecoration: "none" }}>
            <a href="#">Mac</a>
          </li>
          <li>
            <a href="#">IPhone</a>
          </li>
          <li>
            <a href="#">IPad</a>
          </li>
          <li>
            <a href="#">IWatch</a>
          </li>
          <li>
            <a href="#">Support</a>
          </li>
        </ul>
      </nav>

      <div className="actions" style={{ display: "flex", alignItems: "center", gap: "15px" }}>
        <button className="icon search">
          {/* <Image src={Search} alt="Logo" width={28} height={28} /> */}
          <SlMagnifier size={28} color="white" />
        </button>
        <span className="divider" />
        <button className="icon bag">
          {/* <Image src={Bag} alt="Logo" width={28} height={28} /> */}
          <SlBag size={28} color="white" />
        </button>
      </div>
    </header>
  );
};

export default HeaderComponent;
