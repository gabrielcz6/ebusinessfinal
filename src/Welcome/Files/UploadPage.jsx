import { HeaderWelcome } from "../HeaderWelcome"
import { UploadCharger } from "./UploadCharger"
import './UploadPage.css'

export const UploadPage = () => {
    return(
        <>
        <div className="Upload-main">
            <HeaderWelcome/>
            <div className="Upload-form">
                <div className="horizontal-line-left"></div>
                <UploadCharger/>
                <div className="horizontal-line-right"></div>
            </div>
        </div>    
        </>
    )
}