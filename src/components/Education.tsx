"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Education() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("education");
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
      id="education"
      initial={{ opacity: 0, x: 200, filter: "blur(10px)" }}
      animate={{
        opacity: isVisible ? 1 : 0,
        x: isVisible ? 0 : 200,
        filter: isVisible ? "blur(0px)" : "blur(10px)",
      }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="min-h-screen flex flex-col items-center justify-center bg-[#1E1E2E] text-white py-16 px-10"
    >
      <motion.h2
        initial={{ opacity: 0, y: -50, filter: "blur(5px)" }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -50, filter: isVisible ? "blur(0px)" : "blur(5px)" }}
        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        className="text-5xl font-bold text-center mb-14"
      >
        Education
      </motion.h2>

      {/* Línea de tiempo extendida */}
      <div className="relative flex flex-col items-center w-full">
        <div className="relative w-full max-w-5xl h-2 bg-gray-600 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={isVisible ? { width: "100%" } : { width: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute h-full bg-gradient-to-r from-blue-500 to-purple-500"
          />
        </div>

        {/* Contenedor de eventos */}
        <div className="relative w-full max-w-5xl">
          {/* Bachillerato */}
          <motion.div
            initial={{ opacity: 0, y: 50, filter: "blur(5px)" }}
            animate={isVisible ? { opacity: 1, y: 0, filter: "blur(0px)" } : { opacity: 0, y: 50, filter: "blur(5px)" }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
            className="absolute left-[-10%] bottom-[-145px] bg-[#252736] text-white p-6 rounded-lg shadow-lg w-96 text-center border-2 border-blue-500 transition-all hover:shadow-blue-500"
          >
            <h3 className="text-2xl font-semibold">High School Diploma</h3>
            <p className="text-lg">IES Axati, Lora del Rio, Spain (2020 - 2022)</p>

          </motion.div>

          {/* Grado Superior */}
          <motion.div
            initial={{ opacity: 0, y: -50, filter: "blur(5px)" }}
            animate={isVisible ? { opacity: 1, y: 0, filter: "blur(0px)" } : { opacity: 0, y: -50, filter: "blur(5px)" }}
            transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
            className="absolute right-[-10%] top-[-190px] bg-[#252736] text-white p-6 rounded-lg shadow-lg w-96 text-center border-2 border-purple-500 transition-all hover:shadow-purple-500"
          >
            <h3 className="text-2xl font-semibold">Instituto Tecnológico Superior ADA, Seville, Spain (2023 - Present)</h3>
            <p className="text-lg">2023 - 2025</p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
