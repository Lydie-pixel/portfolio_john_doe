function Formulaire() {
  return (
    <div className="formulaire">
      <form>
        <input type="text" id="nom" placeholder="Votre nom"></input>

        <input type="text" id="mail" placeholder="Votre adresse email"></input>

        <input
          type="text"
          id="ntelephone"
          placeholder="Votre numéro de téléphone"
        ></input>

        <input type="text" id="sujet" placeholder="Sujet"></input>

        <textarea id="message" placeholder="Votre message"></textarea>
      </form>

      <button type="submit">Envoyer</button>
    </div>
  );
}

export default Formulaire;
