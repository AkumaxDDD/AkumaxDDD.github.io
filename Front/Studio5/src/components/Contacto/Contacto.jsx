import './Contacto.css';
import { FaPhoneVolume } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import { FaMarker } from "react-icons/fa6";
import { FaAddressBook } from "react-icons/fa";

const Contacto = () => {
  return (
    <>
    <div className="contacto">
      <h1 className='contact-title'>¡Ponte en <br /> contacto hoy!</h1>
      </div>
      <footer className='footer'>
        <section className='contact-info'>
            <h3><FaAddressBook/> Información de Contacto</h3> <br />
            <p><FaMarker/>Dirección: Dardo de la Vega Díaz 395, F5302 La Rioja</p>
            <p><MdMail />Email: contacto@gym.com</p>
            <p><FaPhoneVolume />Teléfono: 03804 425 703</p>
        </section>
        <section id="ubicacion">
          <p><FaMapMarkerAlt/> Ubicación</p>
          <div className='mapa' id="mapa">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3475.8888410154955!2d-66.85766542522101!3d-29.40280770181861!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9427da52a807f7c9%3A0xac2d095943ea7cd!2sStudio%20Cinco!5e0!3m2!1ses-419!2sar!4v1729203344162!5m2!1ses-419!2sar"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </section>
        
      </footer>
    </>
    
    
  );
};

export default Contacto;
