function ServiceCard({ icon, title, description }) {
  return (
    <div className="card service-card">
      <i className={`bi ${icon}`}></i>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default ServiceCard;
