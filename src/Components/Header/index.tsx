import React from 'react'
import { NavLink } from 'react-router-dom'

import * as S from './styles'

export interface HeaderProps {
    bgColor?: string
}

const Header = ({ bgColor }: HeaderProps) => {

    const bg = { bgColor: bgColor }
    return (
        <S.Header {...bg}>
            <S.Title>Calculadora de Matriz</S.Title>
            <S.Nav>
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/calculator">Calculator</NavLink></li>
                </ul>
            </S.Nav>

        </S.Header>
    )
}

Header.defaultProps = {
    bgColor: 'transparent'
}

export default Header