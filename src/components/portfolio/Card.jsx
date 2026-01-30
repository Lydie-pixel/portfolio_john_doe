function Card({ title, image, description, outil }) {
  return (
    <div className="card h-100 portfolio-card">
      <img src={image} className="card-img-top" alt={title} />

      <div className="card-body text-center">
        <h3 className="card-title">{title}</h3>
        <p className="card-text">{description}</p>

        <a href="#" className="btn btn-primary">
          Voir le site
        </a>
      </div>

      <div className="card-footer text-center bg-light">
        <small className="text-muted">{outil}</small>
      </div>
    </div>
  );
}

export default Card;
