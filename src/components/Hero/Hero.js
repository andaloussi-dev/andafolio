import React from 'react'
import { Container, Title, Button, Desc, Name , SubTitle, Wrapper} from './HeroStyles'

const Hero = () => {
  return (
    <Container>
      <Wrapper>
      <Name>Hi, my name is</Name>
      <Title>Mohamed Andaloussi.</Title>
      <SubTitle>I build things for the web.</SubTitle>
      <Desc>I’m a software engineer specializing in building (and occasionally
        designing) exceptional digital experiences. Currently, I’m focused
        on building accessible, human-centered products at Upstatement.</Desc>
      <Button> Contact Me</Button>
      </Wrapper>
    </Container>

  )
}

export default Hero