import John from "../../assets/img/john-doe-about.jpg";

function Apropos() {
  return (
    <section className="section">
      <img className="img" src={John} alt="Photo de John Doe" />
      <section className="section">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          iaculis, felis condimentum eleifend vestibulum, purus lorem pulvinar
          diam, vel tincidunt turpis urna non mauris. Phasellus euismod neque et
          lobortis placerat. Maecenas eget neque ac tortor interdum tristique.
          Sed quis nunc vel turpis ornare egestas eget eget mauris.
        </p>
        <p>
          Vestibulum accumsan id lacus at tempus. Morbi eros dolor, venenatis
          non blandit quis, molestie ultrices urna. Ut a ipsum a nibh imperdiet
          varius a in orci. Vivamus vitae turpis vitae arcu bibendum hendrerit
          nec a tellus. In pretium, sapien nec suscipit facilisis, massa massa
          vehicula lacus, id elementum elit metus in mi.
        </p>
        <p>
          Donec sit amet hendrerit nibh. Etiam a sodales odio. Vivamus in
          euismod metus. Curabitur sit amet aliquet dolor. In nec enim id nunc
          posuere porta. Cras suscipit tristique nibh, sed accumsan lorem. Sed
          varius maximus urna eget suscipit. Class aptent taciti sociosqu ad
          litora torquent per conubia nostra, per inceptos himenaeos.
        </p>
      </section>
    </section>
  );
}
export default Apropos;
