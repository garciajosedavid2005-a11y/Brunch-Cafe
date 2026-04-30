import Experiencia from "../Experiencia/Experiencia";
import Testimonios from "../Testimonios/Testimonios";
import "./SeccionInfo.css";

const SeccionInfo = () => {
  return (
    <section className="seccion-info" id="info">
      <div className="grid-container">
        <div className="grid-x grid-margin-x">
          <div className="cell small-12 medium-6">
            <Experiencia />
          </div>
          <div className="cell small-12 medium-6">
            <Testimonios />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeccionInfo;