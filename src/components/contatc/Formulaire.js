function Formulaire() {
  return (
    <div className="formulaire">
      <form className="row g-3">
        <input type="text" id="nom" placeholder="Votre nom" />

        <input type="email" id="mail" placeholder="Votre adresse email" />

        <input
          type="tel"
          id="ntelephone"
          placeholder="Votre numéro de téléphone"
        />

        <input type="text" id="sujet" placeholder="Sujet" />

        <textarea id="message" placeholder="Votre message"></textarea>

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
