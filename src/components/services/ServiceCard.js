function ServiceCard({ icon, title, description }) {
  return (
    <div className="card h-100 service-card">
      <i className={`bi ${icon} text-primary`}></i>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default ServiceCard;
