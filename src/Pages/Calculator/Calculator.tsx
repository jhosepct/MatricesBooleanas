import React from 'react'
import Article from '../../Components/Article'
import FormMatriz from '../../Components/FormMatriz'
import Header from '../../Components/Header'
import Matriz from '../../Components/Matriz'
import Results from '../../Components/Results'
import { WrapperResults, Wrapper, Section } from './styles'

const Calculator = () => {
    const [order, setOrder] = React.useState<number>(0);

    const [tempOrder, setTempOrder] = React.useState<number>(0);

    const [start, setStart] = React.useState<boolean>(false);

    const [values, setValues] = React.useState<{}>({});

    const [placeholder, setPlaceholder] = React.useState<string[]>([]);

    const [showResult, setShowResult] = React.useState<boolean>(false);

    const [matriz, setMatriz] = React.useState<number[][]>([]);


    // Propiedades de orden de matriz
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.value) {
            if (Number(event.target.value) > 15) event.target.value = '15';
            if (Number(event.target.value) < 1) event.target.value = '1';
            if (order) {
                setTempOrder(Number.parseInt(event.target.value));
            } else {
                setOrder(Number.parseInt(event.target.value));
            }
        }
    }

    const handleSubmit = (event: React.BaseSyntheticEvent<Event, EventTarget & HTMLFormElement, EventTarget>) => {
        event.preventDefault();
        setStart(true);
        if (tempOrder) {
            setValues(generateInitialNames(tempOrder));
            setPlaceholder(generateValuesPlaceholder(tempOrder));
            setOrder(tempOrder);
        } else {
            setValues(generateInitialNames(order));
            setPlaceholder(generateValuesPlaceholder(order));
        }
        setShowResult(false);
    }

    const generateInitialNames = (order: number) => {

        const valuesForm: { [key: string]: string } = {};
        for (let i = 0; i < order; i++) {
            for (let j = 0; j < order; j++) {
                valuesForm[`order${i}${j}`] = "";
            }
        }
        return valuesForm;
    }


    // Propiedades de valores de matriz

    const handleSubmitValues = (event: React.BaseSyntheticEvent<Event, EventTarget & HTMLFormElement, EventTarget>) => {
        event.preventDefault();

        const valores = Object.values(values).map(value => Number(value));
        setShowResult(true);
        const result = generateTableMatriz(valores, order);
        setMatriz(result);
    }

    const handleChangeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        let { name, value } = event.target;
        value = Number(value) > 1 ? `1` : Number(value) < -1 ? `-1` : value;
        setValues({ ...values, [name]: value });
    }


    const handleClickDeleteValues = () => {
        setValues(generateInitialNames(order));
        setShowResult(false);
    }


    const generateValuesPlaceholder = (order: number) => {
        const valuesForm = [];
        for (let i = 0; i < order; i++) {
            for (let j = 0; j < order; j++) {
                valuesForm.push(`a${i + 1}${j + 1}`);
            }
        }
        return valuesForm;
    }

    const generateTableMatriz = (values: number[], order: number): number[][] => {
        const table: number[][] = [];
        let iterador = 0;
        for (let i = 0; i < order; i++) {
            const row: number[] = [];
            for (let j = 0; j < order; j++) {
                row.push(values[iterador]);
                iterador++;
            }
            table.push(row);
        }
        return table;
    }
    return (
        <Wrapper>
            <Header />
            <Article>
                <Section>
                    <FormMatriz handleSubmit={handleSubmit} handleChange={handleChange} />
                    <div><h2>Llene los datos de la tabla</h2></div>
                    <WrapperResults>
                        {start && (
                            <Matriz handleSubmitValues={handleSubmitValues} values={values} order={order} handleClickDeleteValues={handleClickDeleteValues} placeholder={placeholder} handleChangeValue={handleChangeValue} />
                        )}
                        <Results showResult={showResult} matriz={matriz} />
                    </WrapperResults>
                </Section>
            </Article>
        </Wrapper>
    )
}

export default Calculator