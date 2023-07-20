import React, { Component } from 'react'
import styled from 'styled-components'

import Links from './Links'
import Search from './Search'

const List = styled.ul.attrs({
    className: 'nav',
})``

class Nav extends Component {
    render() {
        return (
            <List>
                <Links />
                <Search />
            </List>
        )
    }
}

export default Nav