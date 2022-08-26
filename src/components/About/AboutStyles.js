import styled from "styled-components";

export const Container=styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100vh;
`; 

export const SmallTitle = styled.p`

`;

export const Title = styled.h2`

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
    width: 20vw;
    height: 15vw;
    border-radius: 10px;
    backdrop-filter: blur(100px);
    background: linear-gradient(116.29deg, rgba(255, 255, 255, 0.35) -29.94%, rgba(255, 255, 255, 0.26) -29.93%, rgba(255, 255, 255, 0.15) 101.76%);
`;

export const Ellipse = styled.div`
    width: 409px;
    height: 409px;
    border-radius: 50%;
    position: absolute;
    background:linear-gradient(330.74deg, #0047D1 -6.98%, #71A1FF 138.38%);
    z-index: -1;
`;

export const Code = styled.pre`

`;

export const ColorsContainer = styled.div`

`;

export const Color = styled.div`


`;
export const Left = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

`;
