import styled from "@emotion/styled";

export const Wrapper = styled.div`
    position: relative;
    & span{
        position: absolute;
        width: 100px;       
        font-size: 0.5rem;
        color: #000;
        z-index: 101;
    }
`;