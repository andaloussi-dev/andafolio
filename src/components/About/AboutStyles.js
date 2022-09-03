import styled from "styled-components";
import Dotsbg from "../../assets/images/stripes.svg";
export const Container = styled.div`
    display: flex;
    justify-content: space-evenly;
    gap: 1;
    align-items: center;
    height: 100vh;
    position: relative;
    flex-wrap: wrap;
    @media (max-width: 768px) {
        padding: 25px;
        height: 75vh;
      }

`;

export const SmallTitle = styled.p`

`;

export const Dots = styled.span`
    width: 30vw;
    height: 15vw;
    background-size: 10px;
    background-image: url(${Dotsbg});
    position: absolute;
    z-index: -1;
    top: 0px;
    right: 0px;
    opacity: 0.7;
`;


export const Title = styled.h2`
    margin:0;
    font-size: clamp(26px,5vw,var(--fz-heading));
    line-height: 1.1;
    color: var(--lightest-slate);
    font-weight: 600; 
    &:after {  
        content: "";
        display: block;
        position: relative;
        top: -5px;
        width: 300px;
        height: 1px;
        background-color: var(--green);
    }
`;

export const Content = styled.span`
    margin-top: 20px;
    color: var(--slate);
    font-family: var(--font-sans);
    font-size: var(--fz-xl);
    line-height: 1.3;
    max-width: 600px;
`;
export const Right = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
`;

export const CodeContainer = styled.div`
    padding: 30px 35px;
    border-radius: 10px;
    background: var(--dark-navy);
    position: relative;
    max-width: 70vw;

    &:after {
        position: absolute;
        content: "";
        top: calc(100% / 6);
        left: 0;
        right: 0;
        z-index: -1;
        height: 100%;
        width: 100%;
        margin: 0 auto;
        transform: scale(0.8);
        filter: blur(calc(30vw / 6));
        background-image: linear-gradient( var(--rotate) ,#04f1fd,#04fdaa 43%,#2196f3);
        opacity: 1;
        transition: opacity .5s;
        animation: spin 2.5s linear infinite; 
        @media (max-width: 768px) {
            top: calc(50% / 6);
            filter: blur(calc(70vw / 6));
        }
    }

    &:before {
        content: "";
        width: 103%;
        height: 103%;
        border-radius: 8px;
        background-image: linear-gradient( var(--rotate) ,#04f1fd,#04fdaa 43%,#2196f3);
        position: absolute;
        z-index: -1;
        top: -1%;
        left: -1.5%;
        animation: spin 2.5s linear infinite;         
    }
`;


export const Code = styled.pre`
    font-size: var(--fz-md);
    color: var(--white);
    @media (max-width: 768px) {
        font-size: x-small;
      }
`;

export const ColorsContainer = styled.div`

`;

export const Color = styled.div`


`;
export const Left = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
`;
