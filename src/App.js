import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import QuienesSomos from "./pages/QuienesSomos";

export default function App() {
  return (
    <Router>
      <div className="bg-white min-h-screen flex flex-col">
        {/* NAVBAR */}
        <header className="bg-gray-900 text-white px-6 py-4 shadow-lg flex flex-col md:flex-row items-center justify-between">
          <div className="text-3xl font-extrabold tracking-tight">
            Grasam <span className="text-orange-400">Hogar & Sabor</span>
          </div>

          <nav className="mt-4 md:mt-0 flex flex-wrap gap-4 justify-center md:justify-end">
            <Link
              to="/"
              className="px-4 py-2 bg-gray-800 rounded-md text-white hover:bg-orange-500 hover:text-white transition duration-300"
            >
              Inicio
            </Link>
            <Link
              to="/quienes-somos"
              className="px-4 py-2 bg-gray-800 rounded-md text-white hover:bg-orange-500 hover:text-white transition duration-300"
            >
              ¿Quiénes somos?
            </Link>
            <a
              href="https://wa.me/573053730262"
              className="whatsapp-float"
              target="_blank"
              rel="noopener noreferrer"
            >
              💬
            </a>
          </nav>
        </header>

        {/* RUTAS */}
        <main className="flex-grow px-4 py-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quienes-somos" element={<QuienesSomos />} />
          </Routes>
        </main>

        {/* FOOTER */}
        <footer className="bg-gray-100 py-6 text-center text-sm text-gray-600 border-t">
          Contacto:{" "}
          <a
            href="https://wa.me/573053730262"
            target="_blank"
            rel="noreferrer"
            className="text-green-600 font-semibold hover:underline"
          >
            WhatsApp
          </a>
        </footer>
      </div>
    </Router>
  );
}
