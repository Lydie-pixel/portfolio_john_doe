function Footer() {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>John Doe</h5>
            <p>
              40 rue Laure Diebold <br></br>
              69009 Lyon, France<br></br>
              10 20 30 40 50<br></br>
              john.doe@gmail.com
            </p>
            <i className="bi-github"></i>
            <i className="bi bi-twitter"></i>
            <i className="bi bi-linkedin"></i>
          </div>

          <div className="col-md-4">
            <h5>Liens</h5>
            <ul className="list-unstyled">
              <li>Accueil</li>
              <li>Services</li>
              <li>Portfolio</li>
              <li>Me contacter</li>
              <li>Mentions légales</li>
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
