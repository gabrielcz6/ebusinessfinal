import React from "react"
import { useNavigate } from "react-router-dom";

export const ProyectContent = () => {
    const navigate = useNavigate();
    // Lista de proyectos
    const projects = [
        { id: 1, name: "Proyecto 1", path: "/proyecto1" },
        { id: 2, name: "Proyecto 2", path: "/proyecto2" },
        { id: 3, name: "Proyecto 3", path: "/proyecto3" },
        { id: 4, name: "Proyecto 4", path: "/proyecto4" },
    ];

    // Manejar navegación al hacer clic en un proyecto
    const handleNavigate = (name) => {
        navigate(`/inscription?projectName=${name}`);
    };

    return(
        <>
        <div className="Proyect-card">
                <div className="Proyect-title">
                    <h2>PROYECTOS RECOMENDADOS PARA TI</h2>
                </div>
                    {/* Map para generar botones dinámicamente */}
                    {projects.map((project) => (
                        <button
                            key={project.id}
                            onClick={() => handleNavigate(project.name)}
                        >
                            {project.name}
                        </button>
                    ))}
                </div>
        </>
    )
}