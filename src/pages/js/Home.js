import Hero from "../../components/home/Hero";
import Apropos from "../../components/home/Apropos";
import Competences from "../../components/home/Competences";
import Modale from "../../components/home/Modale";
import "../css/home.css";

function Home() {
  return (
    <div>
      <Hero />
      <Modale />
      <div className="container my-5">
        <div className="row">
          <div className="col-md-6">
            <h2 className="border-bottom border-primary">A propos</h2>
            <Apropos />
          </div>

          <div className="col-md-6">
            <h2 className="border-bottom border-primary">Mes Compétences</h2>
            <section className="section">
              <span>HTML5 90%</span>
              <Competences couleur="danger" reussite="90" />
              <span>CSS3 80%</span>
              <Competences couleur="info" reussite="80" />
              <span>JAVASCRIPT 70%</span>
              <Competences couleur="warning" reussite="70" />
              <span>PHP 60%</span>
              <Competences couleur="success" reussite="60" />
              <span>REACT 50%</span>
              <Competences couleur="primary" reussite="50" />
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
