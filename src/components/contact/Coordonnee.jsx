function Coordonnee() {
  return (
    <div className="coordonnee">
      <h3>John Doe</h3>
      <div>
        <div className="contact-info">
          <div className="d-flex align-items-center mb-2">
            <i className="bi bi-map me-2"></i>
            <span>40 Rue Laure Diebold,</span>
          </div>

          <div className="d-flex align-items-center mb-2">
            <i className="bi bi-geo-alt me-2"></i>
            <span>69009 Lyon, France</span>
          </div>

          <div className="d-flex align-items-center mb-2"></div>
          <i className="bi bi-phone me-2"></i>
          <span>10 20 30 40 50</span>
        </div>

        <div className="d-flex align-items-center mb-2">
          <i className="bi-envelope-at me-2"></i>
          <span>john.doe@gmail.com</span>
        </div>
      </div>
    </div>
  );
}
export default Coordonnee;
