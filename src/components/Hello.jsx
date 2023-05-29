import { useState } from "react";

const Hello = () => {
    const [mensaje, setMensaje] = useState("Hola mi amigo");
    return (
        <div>
            <h1>{mensaje}</h1>
            <button
                onClick={() =>
                    setMensaje("Hola mi amigo (se cambio el mensaje)")
                }
            >
                Cambiar mensaje
            </button>
        </div>
    );
};

export default Hello;
