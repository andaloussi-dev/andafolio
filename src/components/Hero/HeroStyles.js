import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    align-items: Center;
    min-height: 100vh;
    padding: 0;
    position: relative;

    @media (max-width: 768px) {
        padding: 25px;
        min-height: 80vh;
      }

    @media (max-width: 480px) and (min-height: 700px) {
        padding-bottom: 10vh;
      }
`;

export const Wrapper = styled.div`
    align-items: start;
    justify-content: center;

`;

export const Circle = styled.div`
    position: absolute;
    z-index: 20;
    left: 0px;
    top:   0px;
    width: 30vw;
    height: 30vw;
    opacity: 0.8;
    filter: blur(200px);
    background: linear-gradient(180deg,rgb(163 185 183 / 0%) 0%,rgb(1 246 167 / 47%) 100%);

    @media (max-width: 480px) and (min-height: 700px) {
        width: 100vw;
        height: 100vw;
        left: 0px;
        top:   30px;
      }

`;

export const Name = styled.p`
    margin: 0 0 30px 4px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 400;
    @media (max-width: 480px) {
    margin: 0 0 20px 2px;
    }
`;

export const Title = styled.h1`
    margin:0;
    font-size: clamp(38px, 8vw, 80px);
    line-height: 1.1;
    color: var(--lightest-slate);
    font-weight: 600;
    
`;
export const SubTitle = styled.h2`
    padding-top:20px;
    font-size: clamp(38px, 8vw, 80px);
    margin: 0;
    color: var(--slate);
    line-height: 0.9;
`;

export const Desc = styled.p`
    max-width: 700px;
    margin: 20px 0px 0px;
    color: var(--slate);
    font-family: var(--font-sans);

    @media (max-width: 768px) {
        font-size: var(--fz-l);
    }
    font-size: var(--fz-xxl);
`;

export const Button = styled.button`
    margin: 20px 0px 0px;
    color: var(--green);
    background-color: transparent;
    border: 1px solid var(--green);
    border-radius: var(--border-radius);
    padding: 1.25rem 1.75rem;
    font-size: var(--fz-sm);
    font-family: var(--font-mono);
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    transition: var(--transition);
    &:hover,
    &:focus,
    &:active {
    background-color: var(--green-tint);
    outline: none;
    }
    &:after {
    display: none !important;
    }
`;