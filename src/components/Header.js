import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="bg-dark text-white sticky-top">
      <nav className="navbar navbar-expand-lg container-fluid px-0">
        <a className="navbar-brand ps-3" href="/">
          JONH DOE
        </a>

        <button
          className="navbar-toggler nav-underline text-white"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto pe-3">
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "nav-link text-white fw-bold active-link"
                    : "nav-link text-white"
                }
              >
                ACCUEIL
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  isActive
                    ? "nav-link text-white fw-bold active-link"
                    : "nav-link text-white"
                }
              >
                SERVICES
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/portfolio"
                className={({ isActive }) =>
                  isActive
                    ? "nav-link text-white fw-bold active-link"
                    : "nav-link text-white"
                }
              >
                PORTFOLIO
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "nav-link text-white fw-bold active-link"
                    : "nav-link text-white"
                }
              >
                CONTACT
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/legal"
                className={({ isActive }) =>
                  isActive
                    ? "nav-link text-white fw-bold active-link"
                    : "nav-link text-white"
                }
              >
                MENTION LEGALES
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
