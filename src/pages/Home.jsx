import React, { useState } from "react";
import { productos } from "../Data/products";
import ProductCard from "../component/ProductCard";
import "../index.css";

export default function Home() {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("Todas");
  const categorias = ["Todas", ...new Set(productos.map(p => p.categoria))];
  const productosFiltrados = categoriaSeleccionada === "Todas"
    ? productos
    : productos.filter(p => p.categoria === categoriaSeleccionada);

  return (
    <>
      <section className="hero slide-in">
        <div className="overlay">
          <h2>Bienvenido a mi tienda</h2>
          <p>Explora nuestra variedad de productos para tu hogar y tu cocina</p>
        </div>
      </section>

      <section className="seccion-filtro">
        <h3 className="titulo-filtro">CATEGORIAS</h3>
        <nav className="filtro-nav">
          {categorias.map((cat, i) => (
            <button
              key={i}
              onClick={() => setCategoriaSeleccionada(cat)}
              className={`filtro-btn ${categoriaSeleccionada === cat ? "activo" : ""
                }`}
            >
              {cat}
            </button>
          ))}
        </nav>
      </section>

      <section>
        <h2 className="titulo-productos">Nuestros Productos</h2>
        <div className="contenedor-productos">
          {productosFiltrados.map((producto) => (
            <ProductCard key={producto.id} producto={producto} />
          ))}
        </div>
      </section>
    </>
  );
}