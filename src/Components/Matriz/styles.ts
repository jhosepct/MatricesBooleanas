import styled from "@emotion/styled";
import { FormProps } from ".";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  // background: #dddddd;
    // border-radius: 10px;
    // box-shadow: 0px 5px 5px #909090, 0px 0px 5px #f2f2f2;
  padding: 1rem;
`;

export const ContainerMatriz = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

export const FormStyled = styled.form<FormProps>`
  border-left: 1px solid #fff;
  border-right: 1px solid #fff;
  display: grid;
  grid-template-columns: repeat(${props => props.col}, 1fr);
  width: calc(${props => props.col * 50}px + ${props => (props.col - 1) * 10}px);
  grid-gap: 10px;
  padding: 10px;

  & input {
    background-color: transparent;
    padding: 0;
    margin:0;
    width: 50px;
    height: 49px;
    text-align: center;
    border: none;
    border-bottom: 1px solid #fff; 
    color: #fff;
  }

  & input:focus {
    outline: none;
  }

  & input::placeholder {
    color: #fff;
    opacity: 0.5;
  }

  & input:invalid {
    border-bottom: 1px solid #000000;
  }

  & input:valid {
    border-bottom: 1px solid transparent;
  }
`
export const WrapperButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-direction: column;
`;