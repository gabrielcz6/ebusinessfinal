import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
export const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    
    const handleSubmit = (event) => {
        event.preventDefault();
        // Validar si el correo y la contraseña son correctos
        if (email === 'admin@unfv.edu.pe' && password === 'admin') {
            // Redirigir a otra página (puedes cambiar el path a lo que desees)
            navigate("/welcomeCareer");  // Redirige a /home o la página que prefieras
        } else {
            // Mostrar mensaje de error si los datos no son correctos
            alert('Correo o contraseña incorrectos');
        }
    };
    return(
        <>
            <form className="login-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Correo institucional:</label>
                    <input 
                        type="email" 
                        id="email"
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        placeholder="Ingresa tu correo institucional" 
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Contraseña:</label>
                    <input 
                        type="password" 
                        id="password"
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        placeholder="Ingresa tu clave" 
                    />
                </div>

                <div className="checkbox-container">
                    <input type="checkbox" id="remember" />
                    <label htmlFor="remember">Recordar</label>
                </div>

                <button type="submit">Iniciar Sesión</button>
            </form>
        </>
    )
}