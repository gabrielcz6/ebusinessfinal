import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./HeaderWlecome.css"

export const HeaderWelcome = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate(); // Hook para manejar la navegación
    const userName = "Administrador"; 
    const initials = userName
    .split(' ') 
    .map(name => name.charAt(0).toUpperCase()) 
    .join('');

    const handleLogout = () => {
        navigate('/login');
    }

    return(
        <>
        <header className="headerWelcome">
            <div className="logo">U N F V</div>
            <div>
                <span>{userName}</span>
                <div
                    className="header-initials"
                    onClick={() => setMenuOpen(!menuOpen)} // Mostrar/ocultar el menú al hacer clic
                    >
                    {initials}
                </div>
                {/* Menú desplegable */}
                {menuOpen && (
                <div className="header-dropdown">
                    <ul className="header-dropdown-list">
                    <li
                        className="header-dropdown-item"
                        onClick={handleLogout}
                    >
                        Cerrar sesión
                    </li>
                    </ul>
                </div>
                )}
            </div>
        </header>
        </>
    )
}