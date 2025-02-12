"use client";

import { useState, useEffect } from "react";

const titles = ["Hello, I'm Iván Oliver Funes ","I'm a Software Developer", "I'm a Web Developer", "I'm a Tech Enthusiast", "I'm a Tech Geek"];

export default function TypewriterEffect() {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    // Controla la animación de escritura y borrado
    const timeout = setTimeout(() => {
      if (isDeleting) {
        if (subIndex > 0) {
          setText((prev) => prev.slice(0, -1));
          setSubIndex(subIndex - 1);
        } else {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % titles.length);
        }
      } else {
        if (subIndex < titles[index].length) {
          setText((prev) => prev + titles[index][subIndex]);
          setSubIndex(subIndex + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 1500); // Espera antes de borrar
        }
      }
    }, isDeleting ? 75 : 150); // Velocidad de escritura y borrado

    return () => clearTimeout(timeout);
  }, [subIndex, isDeleting, index]);

  useEffect(() => {
    // Hace que el cursor parpadee
    const cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <span className="text-black-500">
      {text}
      <span className={`${cursorVisible ? "opacity-100" : "opacity-0"} transition-opacity duration-200`}>
        |
      </span>
    </span>
  );
}
