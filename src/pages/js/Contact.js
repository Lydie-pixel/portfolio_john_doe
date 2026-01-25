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
          </section>
        </div>
      </div>
    </div>
  );
}
export default Contact;
