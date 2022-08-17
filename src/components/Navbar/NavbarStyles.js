import styled from "styled-components";

export const Container = styled.div`
    padding: 0 var(--gap-l);
    height: var(--nav-height);
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
export const Logo = styled.div`
    font-size: var(--fz-heading);
    font-family: var(--font-sans);
    color: var(--dark-blue);
    font-weight: 900;
    text-transform: uppercase;

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
    color: var(--dark-blue);
    transition: var(--transition);
`;

export const ListItem = styled.a`
    padding: 0 var(--gap);
    cursor: pointer;
`;


export const Button = styled.button`
    color: var(--light-blue);
    background-color: transparent;
    border: 1px solid var(--violet);
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