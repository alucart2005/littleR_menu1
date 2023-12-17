import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import * as AiIcons from "react-icons/ai";
import * as FaIcons from "react-icons/fa";
import { useState } from "react";

const Data = [
  {
    title: "Home",
    path: "/",
    cName: "nav-text",
  },
  {
    title: "Products",
    path: "/products",
    cName: "nav-text",
  },
  {
    title: "Reports",
    path: "/reports",
    cName: "nav-text",
  },
];

export function NavBar() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div>
      <nav>
        <ul>
          {Data.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
