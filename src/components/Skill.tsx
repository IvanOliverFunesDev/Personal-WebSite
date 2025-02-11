"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaReact, FaNodeJs, FaPython, FaDatabase } from "react-icons/fa";
import { SiJavascript, SiTypescript, SiNextdotjs, SiTailwindcss } from "react-icons/si";

export default function Skills() {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.3 });

  const skills = [
    { name: "React", icon: <FaReact className="w-12 h-12" />, color: "#61DAFB" },
    { name: "Node.js", icon: <FaNodeJs className="w-12 h-12" />, color: "#68A063" },
    { name: "Python", icon: <FaPython className="w-12 h-12" />, color: "#3776AB" },
    { name: "JavaScript", icon: <SiJavascript className="w-12 h-12" />, color: "#F7DF1E" },
    { name: "TypeScript", icon: <SiTypescript className="w-12 h-12" />, color: "#3178C6" },
    { name: "Next.js", icon: <SiNextdotjs className="w-12 h-12" />, color: "#000000" },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="w-12 h-12" />, color: "#38B2AC" },
    { name: "SQL", icon: <FaDatabase className="w-12 h-12" />, color: "#00758F" },
  ];

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, x: -200, filter: "blur(10px)" }}
      animate={inView ? { opacity: 1, x: 0, filter: "blur(0px)" } : { opacity: 0, x: -200, filter: "blur(10px)" }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="relative flex min-h-screen items-center justify-center bg-[#2C3E50] text-white"
    >
      {/* Contenedor de Habilidades */}
      <motion.div
        initial={{ opacity: 0, y: -50, filter: "blur(5px)" }}
        animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : { opacity: 0, y: -50, filter: "blur(5px)" }}
        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        className="w-full max-w-6xl px-10"
      >
        <h2 className="text-5xl font-bold text-center mb-12">Skills</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.5, filter: "blur(5px)" }}
              animate={inView ? { opacity: 1, scale: 1, filter: "blur(0px)" } : { opacity: 0, scale: 0.5, filter: "blur(5px)" }}
              transition={{ duration: 0.5, delay: index * 0.2, ease: "easeOut" }}
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center p-6 bg-[#6db1f5] rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              style={{ border: `2px solid ${skill.color}` }}
            >
              <div className="mb-4" style={{ color: skill.color }}>
                {skill.icon}
              </div>
              <h3 className="text-xl font-semibold">{skill.name}</h3>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
}
