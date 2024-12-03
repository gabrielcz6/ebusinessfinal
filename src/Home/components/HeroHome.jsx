import React from "react"
import './Hero.css'
import { HeaderHome } from "./HeaderHome";
export const HeroHome = () => {
    return(
        <>
        <HeaderHome></HeaderHome>
        <main className="hero">
            <h1>INVESTIGACIÓN<span>CON IA</span></h1>
            <div className="description-container">
                <div className="horizontal-line-left"></div>
                    <p className="description">
                        Nuestra innovadora plataforma AI te permite explorar investigaciones científicas usando nuestro modelo
                        obtén sugerencias para tus proyectos. ¿Quisieras temas de investigación de acuerdo a tu perfil profesional?
                        Explora las sugerencias para ti.
                    </p>
                <div className="horizontal-line-right"></div>
            </div>
            
            <button className="view-more">Ver más</button>
        </main>
    </>
    )
}