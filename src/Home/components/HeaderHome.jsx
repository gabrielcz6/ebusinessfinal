import React from "react"
import './HeaderHome.css'
export const HeaderHome = () => {
    return(
    <>
        <header className="headerHome">
            <div className="logo">U N F V</div>
            <nav className="nav">
                <a href="/">Home</a>
                <a href="/login">Log in</a>
                <a href="/register">Sign up</a>
            </nav>
        </header>
    </>
    )
}