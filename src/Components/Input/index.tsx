import React from "react";
import { Wrapper } from "./styles";

interface InputProps {
    placeholder: string;
    type: string;
    handleChangeValue: (event: React.ChangeEvent<HTMLInputElement>) => void;
    name: string;
    value: string;
}

const Input = ({ placeholder, handleChangeValue, name, value, type }: InputProps) => {
    return (
        <input type={type} placeholder={placeholder} onChange={handleChangeValue} name={name} value={value} />
    )
}

export default Input