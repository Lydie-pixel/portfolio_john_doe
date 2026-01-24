import Formulaire from "../components/contatc/Formulaire";
import Coordonnee from "../components/contatc/Coordonnee";

function Contact() {
  return (
    <div className="container">
      <h1>Contact</h1>
      <div>
        Pour me contatcer en vue d'un entretien ou d'une future collaboration,
        merci de remplir le formulaire de contact
      </div>

      <section>
        <h2>Formulaire de contact</h2>
        <Formulaire />
      </section>

      <section>
        <h2>Mes coordonnées</h2>
        <Coordonnee />
      </section>
    </div>
  );
}
export default Contact;
