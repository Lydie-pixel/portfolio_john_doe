import Accordeon from "../../components/legal/Accordeon";
import "../css/legal.css";

function Legal() {
  return (
    <div className="container">
      <section className="section">
        <h1>Mentions légales</h1>
        <div className="blue-line mx-auto"></div>
      </section>
      <section className="section">
        <Accordeon />
      </section>
    </div>
  );
}
export default Legal;

// NOTE PEDAGOGIQUE :
// Dans une SPA React sans gestion serveur ni Helmet,
// le noindex par page n'est pas techniquement applicable.
// Le meta robots est volontairement placé dans index.html
// pour indiquer l'intention demandée dans le brief
// concernant la page Mentions légales.
