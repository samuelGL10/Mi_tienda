import React, { useState } from "react";

export default function ProductCard({ producto }) {
  const [verGrande, setVerGrande] = useState(false);

  const handleComprar = () => {
    const mensaje = `Hola quiero comprar ${producto.nombre} por $${producto.precio}`;
    const url = `https://wa.me/573053730262?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
  };

  return (
    <>
      <div className="card">
        <img
          src={producto.imagen}
          alt={producto.nombre}
          onClick={() => setVerGrande(true)}
        />
        <h3>{producto.nombre}</h3>
        <p className="descripcion">{producto.descripcion}</p>
        <p className="precio">${producto.precio}</p>
        <button onClick={handleComprar}>Comprar por WhatsApp</button>
      </div>

      {verGrande && (
  <div className="modal" onClick={() => setVerGrande(false)}>
    <div className="modal-contenido" onClick={(e) => e.stopPropagation()}>
      <img
        src={producto.imagen}
        alt={producto.nombre}
        className="modal-imagen"
      />
      <button className="cerrar-boton" onClick={() => setVerGrande(false)}>×</button>
    </div>
  </div>
)}
    </>
  );
}
