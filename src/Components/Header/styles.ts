import styled from "@emotion/styled";
import { HeaderProps } from ".";

export const Header = styled.header<HeaderProps>`
background:${(props) => props.bgColor};
display: flex;
justify-content: space-between;
align-items: center;
padding: 0.25rem 3rem;
color: #000;
font-size: 1.25rem;
`

export const Title = styled.p`
font-size: 2rem;
color: #fff;
font-weight: 700;
`;

export const Nav = styled.nav`
& ul{
    display: flex;
    gap: 3rem;
    align-items: center;
}

& li{
    list-style: none;
}

& a{
    
    list-style: none;
    padding: 0.5rem 1rem;
    border-radius: 1rem;
    text-decoration: none;
    color: #fff;
}

& a:hover, & a.active{
    background: linear-gradient(90deg, rgba(53,37,93,1) 0%, rgba(23,12,79,1) 48%, rgba(9,5,71,1) 100%);
    color: #fff;
}
`;