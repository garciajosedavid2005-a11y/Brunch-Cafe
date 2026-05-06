import { useState, useEffect, useCallback } from "react";
import menu from "../../data/menu.json";
import TarjetaDestacado from "./TarjetaDestacado";
import "./Destacados.css";

const TARJETAS_VISIBLES = 4;
const INTERVALO_AUTO = 3000;

const Destacados = () => {
  const destacados = menu.filter((producto) => producto.destacado);
  const [indiceActual, setIndiceActual] = useState(0);

  const siguiente = useCallback(() => {
    setIndiceActual((prev) => (prev + 1) % destacados.length);
  }, [destacados.length]);

  const anterior = useCallback(() => {
    setIndiceActual((prev) => (prev - 1 + destacados.length) % destacados.length);
  }, [destacados.length]);

  useEffect(() => {
    const temporizador = setInterval(siguiente, INTERVALO_AUTO);
    return () => clearInterval(temporizador);
  }, [siguiente]);

  if (destacados.length === 0) return null;

  const productosLoop = [...destacados, ...destacados];

  return (
    <section className="destacados" id="destacados">
      <div className="grid-container">

        <div className="destacados__encabezado">
          <div className="destacados__divisor" aria-hidden="true">
            <span className="destacados__linea" />
            <span className="destacados__icono">✦</span>
            <span className="destacados__linea" />
          </div>
          <h2 className="destacados__titulo">Nuestros Destacados</h2>
          <p className="destacados__subtitulo">Lo más pedido por nuestros clientes</p>
        </div>

        <div className="destacados__slider">
          <button
            className="destacados__flecha destacados__flecha--anterior"
            onClick={anterior}
            aria-label="Producto anterior"
          >
            &#8592;
          </button>

          {/* Ventana visible */}
          <div className="destacados__ventana">
            <div
              className="destacados__pista"
              style={{ transform: "translateX(-" + (indiceActual * (100 / TARJETAS_VISIBLES)) + "%)" }}
            >
              {productosLoop.map((producto, i) => (
                <div key={producto.id + "-" + i} className="destacados__celda">
                  <TarjetaDestacado producto={producto} />
                </div>
              ))}
            </div>
          </div>

          <button
            className="destacados__flecha destacados__flecha--siguiente"
            onClick={siguiente}
            aria-label="Producto siguiente"
          >
            &#8594;
          </button>
        </div>

      </div>
    </section>
  );
};

export default Destacados;