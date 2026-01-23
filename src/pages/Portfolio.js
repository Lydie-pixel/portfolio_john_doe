import Card from "../components/portfolio/Card";
import projet1 from "../../src/assets/img/portfolio/fresh-food.jpg";
import projet2 from "../../src/assets/img/portfolio/restaurant-japonais.jpg";
import projet3 from "../../src/assets/img/portfolio/espace-bien-etre.jpg";
import projet4 from "../../src/assets/img/portfolio/seo.jpg";
import projet5 from "../../src/assets/img/portfolio/coder.jpg";
import projet6 from "../../src/assets/img/portfolio/screens.jpg";
import Banniere from "../components/Banniere";

function Realisations() {
  return (
    <section>
      <Banniere />
      <h1>Portfolio</h1>
      <div>Voici quelques-une de mes réalisations.</div>

      <Card
        title="Fresh Food"
        image={projet1}
        description="Site de vente de produit frais en ligne"
      />

      <Card
        title="Restaurant Akira"
        image={projet2}
        description="Site de vente de produit frais en ligne"
      />

      <Card
        title="Espace bien-être"
        image={projet3}
        description="Site de vente de produit frais en ligne"
      />

      <Card
        title="SEO"
        image={projet4}
        description="Amélioration du référencement d'un site de e-commerce"
      />

      <Card
        title="Création d'un API"
        image={projet5}
        description="Création d'un API RESTFULL publique"
      />

      <Card
        title="Maquette d'un site web"
        image={projet6}
        description="Création du prototype d'un site"
      />
    </section>
  );
}

export default Realisations;
