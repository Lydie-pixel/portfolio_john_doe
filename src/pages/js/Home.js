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
        <Competences reussite="90" />
        <Competences reussite="80" />
        <Competences reussite="70" />
        <Competences reussite="60" />
        <Competences reussite="50" />
      </div>
    </main>
  );
}

export default Home;
