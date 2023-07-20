import React, { Component } from 'react'
import styled from 'styled-components'

import Logo from './Logo'
import Login from './Login'
import { Link } from 'react-router-dom'

const Nav = styled.nav.attrs({
    className: 'navbar navbar-expand-sm navbar-light justify-content-between',
})`
    background-color: #e3f2fd;
`

const List = styled.ul.attrs({
    className: 'navbar-nav',
})``

const Item = styled.li.attrs({
    className: 'navbar-expand-sm navbar-collapse',
})``

class Header extends Component {
    render() {
        return (
            <Nav>
                <List>
                    <Item className='navbar-brand' >
                        <Logo />
                    </Item>
                    <Item>
                        <Link to="/" className="navbar-brand">
                            BoardGamePlay
                        </Link>
                    </Item>
                </List>
                <List>
                    <Item>
                        <Login />
                    </Item>
                </List>
            </Nav>
        )
    }
}

export default Header