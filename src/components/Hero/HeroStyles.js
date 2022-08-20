import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    height: 70vh;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const Wrapper = styled.div`
    align-items: start;
    justify-content: center;
`;

export const Name = styled.p`
    color: var(--green);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm),5vw,var(--fz-md));
    font-weight: 400;
    line-height: 1.1;
`;

export const Title = styled.h1`
    font-size: clamp(40px, 8vw, 80px);
    line-height: 1.1;
    color: var(--lightest-slate);
    font-weight: 600;
`;
export const SubTitle = styled.h2`
    margin-top: 10px;
    color: var(--slate);
    line-height: 0;
    font-size: clamp(40px, 8vw, 80px);
`;

export const Desc = styled.p`
    max-width: 700px;
    margin: 20px 0px 0px;
    color: var(--slate);
    font-family: var(--font-sans);
    font-size: var(--fz-xxl);
`;

export const Button = styled.button`
    color: var(--green);
    background-color: transparent;
    border: 1px solid var(--green);
    font-weight: 900;
    border-radius: var(--border-radius);
    padding: 1.25rem 1.75rem;
    font-family: var(--font-mono);
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    transition: var(--transition);
    font-size: var(--fz-sm);
    margin-top: 50px;
    &:hover {
        background-color: var(--green-tint);
    }
`;