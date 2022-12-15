import styled from "@emotion/styled";

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    & input {
        border: none;
        background-color: transparent;
        border-bottom: 1px solid #fff;
        color: #fff;
        padding: 0.5rem;
    }

    & input:focus {
        outline: none;
        border-bottom: 1px solid #494295;
    }
`