"use client";
import React, {useState} from "react";
import {Container} from "@/ui/atoms/Container/Container";
import './Header.css'
interface Props {
    pageWidth: number

}
export const Header:React.FC<Props> = ({pageWidth}) => {

    const [navMenu, setNavMenu] = useState(false)

    const handleNavMenu = () => {
        setNavMenu(!navMenu)
        document.body.style.overflow = navMenu ? 'auto' : 'hidden'
    }

    return (
        <header className='header'>
            <Container size={pageWidth}>
                <div className='header-img'>
                    <img src="/img/insura-logo.png" alt="InsuraLife.pl" />
                </div>
                <button onClick={handleNavMenu} className="nav-hamburger">
                    {!navMenu ? <i className="fa-solid fa-bars"></i> : <i className="fa-solid fa-xmark"></i>}</button>
                <nav className={`header-menu ${navMenu ? 'open' : ''}`}>
                    <ul>
                        <li onClick={navMenu ? handleNavMenu : null}><a href="#about-us">O nas</a></li>
                        <li onClick={navMenu ? handleNavMenu : null}><a href="#offer">Oferta</a></li>
                        <li onClick={navMenu ? handleNavMenu : null}><a href="#opinion">Opinie</a></li>
                    </ul>
                </nav>

            </Container>
        </header>
    )
}