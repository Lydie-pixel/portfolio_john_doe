function Footer() {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>John Doe</h5>
            <p>40 rue Laure Diebold 69009 Lyon, France</p>
            <p>10 20 30 40 50</p>
            <p>john.doe@gmail.com</p>
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
              <li>Projet 1</li>
              <li>Projet 2</li>
              <li>Projet 3</li>
              <li>Projet 4</li>
              <li>Projet 5</li>
              <li>Projet 6</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
