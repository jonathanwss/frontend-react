import React from "react"
import { HeaderComponent, Logo } from "./styles"
const Header = () => {
    const logoMoovin =
		'https://e-millennium.com.br/wp-content/uploads/2015/01/PLATAFORMAS_OK-07-300x152.png'
    return (
        <HeaderComponent sm={12}>
            <Logo src={logoMoovin}>
            </Logo>
        </HeaderComponent>
    )
}

export default Header;