import React from 'react'
import { ButtonStyled } from './styles';

interface ButtonProps {
    type: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
    label: string;
    bgColor: string;
    props?: React.ButtonHTMLAttributes<HTMLButtonElement>;
}

const Button = ({ type, label, bgColor, props }: ButtonProps) => {
    return (
        <ButtonStyled type={type} style={{ backgroundColor: bgColor }}>{label}</ButtonStyled>
    )
}

Button.defaultProps = {
    bgColor: '#fff',
    onClick: () => { },
    form: ''
}

export default Button