import './ErrorPopUp.css';

export default function ErrorPopup ({message, details, onClose}) {
    if (!message) return null;

    return(
        <div className="fondoPopup">
            <div className='popup'>
                <div className='imgErrorPopup'>
                    
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
        </div>
    );
};