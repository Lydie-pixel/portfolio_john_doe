function Competences({ reussite }) {
  return (
    <div
      className="progress"
      role="progressbar"
      aria-label="Success example"
      aria-valuenow={reussite}
      aria-valuemin="0"
      aria-valuemax="100"
    >
      <div
        className="progress-bar bg-success"
        style={{ width: reussite + "%" }}
      ></div>
    </div>
  );
}

export default Competences;
