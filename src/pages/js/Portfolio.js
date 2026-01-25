import Card from "../../components/portfolio/Card";
import projet1 from "../../../src/assets/img/portfolio/fresh-food.jpg";
import projet2 from "../../../src/assets/img/portfolio/restaurant-japonais.jpg";
import projet3 from "../../../src/assets/img/portfolio/espace-bien-etre.jpg";
import projet4 from "../../../src/assets/img/portfolio/seo.jpg";
import projet5 from "../../../src/assets/img/portfolio/coder.jpg";
import projet6 from "../../../src/assets/img/portfolio/screens.jpg";
import Banniere from "../../components/Banniere";
import "../css/portfolio.css";

function Realisations() {
  return (
    <section>
      <Banniere />
      <h1>Portfolio</h1>
      <div>Voici quelques-une de mes réalisations.</div>

      <div className="container">
        <div className="row g-4">
          <div className="col-md-4">
            <Card
              title="Fresh Food"
              image={projet1}
              description="Site de vente de produit frais en ligne"
              outil="Site réalié avec PHP et MySQL"
            />
          </div>

          <div className="col-md-4">
            <Card
              title="Restaurant Akira"
              image={projet2}
              description="Site de vente de produit frais en ligne"
              outil="Site réalié avec WordPress"
            />
          </div>

          <div className="col-md-4">
            <Card
              title="Espace bien-être"
              image={projet3}
              description="Site de vente de produit frais en ligne"
              outil="Site réalié avec LARAVEL"
            />
          </div>

          <div className="col-md-4">
            <Card
              title="SEO"
              image={projet4}
              description="Amélioration du référencement d'un site de e-commerce"
              outil="Utilisation des outils SEO"
            />
          </div>

          <div className="col-md-4">
            <Card
              title="Création d'un API"
              image={projet5}
              description="Création d'un API RESTFULL publique"
              outil="PHP - SYMFONY"
            />
          </div>

          <div className="col-md-4">
            <Card
              title="Maquette d'un site web"
              image={projet6}
              description="Création du prototype d'un site"
              outil=" Réalisé avec FIGMA"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Realisations;
