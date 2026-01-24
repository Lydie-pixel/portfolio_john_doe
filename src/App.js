import "./styles.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/js/Home";
import Services from "./pages/js/Services";
import Portfolio from "./pages/js/Portfolio";
import Contact from "./pages/js/Contact";
import Legal from "./pages/js/Legal";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Portfolio" element={<Portfolio />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Legal" element={<Legal />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
