import Image from "next/image";
import Logo from "../images/Logo.png";
import Search from "../images/search.png";
import Bag from "../images/shopping-bag.png";

const HeaderComponent = () => {
  return (
    <header className="header" style={{ gridColumn: "1 / -1",              // eller "content-start / content-end"
    display: "grid",
    gridTemplateColumns: "auto 1fr auto",
    alignItems: "center",
    gap: "1rem",
    padding: "10px 20px"}}>
      <a href="/" className="logo" aria-label="Logo" styling={{gridColumn: "1", justifySelf: "start",}}>
        <Image src={Logo} alt="Logo" width={48} height={48} />
      </a>

      <nav className="nav" style={{gridColumn: "2", justifySelf: "center"}}>
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
          <Image src={Search} alt="Logo" width={28} height={28} />
        </button>
        <span className="divider" />
        <button className="icon bag">
          <Image src={Bag} alt="Logo" width={28} height={28} />
        </button>
      </div>
    </header>

    
  );
};

export default HeaderComponent;
