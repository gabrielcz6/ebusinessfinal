import { HeaderWelcome } from "../HeaderWelcome";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import './InscriptionContent.css';

export const InscriptionContent = () => {
    const location = useLocation();
    const navigate = useNavigate();

    // Extraemos el nombre del proyecto desde la URL
    const queryParams = new URLSearchParams(location.search);
    const projectName = queryParams.get('projectName');  // Obtener el parámetro 'projectName'

    // Lista de nombres de ejemplo
    const members = [
        'Juan Pérez', 'Ana García', 'Carlos López', 'Laura Martínez', 
        'Pedro Fernández', 'Marta Sánchez', 'Luis Rodríguez', 'Elena García', 
        'Javier Gómez', 'Sofía Hernández'
    ];

    // Función para seleccionar 3 nombres aleatorios de la lista
    const getRandomMembers = () => {
        const shuffled = [...members].sort(() => Math.random() - 0.5);
        return shuffled.slice(0, 4);
    };

    const randomMembers = getRandomMembers();

    const handleSkip = () => {
        navigate("/proyect");
    };

    return (
        <>
            <div className="proyect-main">
                <HeaderWelcome />
                <div className="proyect-form">
                    <div className="horizontal-line-left"></div>
                    <div className="upload-card">
                        <div className="upload-header">
                            <button className="upload-button">
                                {projectName}
                            </button>
                            <button className="skip-button" onClick={handleSkip}>
                                Salir
                            </button>
                        </div>
                        <div>
                            <span className="div-problem">PROBLEMÁTICA</span>
                        </div>

                        {/* Contenedor con borde negro y altura de 200px */}
                        <div className="problem-container">
  Colombia ya no brindará energía eléctrica a Ecuador

  En medio de una prolongada sequía asociada al fenómeno de El Niño, Colombia, que depende en buena parte de la generación hidroeléctrica, ha adoptado "todas las medidas" para evitar suspender el servicio de energía.

  "Tenemos todas (las plantas) térmicas al máximo", detalló Camacho, agregando que el país también acude a fuentes "renovables" y a "plantas hidráulicas" para satisfacer la demanda de sus 50 millones de habitantes.

  El agua
  Los embalses del país se encuentran actualmente en un 29,8% de su capacidad, según el operador del sistema, XM. Cerca del nivel "crítico" de 27%. XM registró en marzo la exportación de 129 gigavatios/hora a Ecuador, que aumentó sus importaciones de energía a finales de 2023, también por las sequías asociadas a El Niño.

  En algunas zonas de Quito hubo cortes de electricidad este lunes. Según la compañía de energía local la interrupción obedece a "mantenimientos emergentes". El gobierno aun no ha anunciado los horarios en los que el servicio será interrumpido.

  Lo que hemos vivido la última semana no solo ha sido el fenómeno de El Niño sino una onda de calor", detalló de su lado el ministro Camacho.

  Según el ministro los pronósticos meteorológicos indican que las lluvias llegaran "muy pronto", aunque "el racionamiento (de energía) está dentro de las posibilidades".
</div>


                        <div>
                            <span className="div-problem2">MIEMBROS INSCRITOS EN ESTE PROYECTO:</span>
                        </div>

                        {/* Lista numerada de miembros */}
                        <ol className="members-list">
                            {randomMembers.map((member, index) => (
                                <li key={index} className="member-name">
                                    {member}
                                </li>
                            ))}
                        </ol>
                    </div>
                    <div className="horizontal-line-right"></div>
                </div>
            </div>
        </>
    );
};