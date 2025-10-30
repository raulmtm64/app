import React from "react";

const ErrorPopup = ({message, onClose}) => {
    if (!message) return null;

    return(
        <div className="popup">
            <div className="errorPopup">
                <h3 className="tituloErrorPopup">
                    Error: { message }
                </h3>
            </div>
            <div className="errorExtensoPopup">

            </div>
            <div className="botonesErrorPopup">

            </div>
        </div>
    );
};