import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-4 mb-md-0">
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
            <div className="footer-icons">
              <i className="bi-github"></i>
              <i className="bi bi-twitter"></i>
              <i className="bi bi-linkedin"></i>
            </div>
          </div>

          <div className="col-md-4 mb-4 mb-md-0">
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

          <div className="col-md-4 mb-4 mb-md-0">
            <h5>Dernières réalisations</h5>
            <ul className="list-unstyled">
              <li>
                <NavLink className="nav-link" to="/portfolio#fresh-food">
                  Fresh Food
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link" to="/portfolio#akira">
                  Restaurant Akira
                </NavLink>
              </li>
              <li>
                <NavLink to="/portfolio#bien-etre" className="nav-link">
                  Espace bien-être
                </NavLink>
              </li>
              <li>
                <NavLink to="/portfolio#seo" className="nav-link">
                  SEO
                </NavLink>
              </li>
              <li>
                <NavLink to="/portfolio#api" className="nav-link">
                  Création d'un API
                </NavLink>
              </li>
              <li>
                <NavLink to="/portfolio#maquette" className="nav-link">
                  Maquette d'un site
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
