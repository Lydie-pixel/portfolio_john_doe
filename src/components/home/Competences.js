function Competences({ title, reussite, couleur }) {
  return (
    <div
      className="progress"
      role="progressbar"
      aria-label={couleur + "example"}
      aria-valuenow={reussite}
      aria-valuemin="0"
      aria-valuemax="100"
    >
      <span>{title} </span>
      <div
        className={`progress-bar bg-${couleur}`}
        style={{ width: reussite + "%" }}
      ></div>
    </div>
  );
}

export default Competences;
