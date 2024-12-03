import React, { useState } from "react";

export const RegisterForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [nombres, setNombres] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            alert('Las contraseñas no coinciden.');
            return;
        }
        // Handle registration logic
        console.log('Email:', email);
        console.log('Password:', password);
        console.log('Confirm Password:', confirmPassword);
        console.log('Nombres:', nombres);
    };

    return (
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
                    <label htmlFor="nombres">Nombres:</label>
                    <input 
                        type="text" 
                        id="nombres"
                        value={nombres} 
                        onChange={(e) => setNombres(e.target.value)} 
                        placeholder="Ingresa tu nombre completo" 
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
                <div className="form-group">
                    <label htmlFor="confirmPassword">Confirmar Contraseña:</label>
                    <input 
                        type="password" 
                        id="confirmPassword"
                        value={confirmPassword} 
                        onChange={(e) => setConfirmPassword(e.target.value)} 
                        placeholder="Confirma tu clave" 
                    />
                </div>

                <div className="checkbox-container">
                    <input type="checkbox" id="remember" />
                    <label htmlFor="remember">Recordar</label>
                </div>

                <button type="submit">Registrar</button>
            </form>
        </>
    );
};