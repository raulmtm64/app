import './ErrorPopUp.css';
import imagen_error from "../../assets/img/as.png";
import { createPortal } from "react-dom";

export default function ErrorPopup ({message, details, onClose}) {
    if (!message) return null;

    return createPortal(
        <div className="fondoPopup">
            <div className='popup'>
                <div className='imgErrorPopup'>
                    <img src={imagen_error} alt="Icono error"/>
                </div> 
                <div className="errorPopup">
                    Error: { message }
                </div>
                <div className="errorExtensoPopup">
                    { details }
                </div>
                <div className="botonesErrorPopup">
                    <button className="botonCerrarError" onClick={onClose}>
                        Cerrar
                    </button>
                </div>
            </div>
        </div>,
        document.body
    );
};