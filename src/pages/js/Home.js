import Hero from "../../components/home/Hero";
import Apropos from "../../components/home/Apropos";
import Competences from "../../components/home/Competences";
import Modale from "../../components/home/Modale";

function Home() {
  return (
    <main>
      <Hero />
      <Modale />
      <h2>A propos</h2>
      <Apropos />
      <h2>Mes Competences</h2>
      <div>
        <Competences title="HTML5 90%" couleur="danger" reussite="90" />
        <Competences title="CSS3 80%" couleur="info" reussite="80" />
        <Competences title="JAVASCRIPT 70%" couleur="warning" reussite="70" />
        <Competences title="PHP 60%" couleur="success" reussite="60" />
        <Competences title="REACT 50%" couleur="primary" reussite="50" />
      </div>
    </main>
  );
}

export default Home;
