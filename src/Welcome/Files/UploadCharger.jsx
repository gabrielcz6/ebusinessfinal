import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaRegCheckCircle } from "react-icons/fa";
import { FaFilePdf } from "react-icons/fa";

export const UploadCharger = () => {
    const navigate = useNavigate();
    const [files, setFiles] = useState([]);
    const [isDragging, setIsDragging] = useState(false);
    const [activeMenu, setActiveMenu] = useState(null);

    const handleSkip = () => {
        navigate("/proyect");
    };

    const handleFileChange = (e) => {
        const selectedFiles = Array.from(e.target.files).map((file) => ({
        name: file.name,
        size: file.size,
        timestamp: Date.now(),
        }));
        const newFiles = selectedFiles.filter(
        (file) => !files.some((existingFile) => existingFile.name === file.name)
        );
        setFiles((prevFiles) => [...prevFiles, ...newFiles]);
    };

    const handleDelete = (index) => {
        setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
        setActiveMenu(null); // Cierra el menú deslizante después de eliminar
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (files.length > 0) {
            navigate("/proyect");
        } else {
            alert("Por favor, selecciona al menos un archivo PDF.");
        }
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = () => {
        setIsDragging(false);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setIsDragging(false);
        const droppedFiles = Array.from(e.dataTransfer.files).map((file) => ({
        name: file.name,
        size: file.size,
        timestamp: Date.now(),
        }));
        const newFiles = droppedFiles.filter(
        (file) => !files.some((existingFile) => existingFile.name === file.name)
        );
        setFiles((prevFiles) => [...prevFiles, ...newFiles]);
    };

    const toggleMenu = (index, e) => {
        e.preventDefault(); // Prevenir cualquier comportamiento predeterminado
        e.stopPropagation(); // Detener propagación del clic
        setActiveMenu((prev) => (prev === index ? null : index));
    };

    const getElapsedTime = (timestamp) => {
        const elapsedMs = Date.now() - timestamp;
        const elapsedMinutes = Math.floor(elapsedMs / 60000);
        const elapsedSeconds = Math.floor((elapsedMs % 60000) / 1000);

        if (elapsedMinutes > 0) {
        return `Hace ${elapsedMinutes} min`;
        } else {
        return `Hace ${elapsedSeconds} seg`;
        }
    };

    return (
        <>
        <div className="upload-card">
            <div className="upload-header">
                <button className="upload-button" onClick={() => document.getElementById("file-upload").click()}>
                Subir tus sílabus
                </button>
                <button className="skip-button" onClick={handleSkip}>
                Omitir
                </button>
            </div>
            {files.length === 0 && <p>En formato PDF sube los sílabus de tus cursos llevados</p>}
            <form onSubmit={handleSubmit}>
                <div
                className={`upload-area ${files.length > 0 ? "solid-border" : ""} ${isDragging ? "dragging" : ""}`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                >
                {files.length === 0 ? (
                    <label htmlFor="file-upload" className="file-label">
                    Click para buscar o arrastra y suelta aquí tus archivos
                    </label>
                ) : (
                    <div className="file-list">
                    <ul>
                        {files.map((file, index) => (
                        <li key={index} className="file-item">
                            <div className="file-Content">
                                <FaFilePdf className="FaFilePdf-icon"/>
                                <div className="file-info">
                                    <span className="file-name">{file.name}</span>
                                    <span className="file-time">{getElapsedTime(file.timestamp)}</span>
                                </div>
                            </div>
                            <div className="file-actions">
                                <span className="file-size">{(file.size / 1024).toFixed(0)} KB</span>
                                <div style={{ position: "relative" }}>
                                    <button
                                    className="menu-button"
                                    onClick={(e) => toggleMenu(index, e)}
                                    >
                                    ⋮
                                    </button>
                                    {activeMenu === index && (
                                    <div className="slide-menu">
                                        <button onClick={() => handleDelete(index)}>Eliminar</button>
                                    </div>
                                    )}
                                </div>
                                </div>
                            </li>
                            ))}
                        </ul>
                        </div>
                    )}
                    <input
                        id="file-upload"
                        type="file"
                        accept=".pdf"
                        onChange={handleFileChange}
                        multiple
                        style={{ display: "none" }}
                    />
                    {files.length > 0 &&
                        <button type="submit" className="upload-submit">
                            Continuar
                        </button>
                    }
                    </div>
            </form>
            {files.length > 0 &&
                <div className="upload-footer">
                    <span><FaRegCheckCircle /> Total de archivos: {files.length}</span>
                </div>
            }
            
        </div>
        </>
    );
};