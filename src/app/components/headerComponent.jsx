import { DiApple } from "react-icons/di";
import { SlMagnifier } from "react-icons/sl";
import { SlBag } from "react-icons/sl";

const HeaderComponent = () => {
  return (
    <header
      className="header col-span-full flex items-center justify-between px-0 py-6"
      // style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1.5rem 0rem", gridColumn: "1 / -1" }}
    >
      <a href="/" className="logo col-start-1 col-end-2 justify-self-auto">
     
        <DiApple size={60} color="white" />
      </a>

      <nav className="nav col-start-2 col-end-3 justify-self-center" 
      >
        <ul className="flex gap-20 list-none m-0 p-0 decoration-none"
      
        >
          <li className="decoration-none"
         >
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

      <div
        className="actions flex gap-4 items-center"
        
      >
        <button className="icon search">
         
          <SlMagnifier size={28} color="white" />
        </button>
        <span className="divider" />
        <button className="icon bag">
      
          <SlBag size={28} color="white" />
        </button>
      </div>
    </header>
  );
};

export default HeaderComponent;
