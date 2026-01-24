function Formulaire() {
  return (
    <div className="formulaire">
      <form>
        <input type="text" id="nom" placeholder="Votre nom" />

        <input type="email" id="mail" placeholder="Votre adresse email" />

        <input
          type="tel"
          id="ntelephone"
          placeholder="Votre numéro de téléphone"
        />

        <input type="text" id="sujet" placeholder="Sujet" />

        <textarea id="message" placeholder="Votre message"></textarea>

        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
}

export default Formulaire;
