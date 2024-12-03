import React from "react";
import { LoginForm } from "./LoginForm";
export const RightSection = () => {
    return(
        <>
        <div className="right-section">
        <h3>Bienvenido!</h3>
        <div className="IniSecion">
            <h2>Iniciar Sesión</h2>
            <p>Ingresa tus credenciales</p>
        </div>
        <LoginForm />
        <div className="footer">
            <p>¿No tienes una cuenta? <a href="/register">Regístrate</a></p>
        </div>
        </div>
        </>
    )
}