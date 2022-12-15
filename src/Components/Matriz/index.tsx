import React from 'react'
import { ButtonStyled } from '../Button/styles';
import Input from '../Input';
import { ContainerMatriz, FormStyled, Wrapper, WrapperButtons } from './styles';

export interface FormProps {
    col: number;
}

interface MatrizProps {
    handleSubmitValues: (event: React.BaseSyntheticEvent<Event, EventTarget & HTMLFormElement, EventTarget>) => void;
    values: { [key: string]: string };
    order: number;
    handleClickDeleteValues: () => void;
    placeholder: string[];
    handleChangeValue: (event: React.ChangeEvent<HTMLInputElement>) => void;
}


const Matriz = ({ handleSubmitValues, values, order, handleClickDeleteValues, placeholder, handleChangeValue }: MatrizProps) => {

    const orderCol = { col: order }
    return (
        <Wrapper>
            <ContainerMatriz>
                <p>
                    A =
                </p>
                <FormStyled id="matriz" onSubmit={handleSubmitValues} {...orderCol} >
                    {Object.keys(values).map((key, i) => {
                        return (
                            <Input key={key + Math.random()} type="number" placeholder={placeholder[i]} handleChangeValue={handleChangeValue} name={key} value={`${Object.values(values)[i]}`} />
                        )
                    })}
                </FormStyled>
            </ContainerMatriz>
            <WrapperButtons>
                <ButtonStyled type="submit" form="matriz">Calcular</ButtonStyled>
                <ButtonStyled type="button" onClick={handleClickDeleteValues} >Vaciar campos</ButtonStyled>
            </WrapperButtons>
        </Wrapper>
    )
}

export default Matriz