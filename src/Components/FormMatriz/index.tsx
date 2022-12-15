import React from 'react'
import { ButtonStyled } from '../Button/styles';

interface FormMatrizProps {
    handleSubmit: (event: React.BaseSyntheticEvent<Event, EventTarget & HTMLFormElement, EventTarget>) => void;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function FormMatriz({ handleSubmit, handleChange }: FormMatrizProps) {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="">Ingrese orden de la matriz: [1:15]</label>
                <input type="text" onChange={handleChange} placeholder="n" />
                <ButtonStyled type={"submit"} >Iniciar</ButtonStyled>
            </div>
        </form>
    )
}

export default FormMatriz