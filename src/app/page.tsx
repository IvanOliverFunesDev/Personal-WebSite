"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import TypewriterEffect from "../components/TypewriterEffect";
import { FaDownload, FaGithub, FaLinkedin } from "react-icons/fa";
import Education from "../components/Education";
import Skills from "../components/Skill";
import Projects from "../components/Projects";
import AboutMe from "../components/AboutMe";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 2000); // Simula la animación de carga (2 segundos)
  }, []);

  // Detectar si el usuario ha hecho scroll para ocultar solo la Home
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.8) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Redes sociales en la parte superior izquierda (siempre visibles) */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : -50 }}
        transition={{ duration: 1.5, delay: 1, ease: "easeOut" }}
        className="fixed top-6 left-6 flex space-x-4 z-50"
      >
        {/* GitHub con efecto 3D */}
        <motion.a
          href="https://github.com/IvanOliverFunesDev"
          target="_blank"
          className="relative"
          whileHover={{ scale: 1.2, rotateY: 15 }}
          whileTap={{ scale: 0.9, rotateY: -15 }}
          transition={{ duration: 0.3 }}
        >
          <FaGithub className="text-4xl text-gray-300 hover:text-blue-500 transition" />
        </motion.a>

        {/* LinkedIn con efecto 3D */}
        <motion.a
          href="https://www.linkedin.com/in/ivan-oliver-funes-a2b686348/"
          target="_blank"
          className="relative"
          whileHover={{ scale: 1.2, rotateY: 15 }}
          whileTap={{ scale: 0.9, rotateY: -15 }}
          transition={{ duration: 0.3 }}
        >
          <FaLinkedin className="text-4xl text-gray-300 hover:text-blue-500 transition" />
        </motion.a>

        <motion.a
           whileHover={{ scale: 1.2, rotateY: 15 }}
           whileTap={{ scale: 0.9, rotateY: -15 }}
           transition={{ duration: 0.3 }}
            href="/IvanOliverFunesCv.pdf"
            download="IvanOliverFunesCv"
            className="inline-flex items-center px-2 py-1 bg-[#3498DB] text-white rounded-lg hover:text-blue-500 transition"
          >
            <FaDownload className="mr-2" />
            Download CV
          </motion.a>
      </motion.div>

      <motion.main
        initial={{ opacity: 0, x: -200, filter: "blur(10px)" }}
        animate={{
          opacity: isLoaded ? (isVisible ? 1 : 0) : 0,
          x: isLoaded ? (isVisible ? 0 : -100) : -200,
          filter: isLoaded ? (isVisible ? "blur(0px)" : "blur(10px)") : "blur(10px)",
        }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative flex flex-col-reverse md:flex-row min-h-screen items-center justify-center bg-[#1E1E2E] text-white px-6 md:px-10"
      >
        {/* Sección de texto */}
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: isLoaded ? 1 : 0, x: isLoaded ? 0 : -200 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="flex flex-col space-y-4 text-center md:text-left max-w-[450px] md:mr-16 mt-14 md:mt-0"
        >
          <h1 className="text-4xl md:text-6xl font-bold">
            <TypewriterEffect />
          </h1>
          <p className="text-lg text-gray-300">Welcome to my personal website.</p>

          {/* Botón de descargar CV */}
        
        </motion.div>

        {/* Imagen con animación creativa */}
        <motion.div
          initial={{ opacity: 0, x: 200, rotate: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0, x: isLoaded ? 0 : 200, rotate: isLoaded ? 5 : 0 }}
          transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
          whileHover={{ scale: 1.05, rotate: 0 }}
          className="relative w-[250px] h-[250px] md:w-[400px] md:h-[400px] mb-8 md:mb-0"
        >
          <Image
            src="/perfil.png"
            alt="Perfil"
            width={400}
            height={400}
            className="rounded-lg shadow-lg opacity-90"
            priority
          />
        </motion.div>
      </motion.main>

      {/* Secciones del portafolio */}
      <Education />
      <Skills />
      <Projects />
      <AboutMe />
    </>
  );
}
