import Hero from "../../components/Hero/Hero";
import Destacados from "../../components/Destacados/Destacados";
import "./Inicio.css";


const Inicio = () => {
  return (
    <main className="pagina-inicio">
      <Hero />
      <Destacados />
    </main>
  );
};

export default Inicio;