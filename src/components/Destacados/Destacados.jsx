/**
 * Destacados.jsx
 * Muestra los productos marcados con "destacado": true en menu.json
 * El administrador NO edita este archivo.
 * Solo edita: src/data/menu.json → cambiar "destacado": true/false
 */

import menu from "../../data/menu.json";
import TarjetaDestacado from "./TarjetaDestacado";
import "./Destacados.css";

const Destacados = () => {
  const destacados = menu.filter((producto) => producto.destacado);

  if (destacados.length === 0) return null;

  return (
    <section className="destacados" id="destacados">
      <div className="grid-container">

        {/* Encabezado */}
        <div className="destacados__encabezado">
          <div className="destacados__divisor" aria-hidden="true">
            <span className="destacados__linea" />
            <span className="destacados__icono">✦</span>
            <span className="destacados__linea" />
          </div>
          <h2 className="destacados__titulo">Nuestros Destacados</h2>
          <p className="destacados__subtitulo">Lo más pedido por nuestros clientes</p>
        </div>

        {/* Grid de tarjetas */}
        <div className="grid-x grid-margin-x destacados__grilla">
          {destacados.map((producto) => (
            <div
              key={producto.id}
              className="cell small-12 medium-6 large-3"
            >
              <TarjetaDestacado producto={producto} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Destacados;