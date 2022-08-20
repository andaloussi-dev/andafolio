import styled from "styled-components";
import logo from "../../assets/images/logo.svg";

export const Container = styled.div`
    padding: 0 var(--gap-l);
    height: var(--nav-height);
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
export const Logo = styled.img.attrs({ src: logo })`
    padding: 0 var(--gap-l);
    width: 50px;
    filter: invert(79%) sepia(35%) saturate(575%) hue-rotate(107deg) brightness(105%) contrast(102%);
`;

export const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;

export const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content:flex-end;
`;

export const Menu = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-family: var(--font-mono);
    font-size: var(--fz-s);
    color: var(--white);
    transition: var(--transition);
`;

export const ListItem = styled.a`
    padding: 0 var(--gap);
    cursor: pointer; 
    &:hover {
        color: var(--green);
    }
`;


export const Button = styled.button`
    color: var(--green);
    background-color: transparent;
    border: 1px solid var(--green);
    font-weight: 900;
    border-radius: var(--border-radius);
    padding: 0.75rem 1rem;
    font-family: var(--font-mono);
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    transition: var(--transition);
    font-size: var(--fz-s);
    &:hover {
        background-color: var(--green-tint);
    }
`;