import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="bg-dark text-white">
      <nav className="navbar navbar-expand-lg container">
        <a className="navbar-brand" href="/">
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
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                ACCUEIL
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/services">
                SERVICES
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/portfolio">
                PORTFOLIO
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
                CONTACT
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/legal">
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
