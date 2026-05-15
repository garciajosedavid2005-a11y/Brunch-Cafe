import menu from "../../data/menu.json";
import TarjetaMenu from "../../components/TarjetaMenu/TarjetaMenu";
import useAnimacionEntrada from "../../hooks/useAnimacionEntrada";
import "./Menu.css";

const categorias = [
  "Todo",
  "Desayunos",
  "Postres",
  "Pancakes y Waffles",
  "Tostadas",
  "Bowls Saludables",
  "Cafés",
];


const Menu = () => {
  const heroRef = useAnimacionEntrada();
  const categoriasRef = useAnimacionEntrada();
  const gridRef = useAnimacionEntrada();
  return (
    <main className="menu-pagina">
      <div className="mancha mancha-1"></div>
      <div className="mancha mancha-2"></div>
      <div className="mancha mancha-3"></div>
      <div className="mancha mancha-4"></div>
      <section ref={heroRef} className="menu-hero animar" >
        <h1 className="menu-hero__titulo">Brunch Café</h1>
        <p className="menu-hero__subtitulo">
          Explora nuestro menú de brunch con recetas frescas, dulces y café de autor.
        </p>
      </section>

      <section ref={categoriasRef} className="menu-categorias animar" aria-label="Categorías del menú">
        <ul className="menu-categorias__lista">
          {categorias.map((categoria, index) => (
            <li key={categoria}>
              <button
                type="button"
                className={`menu-categoria ${index === 0 ? "menu-categoria--activa" : ""}`}
              >
                {categoria}
              </button>
            </li>
          ))}
        </ul>
      </section>

      <section ref={gridRef} className="menu-grid animar">
        {menu.map((producto,index) => {
          const imagenUrl = producto.imagen
            ? producto.imagen.startsWith("/")
              ? producto.imagen
              : new URL(`../../assets/menu/${producto.imagen}`, import.meta.url).href
            : "";

          return (
            <TarjetaMenu
              key={producto.id}
              id={producto.id}
              nombre={producto.nombre}
              descripcion={producto.descripcion}
              precio={producto.precio}
              imagen={imagenUrl}
              delay={index % 5}
            />
          );
        })}
      </section>
    </main>
  );
};

export default Menu;
