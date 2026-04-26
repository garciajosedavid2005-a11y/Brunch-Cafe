/**
 * TarjetaDestacado.jsx
 * Subcomponente — muestra un producto destacado individual.
 * El administrador NO edita este archivo.
 */

const PlaceholderImagen = ({ nombre }) => (
  <div className="tarjeta-destacado__placeholder" aria-label={"Imagen de " + nombre}>
    <span className="tarjeta-destacado__placeholder-icono">🍽</span>
    <p className="tarjeta-destacado__placeholder-texto">Sin imagen</p>
  </div>
);

const TarjetaDestacado = ({ producto }) => {
  const { nombre, descripcion, precio, categoria, imagen } = producto;

  return (
    <article className="tarjeta-destacado">

      {/* Imagen o placeholder */}
      <div className="tarjeta-destacado__imagen-wrap">
        {imagen ? (
          <img
            src={imagen}
            alt={nombre}
            className="tarjeta-destacado__imagen"
            loading="lazy"
          />
        ) : (
          <PlaceholderImagen nombre={nombre} />
        )}
        <span className="tarjeta-destacado__categoria">{categoria}</span>
      </div>

      {/* Contenido */}
      <div className="tarjeta-destacado__cuerpo">
        <h3 className="tarjeta-destacado__nombre">{nombre}</h3>
        <p className="tarjeta-destacado__descripcion">{descripcion}</p>
        <div className="tarjeta-destacado__pie">
          <span className="tarjeta-destacado__precio">{precio}</span>
        </div>
      </div>

    </article>
  );
};

export default TarjetaDestacado;