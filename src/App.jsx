// Importaciones necesarias
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";

// Componente Header
function Header() {
  return (
    <header className="header">
      <h1>MegaLimpio</h1>
      <Menu />
    </header>
  );
}

// Componente Menu
function Menu() {
  return (
    <nav className="menu">
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/about">Sobre Nosotros</Link>
        </li>
        <li>
          <Link to="/contact">Contacto</Link>
        </li>
      </ul>
    </nav>
  );
}

// Componente Seccion
function Seccion({ titulo, contenido }) {
  return (
    <section className="seccion">
      <h2>{titulo}</h2>
      <p>{contenido}</p>
    </section>
  );
}

// Componente Footer
function Footer() {
  return (
    <footer className="footer">
      <p>&copy; 2024 Mi Sitio Web. Todos los derechos reservados.</p>
    </footer>
  );
}

// Página de inicio
function Home() {
  return (
    <div>
      <Seccion
        titulo="Bienvenido"
        contenido="Bienvenido a nuestra empresa de productos de limpieza. Nos dedicamos a ofrecer soluciones de limpieza de alta calidad para hogares y negocios. Nuestro compromiso es proporcionar productos efectivos y seguros para mantener sus espacios limpios y saludables."
      />
      <Seccion
        titulo="Servicios"
        contenido="Ofrecemos una amplia gama de productos de limpieza para el hogar y la oficina. Nuestros productos incluyen limpiadores multiusos, desinfectantes, detergentes, y mucho más."
      />
      <Seccion
        titulo="Testimonios"
        contenido="Nuestros clientes están satisfechos con la calidad de nuestros productos y el servicio que ofrecemos. Aquí hay algunos testimonios de clientes satisfechos: 'Los productos de limpieza de esta empresa son excelentes. Los uso en mi hogar y negocio y siempre obtengo resultados impecables.' - Cliente satisfecho."
      />
    </div>
  );
}

// Página Sobre Nosotros
function About() {
  return (
    <>
      <Seccion
        titulo="Sobre Nosotros"
        contenido="Somos una empresa dedicada a la fabricación y distribución de productos de limpieza de alta calidad. Nuestro objetivo es proporcionar soluciones efectivas y seguras para mantener los espacios limpios y saludables. Contamos con un equipo de profesionales comprometidos con la calidad y la satisfacción del cliente. Nuestros productos son respetuosos con el medio ambiente y están diseñados para brindar resultados excepcionales. ¡Contáctenos para obtener más información!"
      />
      <img
        src="https://www.servinet.cat/wp-content/uploads/2018/04/fotopostdesinfeccio.jpg"
        alt="Limpieza"
        width={700}
      />
    </>
  );
}

// Página de Contacto
function Contact() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const manejarCambio = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const manejarEnvio = (e) => {
    e.preventDefault();
    alert(`Mensaje enviado por: ${formData.nombre}`);
  };

  return (
    <form className="formulario" onSubmit={manejarEnvio}>
      <label>
        Nombre:
        <input
          type="text"
          name="nombre"
          value={formData.nombre}
          onChange={manejarCambio}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={manejarCambio}
        />
      </label>
      <label>
        Mensaje:
        <textarea
          name="mensaje"
          value={formData.mensaje}
          onChange={manejarCambio}
        ></textarea>
      </label>
      <button type="submit">Enviar</button>
    </form>
  );
}

// Componente principal App
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
