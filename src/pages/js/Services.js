import Banniere from "../../components/Banniere";
import ServiceCard from "../../components/services/ServiceCard";

function Services() {
  return (
    <div className="container">
      <Banniere />
      <h1>Services</h1>
      <div>Voici les prestations sur lesquelles je peux intervenir</div>

      <ServiceCard
        icon="bi-brush"
        title="UX Design"
        description="L'UX Design est une discipline qui consiste à concevoir des produits (site web, applications mobiles, logiciels, objets connectés, est) en plaçant l'utilisateur au centre des préoccupations.L'objectif est de rendre l'expérience utilisateur la plus fuide et agréable possible."
      />

      <ServiceCard
        icon="bi-code-slash"
        title="Développement Web"
        description="Le développement de site web consistre à créer des sites internet en utilisant des langages de programmation (HTML, CSS, JavaScript, PHP, ect) et des frameworks (Bootstrap, React, Angular, ect.)."
      />

      <ServiceCard
        icon="bi-search"
        title="Référencement"
        description="Le référencement naturel (SEO) est une technique qui consiste à optiniser un site web pour le faire remonter dans les résultats des moteurs de recherche (Google, Bing, Yahoo, etc.). L'objectif est d'attirer un maximum de visiteur qualifiés sur le site."
      />
    </div>
  );
}
export default Services;
