import React from "react"
import { HeaderComponent, Logo } from "./styles"
import logoMoovin from "../../Images/logo.svg"
const Header = () => {
    return (
        <HeaderComponent sm={12}>
            <Logo src={logoMoovin}>
            </Logo>
        </HeaderComponent>
    )
}

export default Header;