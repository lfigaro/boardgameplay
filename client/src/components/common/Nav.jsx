import React, { Component } from 'react'
import styled from 'styled-components'

import Links from './Links'
import Search from './Search'

const Container = styled.div.attrs({
    className: 'container',
})``

const NavBar = styled.nav.attrs({
    className: 'nav',
})`
    margin-bottom: 20 px;
`

class Nav extends Component {
    render() {
        return (
            <Container>
                <NavBar>
                    <Links />
                    <Search />
                </NavBar>
            </Container>
        )
    }
}

export default Nav