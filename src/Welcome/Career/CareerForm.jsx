import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importar el hook useNavigate

export const CareerForm = () => {
    const [career, setCareer] = useState('');
    const [isDropdownVisible, setIsDropdownVisible] = useState(false); // Estado para controlar la visibilidad
    const navigate = useNavigate(); // Hook para navegación

    // Lista de carreras
    const careerOptions = [
        'Ingeniería Informática',
        'Ingeniería de Sistemas',
        'Ingeniería Civil',
        'Ingeniería Industrial',
        'Ingeniería Electrónica',
        'Ingeniería Mecánica',
        'Ingeniería Ambiental',
        'Ingeniería Química',
        'Medicina',
        'Odontología',
        'Enfermería',
        'Administración de Empresas',
        'Marketing',
        'Contabilidad',
        'Derecho',
        'Psicología',
        'Arquitectura',
        'Educación Inicial',
        'Educación Primaria',
        'Ciencias de la Comunicación',
        'Economía',
        'Diseño Gráfico',
        'Biología',
        'Farmacia y Bioquímica',
    ];

    // Filtrar opciones en función de lo que el usuario escribe
    const filteredOptions = careerOptions.filter(option =>
        option.toLowerCase().includes(career.toLowerCase())
    );

    // Manejar la selección de carrera
    const handleSelectCareer = (selectedCareer) => {
        console.log('Carrera seleccionada:', selectedCareer); // Log inmediato
        setCareer(selectedCareer); // Actualizar el input con la carrera seleccionada
        setIsDropdownVisible(false); // Cerrar el menú
    };

    // Mostrar u ocultar las opciones del menú
    const handleFocus = () => {
        setIsDropdownVisible(true);
    };

    const handleBlur = () => {
        setTimeout(() => {
            setIsDropdownVisible(false); // Cerramos el menú después de un breve retardo
        }, 100);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/welcomeUpload'); // Navegar a otra página
    };

    return (
        <div className="career-form-container">
            <div className="take-career">
                <h2>¿Cuál es tu carrera?</h2>
                <p>Llena los datos</p>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="career-input-wrapper">
                    <input
                        type="text"
                        placeholder="Ingresa tu carrera profesional"
                        value={career} // El estado de la carrera
                        onChange={(e) => setCareer(e.target.value)} // Actualiza el input mientras escribes
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        className="career-input"
                    />
                    {/* Mostrar las opciones filtradas debajo del input */}
                    {isDropdownVisible && (
                        <div className="dropdown">
                            {filteredOptions.map((option, index) => (
                                <div
                                    key={index}
                                    className="dropdown-option"
                                    onClick={() => handleSelectCareer(option)} // Al seleccionar, actualiza el input
                                >
                                    {option}
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                <button type="submit" className="career-button">
                    {career ? 'Siguiente' : 'Omitir'}
                </button>
            </form>
        </div>
    );
};