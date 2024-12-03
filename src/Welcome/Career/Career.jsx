import { HeaderWelcome } from "../HeaderWelcome"
import { CareerForm } from "./careerForm"
import './Career.css'
export const Career = () => {
    return(
        <>
        <div className="Career-main">
            <HeaderWelcome/>
            <div className="Career-form">
                <div className="horizontal-line-left"></div>
                <CareerForm/>
                <div className="horizontal-line-right"></div>
            </div>
        </div>    
        </>
    )
}