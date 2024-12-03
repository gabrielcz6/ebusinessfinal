import React from "react";
import { RegisterForm } from "./RegisterForm";
export const RightSection = () => {
    return(
        <>
        <div className="right-section">
        <h3>Bienvenido!</h3>
        <div className="RegSecion">
            <h2>Regístrate</h2>
            <p>Regístrate y explora la plataforma</p>
        </div>
        <RegisterForm/>
        <div className="footer">
            <p>¿Ya tienes una cuenta? <a href="/login">Inicia sesión</a></p>
        </div>
        </div>
        </>
    )
}