import menu from "../../data/menu.json";
import TarjetaMenu from "../../components/TarjetaMenu/TarjetaMenu";
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
  return (
    <main className="menu-pagina">
      <div className="mancha mancha-1"></div>
      <div className="mancha mancha-2"></div>
      <div className="mancha mancha-3"></div>
      <div className="mancha mancha-4"></div>
      <section className="menu-hero">
        <h1 className="menu-hero__titulo">Brunch Café</h1>
        <p className="menu-hero__subtitulo">
          Explora nuestro menú de brunch con recetas frescas, dulces y café de autor.
        </p>
      </section>

      <nav className="menu-categorias" aria-label="Categorías del menú">
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
      </nav>

      <section className="menu-grid">
        {menu.map((producto) => {
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
            />
          );
        })}
      </section>
    </main>
  );
};

export default Menu;
