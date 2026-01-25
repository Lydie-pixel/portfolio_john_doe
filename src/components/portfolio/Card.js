function Card({ title, image, description, outil }) {
  return (
    <div className="card h-100 portfolio-card">
      <img className="card-img-top" src={image} alt={title} />
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p className="card-text">{description}</p>
        <a href="#" className="btn btn-primary">
          Voir le site
        </a>
      </div>
      <section className="tool background-color $gray-300">
        <span className="card-tool">{outil}</span>
      </section>
    </div>
  );
}

export default Card;
