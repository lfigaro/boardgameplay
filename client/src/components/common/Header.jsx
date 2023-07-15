import React, { Component } from 'react'
import styled from 'styled-components'

import Logo from './Logo'
import Login from './Login'
import { Link } from 'react-router-dom'

const Container = styled.div.attrs({
    className: 'container',
})``

const Nav = styled.nav.attrs({
    className: 'navbar navbar-expand-lg navbar-dark bg-dark',
})`
    margin-bottom: 20 px;
`

const Collapse = styled.div.attrs({
    className: 'collpase navbar-collapse',
})``

const List = styled.div.attrs({
    className: 'navbar-nav mr-auto',
})``

const Item = styled.div.attrs({
    className: 'collpase navbar-collapse',
})``

class Header extends Component {
    render() {
        return (
            <Container>
                <Nav>
                    <Collapse>
                        <List>
                            <Item>
                                <Logo />
                            </Item>
                            <Item>
                                <Link to="/" className="navbar-brand">
                                    BoardGamePlay
                                </Link>
                            </Item>
                            <Item>
                                <Login />
                            </Item>
                        </List>
                    </Collapse>
                </Nav>
            </Container>
        )
    }
}

export default Header