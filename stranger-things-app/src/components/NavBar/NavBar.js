import "./NavBar.css";
import stranger_things from "../../Assets/Principais/stranger_things.png";

import { NavLink, Outlet } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar">
      <nav>
        <NavLink
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
          to="/"
        >
          <img src={stranger_things} alt="Logo de Stranger Things"></img>
        </NavLink>

        <div className="mobile-menu">
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>

        <ul className="nav-list">
          <NavLink
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            to="sobre"
          >
            Sobre
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            to="noticias"
          >
            Notícias
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            to="personagens"
          >
            Personagens
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            to="temporadas"
          >
            Temporadas
          </NavLink>
        </ul>
      </nav>
      <>
        <Outlet />
      </>
    </div>
  );
}

export default NavBar;
