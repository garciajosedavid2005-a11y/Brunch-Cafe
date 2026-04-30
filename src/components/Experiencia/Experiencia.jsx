/**
 * Experiencia.jsx
 * Sección de características del café.
 * El administrador edita: src/data/experiencia.json
 */

import experiencia from "../../data/experiencia.json";
import "./Experiencia.css";

const Experiencia = () => {
  return (
    <div className="experiencia">
      <div className="experiencia__divisor" aria-hidden="true">
        <span className="experiencia__linea" />
        <span className="experiencia__icono-divisor">✦</span>
        <span className="experiencia__linea" />
      </div>
      <h2 className="experiencia__titulo">Nuestra Experiencia</h2>

      <ul className="experiencia__lista" role="list">
        {experiencia.map((item) => (
          <li key={item.id} className="experiencia__item">
            <span className="experiencia__icono" aria-hidden="true">
              {item.icono}
            </span>
            <div className="experiencia__item-cuerpo">
              <strong className="experiencia__item-titulo">{item.titulo}</strong>
              <p className="experiencia__item-descripcion">{item.descripcion}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Experiencia;