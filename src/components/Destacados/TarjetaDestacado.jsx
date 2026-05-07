/**
 * TarjetaDestacado.jsx
 * Subcomponente — muestra un producto destacado individual.
 * El administrador NO edita este archivo.
 */
const PlaceholderImagen = ({ nombre }) => (
  <div className="tarjeta-destacado__placeholder">
    <div className="tarjeta-destacado__placeholder-content">
      <span className="tarjeta-destacado__placeholder-icono">☕</span>
      <p className="tarjeta-destacado__placeholder-texto">Preparando imagen...</p>
    </div>
  </div>
);

const TarjetaDestacado = ({ producto }) => {
  const { nombre, descripcion, precio, categoria, imagen } = producto;

  return (
    <article className="tarjeta-destacado">
      {/* Contenedor de Imagen con Overlay decorativo */}
      <div className="tarjeta-destacado__imagen-wrap">
        {imagen ? (
          <img
            src={imagen}
            alt={`Plato: ${nombre}`}
            className="tarjeta-destacado__imagen"
            loading="lazy"
          />
        ) : (
          <PlaceholderImagen nombre={nombre} />
        )}
        <div className="tarjeta-destacado__overlay" />
        <span className="tarjeta-destacado__categoria">{categoria}</span>
      </div>

      {/* Cuerpo con tipografía equilibrada */}
      <div className="tarjeta-destacado__cuerpo">
        <div className="tarjeta-destacado__info-principal">
          <h3 className="tarjeta-destacado__nombre">{nombre}</h3>
          <p className="tarjeta-destacado__descripcion">{descripcion}</p>
        </div>
        
        <div className="tarjeta-destacado__pie">
          <span className="tarjeta-destacado__precio">{precio}</span>
          <span className="tarjeta-destacado__accion" aria-hidden="true">
            <span className="tarjeta-destacado__link-texto">Ver detalle</span>
            <i className="fi-rr-arrow-small-right"></i> 
          </span>
        </div>
      </div>
    </article>
  );
};

export default TarjetaDestacado;