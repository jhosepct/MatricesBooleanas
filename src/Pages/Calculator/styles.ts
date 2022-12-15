import styled from "@emotion/styled";

import Fondo from '../../assets/images/fondo2.webp';

export const Wrapper = styled.div`
    
    background-image: url('${Fondo}');
    width: 100%;
    height: 100vh;
`;

export const WrapperResults = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    
`;

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #fff;
`;