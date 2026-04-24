import { useState, useEffect, useCallback } from "react";
import DIAPOSITIVAS from "../../data/heroSlides.json";
import "./Hero.css";

/**
 * ════════════════════════════════════════════
 *  CARRUSEL — Hero.jsx
 *  El administrador NO edita este archivo.
 *  Solo edita: src/data/heroSlides.json
 * ════════════════════════════════════════════
 */

/* ─── Placeholder cuando image es null ─── */
const PlaceholderImagen = ({ indice }) => (
  <div className="hero__placeholder" aria-label={"Imagen de la diapositiva " + (indice + 1)}>
    <div className="hero__placeholder-icono">🖼</div>
    <p className="hero__placeholder-etiqueta">Imagen de la diapositiva {indice + 1}</p>
    <p className="hero__placeholder-pista">
      {"Agrega la ruta en heroSlides.json → [" + indice + "].image"}
    </p>
  </div>
);

/* ─── Botones del slide ─── */
const BotonesDiapositiva = ({ botones }) => {
  if (!botones || botones.length === 0) return null;
  return (
    <div className="hero__acciones">
      {botones.map((boton, i) => (
        <a
          key={i}
          href={boton.href}
          className={"hero__boton " + (i === 0 ? "hero__boton--primario" : "hero__boton--contorno")}
        >
          {boton.label}
        </a>
      ))}
    </div>
  );
};

/* ─── Componente principal ─── */
const Hero = () => {
  const [actual, setActual] = useState(0);
  const [animando, setAnimando] = useState(false);

  const irA = useCallback(
    (indice) => {
      if (animando) return;
      setAnimando(true);
      setTimeout(() => {
        setActual(indice);
        setAnimando(false);
      }, 400);
    },
    [animando]
  );

  const siguiente = useCallback(() => {
    irA((actual + 1) % DIAPOSITIVAS.length);
  }, [actual, irA]);

  const anterior = useCallback(() => {
    irA((actual - 1 + DIAPOSITIVAS.length) % DIAPOSITIVAS.length);
  }, [actual, irA]);

  useEffect(() => {
    const temporizador = setInterval(siguiente, 5000);
    return () => clearInterval(temporizador);
  }, [siguiente]);

  const diapositiva = DIAPOSITIVAS[actual];

  return (
    <section className="hero" aria-label="Carrusel principal">

      {/* Fondo: imagen real o placeholder */}
      <div className={"hero__fondo" + (animando ? " hero__fondo--desvanecido" : "")}>
        {diapositiva.image ? (
          <img
            src={diapositiva.image}
            alt={diapositiva.title || "Diapositiva " + (actual + 1)}
            className="hero__imagen"
          />
        ) : (
          <PlaceholderImagen indice={actual} />
        )}
      </div>

      {/* Overlay oscuro (controlado por el admin desde heroSlides.json) */}
        {diapositiva.image && diapositiva.overlay && (
        <div className="hero__overlay" aria-hidden="true" />
      )}
      {/* Texto y botones (solo si showText es true) */}
      {diapositiva.showText && (
        <div
          className={
            "hero__contenido grid-container " +
            (animando ? "hero__contenido--oculto" : "hero__contenido--visible")
          }
        >
          <div className="hero__texto">
            {diapositiva.title    && <h1 className="hero__titulo">{diapositiva.title}</h1>}
            {diapositiva.subtitle && <p className="hero__subtitulo">{diapositiva.subtitle}</p>}
            <BotonesDiapositiva botones={diapositiva.buttons} />
          </div>
        </div>
      )}

      {/* Ola decorativa */}
      <div className="hero__ola" aria-hidden="true">
        <svg
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,0 C480,100 960,0 1440,80 L1440,100 L0,100 Z"
            fill="var(--color-fondo)"
          />
        </svg>
      </div>

      {/* Flecha anterior */}
      <button
        className="hero__flecha hero__flecha--anterior"
        onClick={anterior}
        aria-label="Diapositiva anterior"
      >
        &#8592;
      </button>

      {/* Flecha siguiente */}
      <button
        className="hero__flecha hero__flecha--siguiente"
        onClick={siguiente}
        aria-label="Diapositiva siguiente"
      >
        &#8594;
      </button>

      {/* Puntos de navegación */}
      <div className="hero__puntos" role="tablist" aria-label="Navegación del carrusel">
        {DIAPOSITIVAS.map((d, i) => (
          <button
            key={d.id}
            className={"hero__punto" + (i === actual ? " hero__punto--activo" : "")}
            onClick={() => irA(i)}
            role="tab"
            aria-selected={i === actual}
            aria-label={"Ir a la diapositiva " + (i + 1)}
          />
        ))}
      </div>

    </section>
  );
};

export default Hero;