import Formulaire from "../../components/contatc/Formulaire";
import Coordonnee from "../../components/contatc/Coordonnee";
import "../css/contact.css";

function Contact() {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Contact</h1>
      <p>
        Pour me contatcer en vue d'un entretien ou d'une future collaboration,
        merci de remplir le formulaire de contact
      </p>

      <div className="row">
        <div className="col-md-6">
          <h2 className="border-bottom border-primary">
            Formulaire de contact
          </h2>
          <section className="section">
            <Formulaire />
          </section>
        </div>

        <div className="col-md-6">
          <h2 className="border-bottom border-primary">Mes coordonnées</h2>
          <section className="section">
            <Coordonnee />
            <section className="section">
              <div className="map-container">
                <iframe
                  title="Localisation"
                  src="https://www.google.com/maps?q=40%20rue%20Laure%20Diebold%2069009%20Lyon&output=embed"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </section>
          </section>
        </div>
      </div>
    </div>
  );
}
export default Contact;
