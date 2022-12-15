import React from 'react'
import { Ul, Wrapper } from './styles'

function Information() {
    return (
        <>
            <Wrapper>
                <h1>Matriz booleana</h1>
                <p>Una matriz booleana es una matriz de números cuyas componentes o entradas son exclusivamente ceros o unos.</p>

            </Wrapper>
            <Ul>
                <li>
                    <span>Matriz Simétrica</span>
                </li>
                <li>
                    <span>Matriz Reflexiva</span>
                </li>
                <li>
                    <span>Matriz Antisimétrica</span>
                </li>
                <li>
                    <span>Matriz Transitiva</span>
                </li>
            </Ul>
            {/* <ol>
                <li><span>Matriz Simétrica: </span>La matriz simétrica booleana es una matriz cuadrada con la propiedad de que los elementos que se encuentran en la parte superior y baja de la diagonal principal son iguales. El término simétrico se refiere a que la matriz es simétrica con respecto a su diagonal principal. Esta matriz contiene sólo valores booleanos: verdadero o falso. La matriz simétrica booleana se usa en problemas que requieren una representación binaria de la asimetría. Se usa ampliamente en programación, ciencia de la computación, lógica y matemáticas</li>
                <li><span>Matriz Reflexiva: </span>Una matriz reflexiva es una matriz cuadrada en la que la diagonal principal se compone de unos. Esto significa que cada elemento de la diagonal principal es igual a 1 y el resto de los elementos son iguales a 0. Esta matriz es muy útil para algunas aplicaciones como en el análisis de grafos, modelos de redes neuronales, sistemas de ecuaciones lineales, etc. </li>
                <li><span>Matriz Antisimétrica: </span>Una matriz antisimétrica booleana es una matriz cuadrada que contiene sólo valores lógicos (verdadero o falso). Esta matriz cumple la propiedad de que si el ij es verdadero, entonces ji es falso, y viceversa. Esto significa que si un elemento en la fila i y la columna j es verdadero, el elemento en la fila j y la columna i es falso.Las matrices antisimétricas son útiles para representar relaciones entre elementos, como relaciones en un grafo.</li>
                <li><span>Matriz Transitiva: </span>La matriz transitiva booleana es una tabla de verdad donde se muestran la relación de dos conjuntos de datos, donde los valores de los elementos del primer conjunto se relacionan con los valores del segundo conjunto. Los valores de la matriz transitiva booleana pueden ser verdaderos o falsos. Esta matriz se usa principalmente para encontrar relaciones entre los elementos de los dos conjuntos de datos y para determinar si hay relaciones entre ellos. La matriz transitiva booleana se puede usar para simplificar problemas de decisión, como encontrar el camino más corto entre dos puntos o determinar el orden en el que se deben completar varias tareas.
                </li>
            </ol> */}
        </>
    )
}

export default Information