import Accordeon from "../../components/legal/Accordeon";
import "../css/legal.css";

function Legal() {
  return (
    <div className="container">
      <section className="section">
        <h1>Mentions légales</h1>
        <div className="blue-line mx-auto"></div>
      </section>
      <section className="section">
        <Accordeon />
      </section>
    </div>
  );
}
export default Legal;
