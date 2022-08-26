import React from 'react'
import {Container,Left,Right,SmallTitle,Title,Code,CodeContainer,Color,ColorsContainer,Ellipse} from './AboutStyles'

const About = () => {
  return (
    <Container>
      <Left>
        <SmallTitle>Hello</SmallTitle>
        <Title>Hello</Title>
      </Left>
      <Right>
        
        <CodeContainer>
          <Code></Code>
        </CodeContainer>
        <ColorsContainer>
          <Color></Color>
        </ColorsContainer>
        <Ellipse/>
      </Right>
    </Container>
  )
}

export default About