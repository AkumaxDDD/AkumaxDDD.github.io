
import { useEffect } from "react";
import "./Nosotros.css";

function Nosotros() {
  useEffect(() => {
    const section = document.querySelector(".nosotros-contenido");
    const imagen = document.querySelector(".frente");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          imagen.classList.add("animacion-activa");
        } else {
          imagen.classList.remove("animacion-activa"); // Opcional, reinicia la animación
        }
      },
      { threshold: 0.5 } // Se activa cuando el 50% de la sección está visible
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="nosotros-contenido" id="nosotros">
      <div className="frente-contenedor">
        <img className="frente" src="/src/assets/frente.jpeg" alt="frente" />
      </div>
      <h1 className="titulo">Nosotros</h1>
      <h3 className="nosotros-text">
      StudioCinco es más que un gimnasio, es el corazón de nuestra casa.
      Aquí, tanto madre como hijo comparten su pasión por el deporte, 
      guiando a cada miembro con dedicación y experiencia. En este espacio familiar, 
      te invitamos a ser parte de nuestra comunidad, donde el bienestar y el compañerismo 
      son nuestro estilo de vida.
      </h3>
    </div>
  );
}

export default Nosotros;