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
        <main className="pagina-Comentarios">
            <HeroComentarios />
            <FormularioComentarios onAgregar={agregarComentario} />
            <ListaComentarios nuevos={nuevos} />

        </main>
    );
};

export default Comentarios;