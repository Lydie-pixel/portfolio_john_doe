import heroImage from "../../assets/img/hero-bg.jpg";

function Hero() {
  return (
    <section className="hero">
      <img src={heroImage} alt="Illustration accueil" />
      <h1>Bonjour, je suis John Doe</h1>
      <span>Développeur web full stack</span>
      <br></br>
      <button
        type="button"
        className="btn btn-danger"
        data-bs-toggle="modal"
        data-bs-target="#githubModal"
      >
        En savoir plus
      </button>
    </section>
  );
}

export default Hero;
