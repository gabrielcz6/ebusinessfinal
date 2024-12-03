import React from "react";
import { LeftSection } from "./LeftSection";
import { RightSection } from "./RightSection";
import { HeaderHome } from "../../Home/components/HeaderHome";
import './Register.css';

export const Register = () => {
    return(
        <>
            <HeaderHome/>
            <div className="containerRegister">
                <div className="content2">
                    <LeftSection />
                    <RightSection />
                </div>
            </div>
        </>
    )
}