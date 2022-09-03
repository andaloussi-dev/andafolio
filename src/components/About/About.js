import React from 'react'
import { Container, Left, Right, Title, Code, CodeContainer, Color, ColorsContainer, Content, Dots } from './AboutStyles'

const About = () => {
  return (
    <Container>
      <Left>
        <Title>About Me</Title>
        <Content>
          Hello! My name is Brittany and I enjoy creating things that live on the internet.
          My interest in web development started back in 2012 when I decided to try editing
          custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!
        </Content>
      </Left>
      <Right>

        <CodeContainer>
          <Code>
            1&nbsp;&nbsp;class <b>Person</b> {'{'}
          </Code>
          <Code>
            2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; constructor() {'{'}
          </Code>
          <Code>
            3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; this.name = "<b>Mohamed Andaloussi</b>";
          </Code>
          <Code>
            4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; this.traits = ["<b>DESIGN</b>", "<b>DEV</b>"];
          </Code>
          <Code>
            5&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; this.age ={' new Date().getFullYear() - 1996; '};
          </Code>
          <Code>
            6&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'}'}
          </Code>
          <Code>
            <pre>7&nbsp;&nbsp;{'}'}</pre>
          </Code>
        </CodeContainer>
        <ColorsContainer>
          <Color></Color>
        </ColorsContainer>
      </Right>
    </Container>
  )
}

export default About