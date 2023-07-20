import React, { Component } from 'react'
import styled from 'styled-components'

import Links from './Links'
import Search from './Search'

const Container = styled.div.attrs({
    className: 'container',
})`
    collapse navbar-collapse
`

const NavBar = styled.ul.attrs({
    className: 'nav',
})``

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