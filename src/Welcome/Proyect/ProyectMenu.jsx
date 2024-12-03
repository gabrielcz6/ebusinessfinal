import { HeaderWelcome } from "../HeaderWelcome"
import { ProyectContent } from "./ProyectContent"

import './ProyectMenu.css'
export const ProyectMenu = () => {
    return(
        <>
        <div className="proyect-main">
            <HeaderWelcome/>
            <div className="proyect-form">
                <div className="horizontal-line-left"></div>
                <ProyectContent/>
                <div className="horizontal-line-right"></div>
            </div>
        </div>    
        </>
    )
}