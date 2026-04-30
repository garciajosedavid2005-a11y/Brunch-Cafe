/**
 * Testimonios.jsx
 * Carrusel de comentarios de clientes.
 * El administrador edita: src/data/testimonios.json
 */

import { useState, useEffect, useCallback } from "react";
import testimonios from "../../data/testimonios.json";
import "./Testimonios.css";

/* ── Estrellas ── */
const Estrellas = ({ calificacion }) => (
  <div className="testimonios__estrellas" aria-label={calificacion + " de 5 estrellas"}>
    {Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={"testimonios__estrella " + (i < calificacion ? "testimonios__estrella--llena" : "testimonios__estrella--vacia")}
        aria-hidden="true"
      >
        ★
      </span>
    ))}
  </div>
);

const Testimonios = () => {
  const [actual, setActual] = useState(0);
  const [desvaneciendo, setDesvaneciendo] = useState(false);

  const irA = useCallback((indice) => {
    setDesvaneciendo(true);
    setTimeout(() => {
      setActual(indice);
      setDesvaneciendo(false);
    }, 350);
  }, []);

  const siguiente = useCallback(() => {
    irA((actual + 1) % testimonios.length);
  }, [actual, irA]);

  useEffect(() => {
    const temporizador = setInterval(siguiente, 6000);
    return () => clearInterval(temporizador);
  }, [siguiente]);

  const testimonio = testimonios[actual];

  return (
    <div className="testimonios">
      <div className="testimonios__divisor" aria-hidden="true">
        <span className="testimonios__linea" />
        <span className="testimonios__icono-divisor">✦</span>
        <span className="testimonios__linea" />
      </div>
      <h2 className="testimonios__titulo">Lo que dicen nuestros clientes</h2>

      {/* Comentario */}
      <div
        className={"testimonios__cuerpo " + (desvaneciendo ? "testimonios__cuerpo--oculto" : "testimonios__cuerpo--visible")}
        aria-live="polite"
        aria-atomic="true"
      >
        <span className="testimonios__comilla" aria-hidden="true">&ldquo;</span>
        <blockquote className="testimonios__blockquote">
          <p className="testimonios__comentario">{testimonio.comentario}</p>
          <footer className="testimonios__autor">
            <cite className="testimonios__nombre">— {testimonio.autor}</cite>
            <Estrellas calificacion={testimonio.calificacion} />
          </footer>
        </blockquote>
      </div>

      {/* Puntos de navegación */}
      <div className="testimonios__puntos" role="tablist" aria-label="Navegación de testimonios">
        {testimonios.map((t, i) => (
          <button
            key={t.id}
            className={"testimonios__punto " + (i === actual ? "testimonios__punto--activo" : "")}
            onClick={() => irA(i)}
            role="tab"
            aria-selected={i === actual}
            aria-label={"Testimonio de " + t.autor}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonios;