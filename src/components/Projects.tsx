"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("projects");
      if (section) {
        const rect = section.getBoundingClientRect();
        setIsVisible(rect.top < window.innerHeight * 0.8 && rect.bottom > window.innerHeight * 0.2);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Ejecutar una vez al cargar
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const projects = [
    {
      name: "Web Design",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
      image: "/project1.png",
      link: "#",
    },
    {
      name: "Mobile App",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
      image: "/project2.png",
      link: "#",
    },
    {
      name: "E-commerce",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
      image: "/project3.jpg",
      link: "#",
    },
    {
      name: "Blog Platform",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
      image: "/project4.jpg",
      link: "#",
    },
    {
      name: "Portfolio",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
      image: "/project5.jpg",
      link: "#",
    },
    {
      name: "Latest Project",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
      image: "/project6.jpg",
      link: "#",
    },
  ];

  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, x: 200, filter: "blur(10px)" }}
      animate={{
        opacity: isVisible ? 1 : 0,
        x: isVisible ? 0 : 200,
        filter: isVisible ? "blur(0px)" : "blur(10px)",
      }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="min-h-screen bg-[#1E1E2E] py-20 px-10"
    >
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -50 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-5xl font-bold text-center text-white mb-16"
      >
        Latest <span className="text-cyan-400">Project</span>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="relative overflow-hidden rounded-xl shadow-lg group cursor-pointer"
          >
            {/* Imagen del proyecto */}
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
            />

            {/* Overlay con animación desde abajo */}
            <div className="absolute inset-0 bg-gradient-to-t from-cyan-500 to-transparent opacity-0 group-hover:opacity-100 translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-in-out flex flex-col items-center justify-center text-center p-6 rounded-xl">
              <h3 className="text-2xl font-bold text-white mb-2">{project.name}</h3>
              <p className="text-gray-100 text-center mb-4">{project.description}</p>
              <a
                href={project.link}
                className="flex items-center px-5 py-2 bg-white text-blue-600 font-semibold rounded-full hover:bg-gray-200 transition"
              >
                <FaArrowUpRightFromSquare className="mr-2" /> View More
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
