import React from 'react'
import * as  R from '../../utils'
import { Wrapper } from './styles'

interface ResultsProps {
    matriz: number[][];
    showResult: boolean;
}

function Results({ matriz, showResult }: ResultsProps) {
    return (
        <Wrapper>
            <p>Resultados:</p>
            <ul>
                <li>Reflexiva: {showResult ? R.Results.isReflexiva(matriz) ? "Si" : "No" : null}</li>
                <li>Simetrica: {showResult ? R.Results.esSimetrica(matriz) ? "Si" : "No" : null}</li>
                <li>Antisimetrica: {showResult ? R.Results.esAntisimetrica(matriz) ? "Si" : "No" : null}</li>
                <li>Transitiva: {showResult ? R.Results.esTransitiva(matriz) ? "Si" : "No" : null}</li>
            </ul>
        </Wrapper>
    )
}

export default Results