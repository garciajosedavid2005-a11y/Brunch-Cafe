import { useState } from "react";
import "./Comentarios.css";
import HeroComentarios from "../../components/HeroComentarios/HeroComentarios";
import FormularioComentarios from "../../components/FormularioComentarios/FormularioComentarios";
import ListaComentarios from "../../components/ListaComentarios/ListaComentarios";  

const Comentarios = () => {
    const [nuevos, setNuevos] = useState([]);
    const agregarComentario = (nuevo) => {
    setNuevos([nuevo, ...nuevos]);
    };
    return (
        <main className="pagina-comentarios">
        {/* Manchas decorativas */}
        <div className="mancha-comentarios mancha-comentarios-1" aria-hidden="true" />
        <div className="mancha-comentarios mancha-comentarios-2" aria-hidden="true" />
        <div className="mancha-comentarios mancha-comentarios-3" aria-hidden="true" />

        <HeroComentarios />
        <FormularioComentarios onPublicar={agregarComentario} />
        <ListaComentarios nuevos={nuevos} />
        </main>
    );
};

export default Comentarios;