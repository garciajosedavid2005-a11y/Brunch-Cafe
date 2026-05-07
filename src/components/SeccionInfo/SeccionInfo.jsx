import Experiencia from "../Experiencia/Experiencia";
import Testimonios from "../Testimonios/Testimonios";
import useAnimacionEntrada from "../../hooks/useAnimacionEntrada";
import "./SeccionInfo.css";

const SeccionInfo = () => {
  const ref = useAnimacionEntrada();
  return (
  <section ref={ref} className="seccion-info animar-subir">

    <section className="seccion-info" id="info">
      <div className="grid-container">
        <div className="grid-x grid-margin-x">
          <div className="cell small-12 medium-7">
            <Experiencia />
          </div>
          <div className="cell small-12 medium-5">
            <Testimonios />
          </div>
        </div>
      </div>
    </section>
  </section>
  );
};

export default SeccionInfo;