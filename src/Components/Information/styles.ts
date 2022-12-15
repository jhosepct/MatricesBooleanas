import styled from "@emotion/styled";

export const Wrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
    & h1{
        font-size: 2rem;
    }
    
    & p{
        width: 400px;
        text-align: center;
    }

`;

export const Ul = styled.ul`
    position: absolute; 
    width: calc(100% - 6rem);
    
    display: flex;
    justify-content: center;
    align-items: center;
    
    color: #000;
    bottom: 50px;
    gap: 3rem;
    align-items: center;

    & li{
        list-style: none;
        width: 100px;
        max-height: 100px;
        scroll-y: hidden;
        text-align: center;
        cursor: pointer;
    }
    & li span{
        font-size: 1rem;
        font-weight: 600;
    }
`;