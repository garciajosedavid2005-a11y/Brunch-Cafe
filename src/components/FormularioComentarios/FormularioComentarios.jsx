import { useState } from "react";
import "./FormularioComentarios.css";

const FormularioComentarios = ({ onPublicar }) => {
    const [nombre, setNombre] = useState("");
    const [correo, setCorreo] = useState("");
    const [estrellas, setEstrellas] = useState(0);
    const [comentario, setComentario] = useState("");

const limpiar = () => {
    setNombre("");
    setCorreo("");
    setEstrellas(0);
    setComentario("");
};

const publicar = () => {
    if (!nombre.trim() || !comentario.trim() || estrellas === 0) return;
    onPublicar({ nombre, correo, estrellas, comentario });
    limpiar();
};

return (
    <section className="formulario-comentarios-seccion">
        <div className="grid-container">

        {/* Divisor */}
        <div className="lista-comentarios__divisor" aria-hidden="true">
            <span className="lista-comentarios__linea" />
            <span className="lista-comentarios__icono-divisor">✦</span>
            <span className="lista-comentarios__linea" />
        </div>

        <div className="grid-x grid-padding-x">
            <div className="cell small-12 medium-8 large-6">
            <div className="formulario-comentarios-card">

                <h2 className="formulario-comentarios-titulo">Escribe tu experiencia aquí</h2>

              {/* Nombre y correo */}
            <div className="grid-x grid-padding-x">
                <div className="cell small-12 medium-6">
                    <label htmlFor="nombre">Tu Nombre...</label>
                    <input
                    type="text"
                    id="nombre"
                    placeholder="Tu Nombre..."
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    className="formulario-comentarios-input"
                />
                </div>
                <div className="cell small-12 medium-6">
                    <label htmlFor="correo">Tu Correo (opcional)...</label>
                    <input
                    type="email"
                    id="correo"
                    placeholder="Tu Correo (opcional)..."
                    value={correo}
                    onChange={(e) => setCorreo(e.target.value)}
                    className="formulario-comentarios-input"
                />
                </div>
            </div>

              {/* Estrellas */}
            <div className="formulario-comentarios-estrellas-wrapper">
                <label>Calificación</label>
                <div className="formulario-comentarios-estrellas">
                    {[1, 2, 3, 4, 5].map((i) => (
                    <span
                        key={i}
                        className={"formulario-comentarios-estrella" + (i <= estrellas ? " activa" : "")}
                        onClick={() => setEstrellas(i)}
                    >
                    ★
                    </span>
                ))}
                </div>
            </div>

              {/* Comentario */}
                <label htmlFor="comentario">Tu Comentario...</label>
                <textarea
                id="comentario"
                placeholder="Tu Comentario..."
                rows="4"
                value={comentario}
                onChange={(e) => setComentario(e.target.value)}
                />

              {/* Botón */}
            <div className="formulario-comentarios-botones">
                <button type="button" className="button" onClick={publicar}>
                    Publicar Comentario
                </button>
            </div>

            </div>
        </div>
        </div>
    </div>
    </section>
);
};

export default FormularioComentarios;