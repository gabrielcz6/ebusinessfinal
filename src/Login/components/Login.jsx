import React from "react";
import { LeftSection } from "./LeftSection";
import { RightSection } from "./RightSection";
import { HeaderHome } from "../../Home/components/HeaderHome";
import './Login.css';

export const Login = () => {
    return(
        <>
            <HeaderHome/>
            <div className="containerLogin">
                <div className="content2">
                    <LeftSection />
                    <RightSection />
                </div>
            </div>
        </>
    )
}