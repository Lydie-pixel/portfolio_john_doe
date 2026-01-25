import Accordeon from "../../components/legal/Accordeon";
import "../css/legal.css";

function Legal() {
  return (
    <div className="container">
      <h1 className="border-bottom border-primary">Mentions légales</h1>
      <section className="section">
        <Accordeon />
      </section>
    </div>
  );
}
export default Legal;
