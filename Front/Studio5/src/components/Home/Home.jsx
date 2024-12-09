import { useEffect, useRef, useState } from 'react';
import './Home.css';
import logoStudiocinco from '../../assets/logo.png';

function Home() {
  const [messages] = useState([
    "¡Bienvenido a nuestro sitio web!",
    "Explora nuestras actividades.",
    "Descubre rutinas personalizadas.",
    "Entrena con los mejores instructores.",
    "Logra tus objetivos con nosotros.",
    "Sé tu mejor versión."
  ]);

  const currentMessageIndex = useRef(0);
  const charIndex = useRef(0);
  const isDeleting = useRef(false);
  const speed = 150;
  const pause = 4000;

  useEffect(() => {
    const typeWriter = () => {
      const currentMessage = messages[currentMessageIndex.current];
      if (!isDeleting.current && charIndex.current < currentMessage.length) {
        charIndex.current++;
      } else if (isDeleting.current && charIndex.current > 0) {
        charIndex.current--;
      } else if (charIndex.current === currentMessage.length && !isDeleting.current) {
        isDeleting.current = true;
        setTimeout(typeWriter, pause);
        return;
      } else if (charIndex.current === 0 && isDeleting.current) {
        isDeleting.current = false;
        currentMessageIndex.current = (currentMessageIndex.current + 1) % messages.length;
      }
      document.getElementById("typewriter").innerHTML = currentMessage.substring(0, charIndex.current);
      setTimeout(typeWriter, speed);
    };
    typeWriter();
    return () => {
      currentMessageIndex.current = 0;
      charIndex.current = 0;
      isDeleting.current = false;
    };
  }, [messages]);

  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER;
  console.log("WhatsApp Number:", whatsappNumber); // Agrega esta línea para depuración
  
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Hola,%20quiero%20más%20información%20sobre%20las%20actividades%20del%20gimnasio`;
  
  return (
    <>
      <img className='logo' src={logoStudiocinco} alt="Studio Cinco" />
      <div className="Home">
        <h1 className="typewriter-text" id="typewriter"></h1><br />
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className='unete'
        >
          ÚNETE HOY
        </a>
      </div>
    </>
  );
}

export default Home;
