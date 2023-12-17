import { Link } from "react-router-dom";

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
