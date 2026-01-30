function Formulaire() {
  return (
    <div className="formulaire">
      <form className="row g-3">
        <input type="text" id="nom" placeholder="Votre nom" required />

        <input
          type="email"
          id="mail"
          placeholder="Votre adresse email"
          required
        />

        <input
          type="tel"
          id="ntelephone"
          placeholder="Votre numéro de téléphone"
          required
        />

        <input type="text" id="sujet" placeholder="Sujet" required />

        <textarea
          id="message"
          placeholder="Votre message"
          rows="14"
          required
        ></textarea>

        <div className="col-12 text-center">
          <button type="submit" className="btn btn-primary">
            Envoyer
          </button>
        </div>
      </form>
    </div>
  );
}

export default Formulaire;
