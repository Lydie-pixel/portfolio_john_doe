import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>John Doe</h5>
            <span>
              40 rue Laure Diebold <br />
              69009 Lyon, France
              <br />
              10 20 30 40 50
              <br />
              john.doe@gmail.com
              <br />
            </span>
            <i className="bi-github text-secondary"></i>
            <i className="bi bi-twitter text-secondary"></i>
            <i className="bi bi-linkedin text-secondary"></i>
          </div>

          <div className="nav col-md-4">
            <h5>Liens</h5>
            <ul className="list-unstyled">
              <li>
                <NavLink className="nav-link" to="/">
                  Accueil
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link" to="/services">
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link" to="/portfolio">
                  Portfolio
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link" to="/contact">
                  Me contacter
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link" to="/legal">
                  Mentions légales
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="col-md-4">
            <h5>Dernières réalisations</h5>
            <ul className="list-unstyled">
              <li>Fresh Food</li>
              <li>Restaurant Akira</li>
              <li>Espace bien-être</li>
              <li>SEO</li>
              <li>Création d'un API</li>
              <li>Maquette d'un site</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
