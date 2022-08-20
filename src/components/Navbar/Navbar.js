import React from 'react'
import { Container, Logo, Menu, ListItem, Button, Left, Right } from './NavbarStyles'
const Navbar = () => {
    return (
        <Container>
            <Left>
                <Logo/>
            </Left>
            <Right>
                <Menu>
                    <ListItem>About</ListItem>
                    <ListItem>Experience</ListItem>
                    <ListItem>Work</ListItem>
                    <ListItem>Contact</ListItem>
                </Menu>
            </Right>
            <Button> Resume </Button>
        </Container>
    )
}

export default Navbar