function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Bonjour, je suis John Doe</h1>
        <h2>Développeur web full stack</h2>
        <button
          type="button"
          className="btn btn-danger mt-3"
          data-bs-toggle="modal"
          data-bs-target="#githubModal"
        >
          En savoir plus
        </button>
      </div>
    </section>
  );
}

export default Hero;
