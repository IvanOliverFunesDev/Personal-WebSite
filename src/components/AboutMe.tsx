"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";

export default function AboutMe() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("about-me");
      if (section) {
        const rect = section.getBoundingClientRect();
        setIsVisible(rect.top < window.innerHeight * 0.8 && rect.bottom > window.innerHeight * 0.2);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Ejecutar una vez al cargar
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.section
      id="about-me"
      initial={{ opacity: 0, x: -200, filter: "blur(10px)" }}
      animate={{
        opacity: isVisible ? 1 : 0,
        x: isVisible ? 0 : -200,
        filter: isVisible ? "blur(0px)" : "blur(10px)",
      }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="min-h-screen flex items-center justify-center bg-[#2C3E50] text-white py-20 px-10"
    >
      <div className="w-full max-w-6xl flex flex-col md:flex-row items-center gap-12">
        {/* Imagen a la izquierda con animación flotante */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -100 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-full md:w-1/2 flex justify-center"
        >
          <motion.img
            src="/perfil.png"
            alt="Foto de perfil"
            className="w-80 h-90 md:w-96 md:h-110 object-cover rounded-lg shadow-2xl border-4 border-[#3498DB]"
            initial={{ y: 0 }}
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            whileHover={{ scale: 1.05, rotate: 3 }}
          />
        </motion.div>

        {/* Texto a la derecha */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 100 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="w-full md:w-1/2 space-y-6"
        >
          <p className="text-4xl text-gray-300">
            Desarrollador Full Stack con pasión por el diseño y la innovación. Me encanta crear
            soluciones digitales que impacten positivamente en la vida de las personas.
          </p>

          {/* Frase destacada con animación */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 1, delay: 1, ease: "easeOut" }}
            className="text-2xl italic text-[#1ABC9C] font-semibold"
          >
            "La creatividad es la inteligencia divirtiéndose."
          </motion.p>

          {/* Botón para descargar CV */}
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 1, delay: 1.5, ease: "easeOut" }}
            href="/IvanOliverFunesCv.pdf"
            download="IvanOliverFunesCv"
            className="inline-flex items-center px-6 py-3 bg-[#3498DB] text-white rounded-lg hover:bg-[#2980B9] transition"
          >
            <FaDownload className="mr-2" />
            Descargar CV
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
}
